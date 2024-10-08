import cn from 'classnames';
import { Button } from '../../buttons/Button';
import s from './style.module.scss';

export function ModalWithClose({ Component, children, className, onClose, ...props }) {
  return (
    <Component className={className} {...props}>
      <div className={s.modal__header}>
        <Button className={cn(s.modal__close, 'iconClose')} onClick={onClose} />
      </div>
      {children}
    </Component>
  );
}
