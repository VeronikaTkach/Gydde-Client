import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import { Status } from '../../../core/constants/Status';
import { STATIC_TEXT } from '../../../core/constants/staticTexts';
import {
  modalWindowState,
  showClaimWindow,
} from '../../../core/store/slices/modalWindowStateSlice';
import { staticText } from '../../../core/store/staticText/slice';
import { ButtonWithBorder } from '../../ui/buttons/Button';
import { ClaimPopup } from './ClaimPopup/ClaimPopup';
import s from './style.module.scss';

export function ReferralAndGuides({ className, text, pageName }) {
  const dispatch = useDispatch();
  const { modalClaim } = useSelector(modalWindowState);
  const { staticTextProfileReferrals, staticTextStatusProfileReferrals } =
    useSelector(staticText);
  // const [text, setText] = useState(null);

  // useEffect(() => {
  //   if (staticTextStatusProfileReferrals === Status.Resolved) {
  //     setText(staticTextProfileReferrals);
  //   }
  // }, [staticTextStatusProfileReferrals]);

  return (
    <div className={cn(s.profile, className)}>
      <img className={s.profile__img} src={mascot} alt={'mascot likes it'} />
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
          {modalClaim && <ClaimPopup staticText={text} />}
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
