import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { AudioVolume } from '../../../core/constants/AudioVolume';
import {
  setAudioVolume,
  soundSettings,
} from '../../../core/store/slices/soundSettingsSlice';

export function SoundVolume() {
  const { audioVolume } = useSelector(soundSettings);
  const dispatch = useDispatch();

  const classes = cn(s.soundVolume, {
    [s.soundVolume__off]: audioVolume === AudioVolume.Off,
  });

  const toggleVolume = () => {
    if (audioVolume) {
      dispatch(setAudioVolume(AudioVolume.Off));
    } else {
      dispatch(setAudioVolume(AudioVolume.On));
    }
  };

  return <Button className={classes} onClick={toggleVolume}></Button>;
}
