// import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Button } from '../../ui/buttons/Button';
import { ChatMessage } from '../ChatMessage';
import { QuestChatBottomPannel } from '../QuestChatBottomPannel';
import { QuestChatTopPannel } from '../QuestChatTopPannel/QuestChatTopPannel';
import s from './style.module.scss';

export function QuestChat({ className }) {
  // useEffect(() => {}, []);

  return (
    <div className={cn(s.questChat, className)}>
      <QuestChatTopPannel />
      <div className={cn(s.questChat__chat)}>
        <ChatMessage />
        <Button className={cn(s.questChat__scrollDown)} />
      </div>
      <QuestChatBottomPannel />
    </div>
  );
}
