import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import {
  modalWindowState,
  showClaimWindow,
} from '../../../core/store/slices/modalWindowStateSlice';
import { ButtonWithBorder } from '../../ui/buttons/Button';
import { ClaimPopup } from './ClaimPopup/ClaimPopup';
import s from './style.module.scss';

export function ReferralAndGuides({ className, text, pageName, mascotImg }) {
  const dispatch = useDispatch();
  const { modalClaim } = useSelector(modalWindowState);

  return (
    <div className={cn(s.profile, className)}>
      <img className={s.profile__img} src={mascotImg} alt={'mascot reads'} />
      <div className={s.profile__info}>
        <div className={s.profile__rewards}>
          <div className={s.profile__unclaimed}>
            <span className={s.profile__title}>
              {text?.rewardsTitle || STATIC_TEXT[pageName].rewardsTitle}
            </span>
            <p className={s.profile__total}>$6.26</p>
          </div>
          <ButtonWithBorder
            className={s.profile__btn}
            onClick={() => dispatch(showClaimWindow(true))}>
            {text?.btnText || STATIC_TEXT[pageName].btnText}
          </ButtonWithBorder>
          {modalClaim && <ClaimPopup />}
        </div>
        <div className={s.profile__Referrals}>
          <div className={s.profile__container}>
            <span className={s.profile__title}>
              {text?.ReferralTitle || STATIC_TEXT[pageName].ReferralTitle}
            </span>
            <p className={s.profile__total}>3</p>
          </div>
          <div className={s.profile__container}>
            <span className={s.profile__title}>
              {text?.earningsTitle || STATIC_TEXT[pageName].earningsTitle}
            </span>
            <p className={s.profile__total}>$4.23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
