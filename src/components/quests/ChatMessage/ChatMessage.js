import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { AudioPlayerWithProgressBar } from '../../soundControls/AudioPlayer/AudioPlayerWithProgressBar';

export function ChatMessage({ className }) {
  useEffect(() => {}, []);

  return (
    <div className={cn(s.chatMessage, className)}>
      <AudioPlayerWithProgressBar />
      <AudioPlayerWithProgressBar />
      <div className={cn(s.chatMessage__time)}></div>
    </div>
  );
}
