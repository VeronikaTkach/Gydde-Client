import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PageName } from '../../core/constants/PageNames';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { showQuestWindow } from '../../core/store/slices/modalWindowStateSlice';
import { removeUnusedStaticText } from '../../core/store/staticText/slice';
import { getStaticText } from '../../core/store/staticText/thunk';
import { Button } from '../ui/buttons/Button';
import Modal from '../ui/modals/Modal/Modal';
import { QuestChat } from './QuestChat';
import { QuestSidePannel } from './QuestSidePannel';
import s from './style.module.scss';

export function QuestWindow({ className }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.GUIDES_CHAT));

    return () => {
      dispatch(removeUnusedStaticText(PageName.GuidesChat));
    };
  }, []);

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
