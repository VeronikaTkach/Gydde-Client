import cn from 'classnames';
import s from './style.module.scss';

export function StickersSpinner({ className, icons, ...props }) {
  return (
    <div className={cn(s.spinner, className)} {...props}>
      {icons.map((item, index) => (
        <div className={s.spinner__img} key={index}>
          <img src={item} alt='sticker' />
        </div>
      ))}
    </div>
  );
}
