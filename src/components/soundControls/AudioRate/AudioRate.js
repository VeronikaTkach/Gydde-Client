import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { SoundRate } from '../../../core/constants/SoundRate';
import { setSoundRate } from '../../../core/store/slices/soundSettingsSlice';

export function AudioRate({className}) {
  const [rate, setRate] = useState(SoundRate.Normal);
  const dispatch = useDispatch();

  const switchRate = () => {
    switch (rate) {
      case SoundRate.Normal:
        setRate(SoundRate.Medium);
        break;
      case SoundRate.Medium:
        setRate(SoundRate.Fast);
        break;
      case SoundRate.Fast:
        setRate(SoundRate.Normal);
        break;
    }
  };

  useEffect(() => {
    dispatch(setSoundRate(rate));
  }, [rate]);

  return (
    <Button className={cn(s.audioRate, className)} onClick={switchRate}>
      {rate + 'x'}
    </Button>
  );
}
