import cn from 'classnames';
// import { useEffect, useRef, useState } from 'react';
import { AudioPlayer } from '../../soundControls/AudioPlayer';
import { AudioRate } from '../../soundControls/AudioRate';
import { SoundVolume } from '../../soundControls/SoundVolume/SoundVolume';
import { QuestProgressBar } from '../QuestProgressBar';
import s from './style.module.scss';

export function QuestChatTopPannel({ className }) {
  // useEffect(() => {}, []);

  return (
    <div className={cn(s.questChatHeader, className)}>
      <AudioPlayer />
      <div className={cn(s.questChatHeader__title)}>Guide Name</div>
      <QuestProgressBar />
      <div className={cn(s.questChatHeader__audioSettings)}>
        <AudioRate />
        <SoundVolume />
      </div>
    </div>
  );
}
