import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';

export function QuestChatBottomPannel({ className }) {
  useEffect(() => {}, []);

  return (
    <div className={cn(s.chatBottomPannel, className)}>
      <div className={cn(s.chatBottomPannel__answer, s.chatBottomPannel__answer_general)}>
        <input className={cn(s.chatBottomPannel__input)} />
        <Button />
      </div>
      <div
        className={cn(
          s.chatBottomPannel__answer,
          s.chatBottomPannel__answer_buttons
        )}></div>
    </div>
  );
}
