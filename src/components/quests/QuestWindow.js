import { useEffect } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { showQuestWindow } from '../../core/store/slices/modalWindowStateSlice';
import { getStaticText } from '../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { PageName } from '../../core/constants/PageNames';
import { removeUnusedStaticText } from '../../core/store/staticText/slice';
import Modal from '../ui/modals/Modal/Modal';
import { Button } from '../ui/buttons/Button';
import { QuestSidePannel } from './QuestSidePannel';
import { QuestChat } from './QuestChat';
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
