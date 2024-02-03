import cn from 'classnames';
import { Modal } from '../Modal';
import s from './style.module.scss';

export function ModalWithBorderShadow({ children, className, ...props }) {
  return (
    <Modal className={cn(s.modal)}>
      <div className={cn(s.modal__container, className)} {...props}>
        {children}
      </div>
    </Modal>
  );
}
