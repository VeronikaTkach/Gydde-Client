import { Button } from '../buttons/Button';
import s from './style.module.scss';
import cn from 'classnames';

export function PopupWindow({ className, children, onCloseButton }) {
  return (
    <div className={cn(s.window, className)}>
      <div className={s.window__container}>
        <Button
          className={cn(s.window__close, 'icon_close')}
          onClick={onCloseButton}></Button>
        <div className={s.window__form}>{children}</div>
      </div>
    </div>
  );
}
