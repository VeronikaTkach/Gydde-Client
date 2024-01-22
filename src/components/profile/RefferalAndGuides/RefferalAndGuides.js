import cn from 'classnames';
import s from './style.module.scss';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import { Button } from '../../ui/buttons/Button';

export function RefferalAndGuides({ className, text }) {
  return (
    <div className={cn(s.profile, className)}>
      <img className={s.profile__img} src={mascot} alt='mascot likes it' />
      <div className={s.profile__info}>
        <div className={s.profile__rewards}>
          <div className={s.profile__unclaimed}>
            <span className={s.profile__title}>{text.rewardsTitle}</span>
            <p>{text.rewardsTotal}</p>
          </div>
          <Button>{text.btnText}</Button>
        </div>
        <div>
          <div>
            <span className={s.profile__title}>{text.referalTitle}</span>
            <p>{text.referalTotal}</p>
          </div>
          <div>
            <span className={s.profile__title}>{text.earningssTitle}</span>
            <p>{text.earningsTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
