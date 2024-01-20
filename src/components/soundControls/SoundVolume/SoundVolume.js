import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import sound from '../../../assets/images/sound.svg';

export function SoundVolume() {
  // useEffect(() => {

  // }, []);

  return (
    <div className={cn(s.audioRate)}>
      <button className={cn(s.audioRate__sound)}>
        <img src={sound} />
      </button>
    </div>
  );
}
