import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import soundOn from '../../../assets/images/sound.svg';
import soundOff from '../../../assets/images/soundOff.svg';
import { AudioVolume } from '../../../core/constants/AudioVolume';
import { setAudioVolume } from '../../../core/store/slices/soundSettingsSlice';

export function SoundVolume() {
  const [soundVolume, setSoundVolume] = useState(AudioVolume.On);
  const [soundVolumeImg, setSoundVolumeImg] = useState(soundOn);
  const dispatch = useDispatch();
  const toggleVolume = () => {
    if (soundVolume) {
      setSoundVolume(AudioVolume.Off);
      setSoundVolumeImg(soundOff);
    } else {
      setSoundVolume(AudioVolume.On);
      setSoundVolumeImg(soundOn);
    }
  };

  useEffect(() => {
    dispatch(setAudioVolume(soundVolume));
  }, [soundVolume]);

  return (
    <div className={cn(s.soundVolume)}>
      <Button className={cn(s.soundVolume__sound)} onClick={toggleVolume}>
        <img src={soundVolumeImg} />
      </Button>
    </div>
  );
}
