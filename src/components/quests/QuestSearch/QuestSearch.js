import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { InputSearch } from '../../ui/Input/InputSearch';

export function QuestSearch({ className }) {
  useEffect(() => {}, []);

  return (
    <div className={cn(s.questSearch, className)}>
      <InputSearch className={s.questSearch__input} />
    </div>
  );
}
