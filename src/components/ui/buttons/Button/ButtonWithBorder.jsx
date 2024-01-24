import cn from 'classnames';
import { Button } from './Button';
import s from './style.module.scss';

export function ButtonWithBorder({ className, children, sticker, isLoading, ...props }) {
  return (
    <Button
      className={cn(s.button_border, { ['iconLoader']: isLoading }, className)}
      {...props}>
      {!isLoading && (
        <>
          <span>{children}</span>
          {sticker && <img src={sticker} alt={'sticker'} />}
        </>
      )}
    </Button>
  );
}
