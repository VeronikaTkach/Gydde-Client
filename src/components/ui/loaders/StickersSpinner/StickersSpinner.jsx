import cn from 'classnames';
import s from './style.module.scss';

export function StickersSpinner({ className, icons, ...props }) {
  return (
    <div className={cn(s.spinner, className)} {...props}>
      {icons.map((item, index) => (
        <img className={s.spinner__img} src={item} key={index} alt='sticker' />
      ))}
    </div>
  );
}
