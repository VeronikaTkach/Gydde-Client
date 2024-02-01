import cn from 'classnames';
import { GUIDE_STATUS } from '../../../core/constants/backendEnums';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import s from './style.module.scss';

const zeroNotifications = 0;

export function QuestChatCard({ className, guideData, text, isActive }) {
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
      <img className={s.questCard__img} src={guideData.image} alt='image of guide' />
      <div className={cn(s.questCard__info)}>
        <div className={s.questCard__header}>
          <h4 className={s.questCard__title}>{guideData.description}</h4>
          {guideData.notification !== zeroNotifications ? (
            <p className={s.questCard__notification}>{guideData.notification}</p>
          ) : (
            <div className={s.questCard__notification_blank}></div>
          )}
        </div>
        <p className={s.questCard__author}>{guideData.partner}</p>
        <p className={cn(s[`questCard__${GUIDE_STATUS[guideData.status]}`])}>
          {text.guideStatus[GUIDE_STATUS[guideData.status]] ||
            STATIC_TEXT.guideStatus[GUIDE_STATUS[guideData.status]]}
        </p>
      </div>
    </div>
  );
}
