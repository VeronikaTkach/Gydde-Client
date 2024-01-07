import cn from 'classnames';
import s from './style.module.scss';

export function Button({ className, children, onClick, disabled, ...props }) {
  return (
    <button
      className={cn(s.button, className)}
      onClick={onClick}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
}
