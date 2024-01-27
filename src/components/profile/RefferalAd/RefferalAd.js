// import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
// import { Button } from '../../ui/buttons/Button';
import mascotFriend from '../../../assets/images/mascot/mascotFriend.png';

export function ReferralAd({ className, staticTextProfileReferrals }) {
  // useEffect(() => {}, []);

  return (
    <div className={cn(s.Referral, className)}>
      <span className={s.Referral__adTitle}>{staticTextProfileReferrals.adTitle}</span>
      <img className={s.Referral__img} src={mascotFriend} alt={'mascot with friend'} />
      <div className={s.Referral__info}>
        <div className={s.Referral__container}>
          <div className={s.Referral__icon}></div>
          <span className={s.Referral__text}>
            {staticTextProfileReferrals.rewardForCompletion}
          </span>
          <span className={s.Referral__text_t}>~</span>
          <span className={s.Referral__cost}>$3</span>
        </div>
        <div className={s.Referral__container}>
          <div className={s.Referral__icon}></div>
          <span className={s.Referral__text}>
            {staticTextProfileReferrals.referralReward}
          </span>
          <span className={s.Referral__text_t}>~</span>
          <span className={s.Referral__cost}>$1.5</span>
        </div>
        <div className={s.Referral__container}>
          <div className={s.Referral__icon}></div>
          <span className={s.Referral__text}>
            {staticTextProfileReferrals.friendReward}
          </span>
          <span className={s.Referral__text_t}>~</span>
          <span className={s.Referral__cost}>$0.75</span>
        </div>
      </div>
    </div>
  );
}
