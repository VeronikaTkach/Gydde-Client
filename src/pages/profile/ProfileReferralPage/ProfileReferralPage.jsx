import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { SubtitleWithDifferentButton } from '../../../components/Subtitle';
import { ReferralAndGuides } from '../../../components/profile/RefferalAndGuides/RefferalAndGuides';
import { ReferralAd } from '../../../components/profile/RefferalAd/RefferalAd';

//TODO ВРЕМЕННАЯ ПЕРЕМЕННАЯ
const noRefferal = false;

const hasReferral = 'Referral';
export function ProfileReferralPage() {
  const dispatch = useDispatch();
  const { staticTextProfileReferrals, staticTextStatusProfileReferrals } =
    useSelector(staticText);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE_REFERRALS));

    return () => {
      dispatch(removeUnusedStaticText(PageName.ProfileReferrals));
    };
  }, []);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__container)}>
          <ProfileFolder>
            {noRefferal ? (
              <ReferralAd staticText={staticTextProfileReferrals} />
            ) : (
              <>
                {(staticTextStatusProfileReferrals === Status.Resolved ||
                  staticTextStatusProfileReferrals === Status.Rejected) && (
                  <ReferralAndGuides staticText={staticTextProfileReferrals} />
                )}
              </>
            )}
          </ProfileFolder>
        </div>
        {(staticTextStatusProfileReferrals === Status.Resolved ||
          staticTextStatusProfileReferrals === Status.Rejected) && (
          <SubtitleWithDifferentButton
            className={s.content__subtitle}
            text={staticTextProfileReferrals[hasReferral].subtitle}
            leftButtonText={staticTextProfileReferrals.leftButtonText}
            rightButtonText={staticTextProfileReferrals.rightButtonText}
            sound={true}
          />
        )}
      </main>
    </>
  );
}
