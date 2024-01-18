import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../ui/buttons/Button';


export function QuestChatCard({ className }) {

  useEffect(() => {

  }, []);

  return (
    <div className={cn(s.questCard, className)}>
      
    </div>
  );
}
