import cn from 'classnames';
import { Button } from './Button';
import s from './style.module.scss';

export function AccentButton({ className, children, sticker, isLoading, ...props }) {
  return (
    <Button
      className={cn(s.button_accent, { ['iconLoader']: isLoading }, className)}
      {...props}>
      {!isLoading && (
        <>
          <span>{children}</span>
          {sticker && <img width='24px' src={sticker} alt={'sticker'} />}
        </>
      )}
    </Button>
  );
}
