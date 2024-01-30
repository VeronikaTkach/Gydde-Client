import cn from 'classnames';
import s from './style.module.scss';

export function SocialButton({
  className,
  children,
  onClick,
  text,
  iconImg,
  alt,
  iconFont,
  ...props
}) {
  return (
    <button className={cn(s.button, className)} onClick={onClick} {...props}>
      {(iconImg || iconFont) && (
        <div className={cn(s.button__icon, iconFont)}>
          {iconImg && <img src={iconImg} alt={alt} />}
        </div>
      )}
      {text && <div className={cn(s.button__text)}>{text}</div>}
      {children}
    </button>
  );
}
