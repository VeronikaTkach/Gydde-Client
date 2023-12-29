import cn from 'classnames';
import s from './style.module.scss';

export function Button({ className, children, onClick, isDisabled, length, backgroundColor, ...props }) {

  const buttonStyle = {
    width: length,
    backgroundColor: backgroundColor,
  }

  return (
    <button
      className={cn(s.button, className)}
      onClick={onClick}
      disabled={isDisabled}
      {...props}>
      {children}
    </button>
  );
}
