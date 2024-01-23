import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { SoundRate } from '../../../core/constants/SoundRate';
import {
  setSoundRate,
  soundSettings,
} from '../../../core/store/slices/soundSettingsSlice';

export function AudioRate({ className }) {
  const { soundRate } = useSelector(soundSettings);
  const dispatch = useDispatch();

  const switchRate = () => {
    switch (soundRate) {
      case SoundRate.Normal:
        dispatch(setSoundRate(SoundRate.Medium));
        break;
      case SoundRate.Medium:
        dispatch(setSoundRate(SoundRate.Fast));
        break;
      case SoundRate.Fast:
        dispatch(setSoundRate(SoundRate.Normal));
        break;
    }
  };

  return (
    <Button className={cn(s.audioRate, className)} onClick={switchRate}>
      {soundRate + 'x'}
    </Button>
  );
}
