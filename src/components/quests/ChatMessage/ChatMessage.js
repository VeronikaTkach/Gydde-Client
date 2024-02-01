// import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { AudioPlayerWithProgressBar } from '../../soundControls/AudioPlayer/AudioPlayerWithProgressBar';
// import Radio from '../../ui/Radio/Radio';
import { GyddeMessage, UserMessage } from '../../ui/tags/Message';
import s from './style.module.scss';

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
      {/* <Radio /> */}
    </div>
  );
}
