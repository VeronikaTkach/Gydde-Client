import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { SoundRate } from '../../../core/constants/SoundRate';
import { setSoundRate } from '../../../core/store/slices/soundSettingsSlice';

export function AudioRate() {
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
    <>
      <div className={s.audioRate}>
        <div className={s.audioRate_main}>
          <Button className={s.audioRate__btn} onClick={switchRate}>
            {rate + 'x'}
          </Button>
        </div>
      </div>
    </>
  );
}
