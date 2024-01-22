import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { AudioVolume } from '../../../core/constants/AudioVolume';
import { setAudioVolume } from '../../../core/store/slices/soundSettingsSlice';

export function SoundVolume() {
  const [soundVolume, setSoundVolume] = useState(AudioVolume.On);
  const dispatch = useDispatch();

  const classes = cn(s.soundVolume, {
    [s.soundVolume__off]: soundVolume === AudioVolume.Off,
  });

  const toggleVolume = () => {
    if (soundVolume) {
      setSoundVolume(AudioVolume.Off);
    } else {
      setSoundVolume(AudioVolume.On);
    }
  };

  useEffect(() => {
    dispatch(setAudioVolume(soundVolume));
  }, [soundVolume]);

  return <Button className={classes} onClick={toggleVolume}></Button>;
}
