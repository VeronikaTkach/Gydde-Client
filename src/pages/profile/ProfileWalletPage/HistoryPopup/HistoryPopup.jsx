import cn from 'classnames';
import { useDispatch } from 'react-redux';
import ModalWithBorderShadow from '../../../../components/ui/modals/Modal/ModalWithBorder';
import ModalWithClose from '../../../../components/ui/modals/Modal/ModalWithClose';
import { showHistoryWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import s from './style.module.scss';

export function HistoryPopup({ text }) {
  const dispatch = useDispatch();

  const styles = {
    maxWidth: 748,
    minHeight: 0,
    padding: '16px 24px',
    top: 0,
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showHistoryWindow(false))}
      styles={styles}>
      <div className={cn(s.history)}></div>
    </ModalWithClose>
  );
}
