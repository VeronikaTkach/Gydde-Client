import cn from 'classnames';
import Button from '../Button/Button';
import s from './style.module.scss';

export function SubscribeButton({ className, isSubscribed, isRuntimeError, ...props }) {
  return (
    <Button
      className={cn(
        s.button,
        { icon_add: !isSubscribed },
        { icon_done: isSubscribed },
        { [s.button__error]: isRuntimeError },
        className
      )}
      children={isSubscribed ? 'Followed' : 'Follow'}
      {...props}
    />
  );
}
