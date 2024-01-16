import cn from 'classnames';
import { Button } from './Button';
import s from './style.module.scss';

export function AccentButton({ className, children, sticker, ...props }) {
  return (
    <Button className={cn(s.button_accent, className)} {...props}>
      <span>{children}</span>
      {sticker && <img width='24px' src={sticker} alt={'sticker'} />}
    </Button>
  );
}
