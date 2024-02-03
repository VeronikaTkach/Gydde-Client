import cn from 'classnames';
import { Button } from '../../buttons/Button';
import s from './style.module.scss';

export function ModalWithClose({ Component, children, className, onClose, styles }) {
  return (
    <Component className={className} styles={styles}>
      <div className={s.modal__header}>
        <Button
          className={cn(s.modal__close, 'iconClose')}
          onClick={onClose}
          style={{ top: styles?.top, right: styles?.right }}></Button>
      </div>
      <div>{children}</div>
    </Component>
  );
}
