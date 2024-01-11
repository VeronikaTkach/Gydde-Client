import cn from 'classnames';
import { Button } from '../../../buttons/Button';
import s from './style.module.scss';

const withClose = (Component, onClose) => {
  const ModalWithClose = (props) => {
    return (
      <Component
        {...props}
        onClose={onClose}
        children={
          <div className={s.modal__container}>
            <div className={s.modal__wrapper}>
              <div className={s.modal__header}>
                <Button
                  className={cn(s.modal__close, 'iconClose')}
                  onClick={onClose}></Button>
              </div>
              <div>{props.children}</div>
            </div>
          </div>
        }></Component>
    );
  };

  return ModalWithClose;
};

export default withClose;
