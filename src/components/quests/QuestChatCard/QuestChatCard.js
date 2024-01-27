import cn from 'classnames';
import s from './style.module.scss';

const zeroNotifications = 0;

export function QuestChatCard({ className, text, img, isActive }) {
  return (
    <div
      className={cn(
        isActive === false
          ? s.questCard
          : isActive === true
            ? s.questCard_active
            : s.questCard_hover,
        className
      )}>
      <img className={s.questCard__img} src={img} alt='image of guide' />
      <div className={cn(s.questCard__info)}>
        <div className={s.questCard__header}>
          <h4 className={s.questCard__title}>{text.title}</h4>
          {text.notification !== zeroNotifications ? (
            <p className={s.questCard__notification}>{text.notification}</p>
          ) : (
            <div className={s.questCard__notification_blank}></div>
          )}
        </div>
        <p className={s.questCard__author}>{text.author}</p>
        <p
          className={cn(
            text.progress === 'Completed'
              ? s.questCard__progress_ready
              : s.questCard__progress
          )}>
          {text.progress}
        </p>
      </div>
    </div>
  );
}
