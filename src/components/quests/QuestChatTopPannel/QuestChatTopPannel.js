import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { QuestProgressBar } from '../QuestProgressBar';
import { AudioRate } from '../../soundControls/AudioRate';
import { SoundVolume } from '../../soundControls/SoundVolume/SoundVolume';
import { AudioPlayer } from '../../soundControls/AudioPlayer';

export function QuestChatTopPannel({ className }) {
  useEffect(() => {}, []);

  return (
    <div className={cn(s.questChatHeader, className)}>
      <AudioPlayer />
      <div className={cn(s.questChatHeader__title)}></div>
      <QuestProgressBar />
      <AudioRate />
      <SoundVolume />
    </div>
  );
}
