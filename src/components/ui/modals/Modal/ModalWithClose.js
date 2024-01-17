import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../buttons/Button';

const ModalWithClose = ({ Component, children, className, onClose }) => {
  return (
    <Component className={className}>
      <div className={s.modal__header}>
        <Button className={cn(s.modal__close, 'iconClose')} onClick={onClose}></Button>
      </div>
      <div>{children}</div>
    </Component>
  );
};

export default ModalWithClose;
