import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';


export function AudioRate({ className }) {

  useEffect(() => {

  }, []);

  return (
    <div className={cn(s.audioRate, className)}>

    </div>
  );
}
