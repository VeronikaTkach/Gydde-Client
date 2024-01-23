import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatTimeFromSeconds } from '../helpers/formatTimeFromSeconds';
import { soundSettings, switchSound } from '../store/slices/soundSettingsSlice';
import { SoundSwitchStatus } from '../constants/SoundSwitchStatus';

export function usePlayer(sound) {
  const dispatch = useDispatch();
  const { soundRate, audioVolume, soundSwitch } = useSelector(soundSettings);
  const [switchStatus, setSwitchStatus] = useState(SoundSwitchStatus.On);
  const [progress, setProgress] = useState(sound.seek());
  const [duration, setDuration] = useState(formatTimeFromSeconds(sound.duration()));

  const interval = 100;
  const timeout = 300;
  const minPercent = 0;
  const maxPercent = 100;
  let timer;

  useEffect(() => {
    dispatch(switchSound(switchStatus));
  }, [switchStatus]);

  sound.rate(soundRate);
  sound.volume(audioVolume);

  sound.on('load', () => {
    setDuration(formatTimeFromSeconds(sound.duration()));
  });

  sound.once('play', () => {
    timer = setInterval(() => {
      setProgress(Math.ceil((sound.seek() / sound.duration()) * maxPercent));
    }, interval);
  });

  sound.on('pause', () => {
    clearInterval(timer);
    setSwitchStatus(SoundSwitchStatus.On);
  });

  sound.on('end', () => {
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
      setSwitchStatus(SoundSwitchStatus.Off);
    } else {
      sound.pause();
      setSwitchStatus(SoundSwitchStatus.On);
      clearInterval(timer);
    }
  };

  return { soundSwitch, progress, duration, switchAudio };
}
