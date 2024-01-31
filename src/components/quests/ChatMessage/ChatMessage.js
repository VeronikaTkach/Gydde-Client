// import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { AudioPlayerWithProgressBar } from '../../soundControls/AudioPlayer/AudioPlayerWithProgressBar';
import { GyddeMessage, UserMessage } from '../../ui/tags/Message';

export function ChatMessage({ className }) {
  // useEffect(() => {}, []);

  return (
    <div className={cn(s.chatMessage, className)}>
      <GyddeMessage>
        <AudioPlayerWithProgressBar />
      </GyddeMessage>
      <UserMessage>
        <AudioPlayerWithProgressBar />
      </UserMessage>
    </div>
  );
}
