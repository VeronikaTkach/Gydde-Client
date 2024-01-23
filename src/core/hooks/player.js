import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatTimeFromSeconds } from '../helpers/formatTimeFromSeconds';
import { soundSettings, switchSound } from '../store/slices/soundSettingsSlice';
import { SoundSwitchStatus } from '../constants/SoundSwitchStatus';

export function usePlayer(sound) {
  const dispatch = useDispatch();
  const { soundRate, audioVolume, soundSwitch } = useSelector(soundSettings);
  const [switchStatus, setSwitchStatus] = useState(soundSwitch);
  const [progress, setProgress] = useState(sound.seek());
  const [duration, setDuration] = useState(formatTimeFromSeconds(sound.duration()));

  useEffect(() => {
    dispatch(switchSound(switchStatus));
  }, [switchStatus]);

  const interval = 100;
  const timeout = 300;
  const minPercent = 0;
  const maxPercent = 100;
  let timer;

  sound.rate(soundRate);
  sound.volume(audioVolume);

  sound.once('load', () => {
    setDuration(formatTimeFromSeconds(sound.duration()));
  });

  sound.once('play', () => {
    timer = setInterval(() => {
      setProgress(Math.ceil((sound.seek() / sound.duration()) * maxPercent));
    }, interval);
    setSwitchStatus(SoundSwitchStatus.Off);
    // dispatch(switchSound(SoundSwitchStatus.Off));
  });

  sound.once('pause', () => {
    clearInterval(timer);
    setSwitchStatus(SoundSwitchStatus.On);
    // dispatch(switchSound(SoundSwitchStatus.On));
  });

  sound.once('end', () => {
    setSwitchStatus(SoundSwitchStatus.On);
    clearInterval(timer);
    setProgress(maxPercent);
    setTimeout(() => {
      setProgress(minPercent);
    }, timeout);
  });

  const switchAudio = () => {
    if (soundSwitch) {
      sound.play();
      dispatch(switchSound(SoundSwitchStatus.Off));
      //   console.log('in switchAudio if');
    } else {
      sound.pause();
      dispatch(switchSound(SoundSwitchStatus.On));
      clearInterval(timer);
      //   console.log('in switchAudio else');
    }
  };

  return { soundSwitch, progress, duration, switchAudio };
}
