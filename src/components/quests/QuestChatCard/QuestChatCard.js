import cn from 'classnames';
import s from './style.module.scss';

const zeroNotifications = 0;

export function QuestChatCard({ className, text, img, isActive, isHover }) {
  return (
    <div
      className={cn(
        isActive === false && isHover === false
          ? s.questCard
          : isActive === true
            ? s.questCard_active
            : s.questCard_hover,
        className
      )}>
      <img className={s.questCard__img} src={img} alt='image of guide' />
      <div className={cn(s.questCard__info)}>
        <div className={s.questCard__text}>
          <h4 className={s.questCard__title}>{text.title}</h4>
          <p className={s.questCard__author}>{text.author}</p>
        </div>
        <div className={s.questCard__desc}>
          {text.notification !== zeroNotifications ? (
            <p className={s.questCard__notification}>{text.notification}</p>
          ) : (
            <div className={s.questCard__notification_blank}></div>
          )}
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
    </div>
  );
}
