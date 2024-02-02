import { Howler } from 'howler';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SoundSwitchStatus } from '../constants/SoundSwitchStatus';
import { formatTimeFromSeconds } from '../helpers/formatTimeFromSeconds';
import {
  setSoundId,
  soundSettings,
  switchSound,
} from '../store/slices/soundSettingsSlice';

export function usePlayer(sound, id) {
  const dispatch = useDispatch();
  const { soundId, soundIds, soundRate, audioVolume, soundSwitch } =
    useSelector(soundSettings);
  const [switchStatus, setSwitchStatus] = useState(SoundSwitchStatus.On);
  const [progress, setProgress] = useState();
  const [duration, setDuration] = useState();

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
        setDuration(formatTimeFromSeconds(sound.duration(id)));
      },
      id
    );

    sound.once(
      'play',
      () => {
        timer = setInterval(() => {
          setProgress(Math.ceil((sound.seek(id) / sound.duration(id)) * maxPercent));
        }, interval);
        setSwitchStatus(SoundSwitchStatus.Off);
      },
      id
    );

    sound.once(
      'pause',
      () => {
        clearInterval(timer);
        setSwitchStatus(SoundSwitchStatus.On);
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
        setProgress(minPercent);
      },
      id
    );
  }

  const switchAudio = () => {
    if (sound) {
      if (switchStatus) {
        if (sound.playing() || id !== soundId) {
          Howler.stop();
        }
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
      Howler.stop();
      dispatch(setSoundId(id - step));
      sound.play(id - step);
      dispatch(switchSound(SoundSwitchStatus.Off));
      setSwitchStatus(SoundSwitchStatus.Off);
    }
  };

  const switchToNext = () => {
    if (sound && id && id < maxNum) {
      Howler.stop();
      dispatch(setSoundId(id + step));
      sound.play(id + step);
      dispatch(switchSound(SoundSwitchStatus.Off));
      setSwitchStatus(SoundSwitchStatus.Off);
    }
  };

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
