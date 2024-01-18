import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { QuestSearch } from '../QuestSearch';


export function QuestSidePannel({ className }) {

  useEffect(() => {

  }, []);

  return (
    <div className={cn(s.questSidePannel, className)}>
      <QuestSearch />
    </div>
  );
}
