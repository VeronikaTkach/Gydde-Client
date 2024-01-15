import cn from 'classnames';
import { Button } from '../../../buttons/Button';
import s from './style.module.scss';

export function withClose(Component, onClose) {
  const ModalWithClose = (props) => {
    return (
      <Component
        {...props}
        children={
          <>
            <div className={s.modal__header}>
              <Button
                className={cn(s.modal__close, 'iconClose')}
                onClick={onClose}></Button>
            </div>
            <div>{props.children}</div>
          </>
        }></Component>
    );
  };

  return ModalWithClose;
}
