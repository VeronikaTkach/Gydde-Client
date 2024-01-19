import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import sound from '../../../assets/images/sound.svg';

export function AudioRate() {
  const [rate, setRate] = useState(1);

  const toggleRate = () => {
    const newRate = rate === 1 ? 2 : 1;
    setRate(newRate);
  };
  // useEffect(() => {

  // }, []);

  return (
    <>
      <div className={s.audioRate}>
        <div className={s.audioRate_main}>
          <Button className={s.audioRate__btn} onClick={toggleRate}>
            {rate === 1 ? '1x' : '2x'}
          </Button>
        </div>
        <button className={cn(s.audioRate__sound)}>
          <img src={sound} />
        </button>
      </div>
    </>
  );
}
