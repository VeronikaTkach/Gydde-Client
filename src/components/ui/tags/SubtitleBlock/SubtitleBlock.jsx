import cn from 'classnames';
import s from './style.module.scss';

export function SubtitleBlock({ className, children, ...props }) {
  return (
    <div className={cn(s.block, className)} {...props}>
      {children}
    </div>
  );
}
