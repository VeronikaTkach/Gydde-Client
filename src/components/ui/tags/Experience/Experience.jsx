import cn from 'classnames';
import s from './style.module.scss';

export function Experience({ className, children, ...props }) {
  return (
    <div className={cn(s.experience, className)} {...props}>
      {children} XP
    </div>
  );
}
