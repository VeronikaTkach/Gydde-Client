import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Modal from '../ui/modals/Modal/Modal';
import { Button } from '../ui/buttons/Button';
import { QuestSidePannel } from './QuestSidePannel';
import { QuestChat } from './QuestChat';
import { useDispatch } from 'react-redux';
import { showQuestWindow } from '../../core/store/slices/modalWindowStateSlice';

export function QuestWindow({ className }) {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <Modal className={cn(s.questWindow, className)}>
      <div className={cn(s.questWindow__container)}>
        <div className={cn(s.questWindow__header, s.header)}>
          <div className={cn(s.header__logo)} />
          <Button
            className={cn(s.header__btnClose, 'iconClose')}
            onClick={() => dispatch(showQuestWindow(false))}
          />
        </div>
        <div className={cn(s.questWindow__app, className)}>
          <QuestSidePannel />
          <QuestChat />
        </div>
      </div>
    </Modal>
  );
}
