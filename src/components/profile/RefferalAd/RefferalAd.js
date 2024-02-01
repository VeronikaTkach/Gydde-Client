import cn from 'classnames';
import mascotFriend from '../../../assets/images/mascot/mascotFriend.png';
import friend from '../../../assets/images/menu/friend.png';
import geo from '../../../assets/images/menu/geo.png';
import people from '../../../assets/images/menu/people.png';
import { PageName } from '../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { useStaticText } from '../../../core/hooks/useStaticText';
import s from './style.module.scss';

export function ReferralAd({ className }) {
  const { text } = useStaticText(PageName.ProfileReferrals);

  return (
    <div className={cn(s.referral, className)}>
      <div className={s.referral__adTitle}>
        <span className={s.referral__textTitle}>
          {text?.adTitle || STATIC_TEXT[PageName.ProfileReferrals].adTitle}
        </span>
      </div>
      <div className={s.referral__field}>
        <img className={s.referral__img} src={mascotFriend} alt={'mascot with friend'} />
        <div className={s.referral__info}>
          <div className={s.referral__container}>
            <div>
              <img
                className={cn(s.referral__icon, s.referral__icon_geo)}
                src={geo}
                alt={'geo'}
              />
            </div>
            <span className={s.referral__text}>
              {text?.rewardForCompletion ||
                STATIC_TEXT[PageName.ProfileReferrals].rewardForCompletion}
            </span>
            <span className={s.referral__text}>~</span>
            <span className={s.referral__cost}>$3</span>
          </div>
          <div className={s.referral__container}>
            <div>
              <img className={s.referral__icon_frame} src={friend} alt={'friend'} />
            </div>
            <span className={s.referral__text}>
              {text?.referralReward ||
                STATIC_TEXT[PageName.ProfileReferrals].referralReward}
            </span>
            <span className={s.referral__text}>~</span>
            <span className={s.referral__cost}>$1.5</span>
          </div>
          <div className={s.referral__container}>
            <div>
              <img className={s.referral__icon} src={people} alt={'people'} />
            </div>
            <span className={s.referral__text}>
              {text?.friendReward || STATIC_TEXT[PageName.ProfileReferrals].friendReward}
            </span>
            <span className={s.referral__text}>~</span>
            <span className={s.referral__cost}>$0.75</span>
          </div>
        </div>
      </div>
    </div>
  );
}
