import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';


export function ChatMessage({ className }) {

  useEffect(() => {

  }, []);

  return (
    <div className={cn(s.chatMessage, className)}>
      <div className={cn(s.chatMessage__time)}>

      </div>
    </div>
  );
}
