import cn from 'classnames';
import s from './style.module.scss';

export function GyddeMessage({
  className,
  children,
  timeMessage,
  messagePosition,
  ...props
}) {
  return (
    <div
      className={cn(
        s.message,
        s.message_gydde,
        s[`message_${messagePosition}`],
        className
      )}
      {...props}>
      {children}
      <div className={cn(s.message__time)}>{timeMessage}</div>
    </div>
  );
}
