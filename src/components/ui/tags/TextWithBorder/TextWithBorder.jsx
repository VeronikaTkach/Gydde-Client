import cn from 'classnames';
import s from './style.module.scss';

export function TextWithBorder({ className, text, ...props }) {
  return (
    <div className={cn(s.allText, className)} {...props}>
      {typeof text === 'string' ? (
        <span className={s.text}>
          <span className={s.text__withoutBorder}>{text}</span>
          <span className={s.text__withBorder}>{text}</span>
        </span>
      ) : (
        text.map((item, index) => (
          <span
            className={cn(s.text, { [s.text_accent]: item.isHighlighted })}
            key={index}>
            <span className={s.text__withoutBorder}>{item.part}</span>
            <span className={s.text__withBorder}>{item.part}</span>
            <span className={s.text_space}> </span>
          </span>
        ))
      )}
    </div>
  );
}
