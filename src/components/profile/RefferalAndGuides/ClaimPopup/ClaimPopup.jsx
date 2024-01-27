import { useDispatch } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import ModalWithClose from '../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../ui/modals/Modal/ModalWithBorder';
import { showClaimWindow } from '../../../../core/store/slices/modalWindowStateSlice';

export function ClaimPopup({ staticText }) {
  const dispatch = useDispatch();

  const styles = {
    minHeight: 452,
    padding: '36px 40px',
    top: 0,
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showClaimWindow(false))}
      styles={styles}>
      <div className={cn(s.claim)}></div>
    </ModalWithClose>
  );
}
