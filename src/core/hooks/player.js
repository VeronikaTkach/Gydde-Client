import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Howler } from 'howler';
import { formatTimeFromSeconds } from '../helpers/formatTimeFromSeconds';
import {
  setSoundId,
  soundSettings,
  switchSound,
} from '../store/slices/soundSettingsSlice';
import { SoundSwitchStatus } from '../constants/SoundSwitchStatus';

export function usePlayer(sound, id) {
  const dispatch = useDispatch();
  const { soundIds, soundRate, audioVolume, soundSwitch } = useSelector(soundSettings);
  const [switchStatus, setSwitchStatus] = useState(SoundSwitchStatus.On);
  const [progress, setProgress] = useState(sound?.seek());
  const [duration, setDuration] = useState(formatTimeFromSeconds(sound?.duration()));
  // const soundId = useRef(null);

  // useEffect(() => {
  //   soundId.current = sound.play();
  // }, []);

  useEffect(() => {
    dispatch(switchSound(switchStatus));
  }, [switchStatus]);

  const interval = 100;
  const timeout = 300;
  const minPercent = 0;
  const maxPercent = 100;
  const step = 1;
  let timer;

  if (sound) {
    sound.rate(soundRate);
    sound.volume(audioVolume);

    sound.once(
      'load',
      () => {
        setDuration(formatTimeFromSeconds(sound.duration()));
      },
      id
    );

    sound.once(
      'play',
      () => {
        timer = setInterval(() => {
          setProgress(Math.ceil((sound.seek() / sound.duration()) * maxPercent));
        }, interval);
        setSwitchStatus(SoundSwitchStatus.Off);

        // dispatch(switchSound(SoundSwitchStatus.Off));
      },
      id
    );

    sound.once(
      'pause',
      () => {
        clearInterval(timer);
        setSwitchStatus(SoundSwitchStatus.On);
        // dispatch(switchSound(SoundSwitchStatus.On));
      },
      id
    );

    sound.once(
      'end',
      () => {
        setSwitchStatus(SoundSwitchStatus.On);
        dispatch(setSoundId(null));
        clearInterval(timer);
        setProgress(maxPercent);
        setTimeout(() => {
          setProgress(minPercent);
        }, timeout);
      },
      id
    );

    sound.once(
      'stop',
      () => {
        setSwitchStatus(SoundSwitchStatus.On);
        clearInterval(timer);
      },
      id
    );
  }

  const switchAudio = () => {
    if (switchStatus) {
      if (sound) {
        if (sound.playing()) {
          Howler.stop();
        }
        dispatch(setSoundId(id));
        sound.play(id);
        dispatch(switchSound(SoundSwitchStatus.Off));
        setSwitchStatus(SoundSwitchStatus.Off);
      }
    } else {
      if (sound) {
        sound.pause(id);
        dispatch(switchSound(SoundSwitchStatus.On));
        setSwitchStatus(SoundSwitchStatus.On);
        clearInterval(timer);
      }
    }
  };

  const switchRemoteAudio = () => {
    if (sound && id) {
      if (soundSwitch) {
        dispatch(setSoundId(id));
        sound.play(id);
        dispatch(switchSound(SoundSwitchStatus.Off));
        setSwitchStatus(SoundSwitchStatus.Off);
      } else {
        sound.pause(id);
        dispatch(switchSound(SoundSwitchStatus.On));
        setSwitchStatus(SoundSwitchStatus.On);
        clearInterval(timer);
      }
    }
  };

  const maxNum = Math.max(...soundIds);
  const minNum = Math.min(...soundIds);

  const switchToPrev = () => {
    if (sound && id && id > minNum) {
      if (sound.playing()) {
        Howler.stop();
      }
      dispatch(setSoundId(id - step));
      sound.play(id - step);
      dispatch(switchSound(SoundSwitchStatus.Off));
      setSwitchStatus(SoundSwitchStatus.Off);
    }
  };

  const switchToNext = () => {
    if (sound && id && id < maxNum) {
      if (sound.playing()) {
        Howler.stop();
      }
      dispatch(setSoundId(id + step));
      sound.play(id + step);
      dispatch(switchSound(SoundSwitchStatus.Off));
      setSwitchStatus(SoundSwitchStatus.Off);
    }
  };

  // console.log('sound', sound);
  // console.log('soundId', soundId);
  // console.log('soundIdRef', soundIdRef);
  // console.log('playing', sound.playing());

  return {
    soundSwitch,
    switchStatus,
    progress,
    duration,
    switchAudio,
    switchRemoteAudio,
    switchToPrev,
    switchToNext,
  };
}
