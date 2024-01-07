import cn from 'classnames';
import { Button } from './Button';
import s from './style.module.scss';

export function ButtonWithBorder({ className, children, sticker, ...props }) {
  return (
    <Button className={cn(s.button_border, className)} {...props}>
      <span>{children}</span>
      {sticker && <img src={sticker} alt={'sticker'} />}
    </Button>
  );
}
