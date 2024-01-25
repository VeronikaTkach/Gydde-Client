import cn from 'classnames';
import s from './style.module.scss';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import { ButtonWithBorder } from '../../ui/buttons/Button';

export function RefferalAndGuides({ className, staticText }) {
  return (
    <div className={cn(s.profile, className)}>
      <img className={s.profile__img} src={mascot} alt={'mascot likes it'} />
      <div className={s.profile__info}>
        <div className={s.profile__rewards}>
          <div className={s.profile__unclaimed}>
            <span className={s.profile__title}>{staticText.rewardsTitle}</span>
            <p className={s.profile__total}>$6.26</p>
          </div>
          <ButtonWithBorder className={s.profile__btn}>
            {staticText.btnText}
          </ButtonWithBorder>
        </div>
        <div className={s.profile__referals}>
          <div className={s.profile__container}>
            <span className={s.profile__title}>{staticText.referalTitle}</span>
            <p className={s.profile__total}>3</p>
          </div>
          <div className={s.profile__container}>
            <span className={s.profile__title}>{staticText.earningsTitle}</span>
            <p className={s.profile__total}>$4.23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
