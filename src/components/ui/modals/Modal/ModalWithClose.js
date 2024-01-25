import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../buttons/Button';

const ModalWithClose = ({ Component, children, className, onClose, styles }) => {
  return (
    <Component className={className} styles={styles}>
      <div className={s.modal__header}>
        <Button
          className={cn(s.modal__close, 'iconClose')}
          onClick={onClose}
          style={{ top: styles?.top }}></Button>
      </div>
      <div>{children}</div>
    </Component>
  );
};

export default ModalWithClose;
