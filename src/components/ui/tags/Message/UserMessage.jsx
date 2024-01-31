import cn from 'classnames';
import s from './style.module.scss';

export function UserMessage({
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
        s.message_user,
        s[`message_${messagePosition}`],
        className
      )}
      {...props}>
      {children}
      <div className={cn(s.message__time)}>{timeMessage}</div>
    </div>
  );
}
