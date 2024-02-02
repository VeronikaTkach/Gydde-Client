import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { PageName } from '../../core/constants/PageNames';
import { useRequestStaticText } from '../../core/hooks/useRequestStaticText';
import { showQuestWindow } from '../../core/store/slices/modalWindowStateSlice';
import { Button } from '../ui/buttons/Button';
import { Modal } from '../ui/modals/Modal';
import { QuestChat } from './QuestChat';
import { QuestSidePannel } from './QuestSidePannel';
import s from './style.module.scss';

export function QuestWindow({ className }) {
  const dispatch = useDispatch();
  const { text } = useRequestStaticText(PageName.GuidesChat);

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
          <QuestSidePannel text={text} />
          <QuestChat text={text} />
        </div>
      </div>
    </Modal>
  );
}
