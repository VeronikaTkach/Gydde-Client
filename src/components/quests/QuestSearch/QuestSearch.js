import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';

export function QuestSearch({ className }) {

  useEffect(() => {

  }, []);

  return (
    <div className={cn(s.questSearch, className)}>
      <input className={cn(s.questSearch__input)} />
      <Button className={cn(s.questSearch__button, '')} />
    </div>
  );
}
