import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubtitleWithDifferentButton } from '../../../components/Subtitle';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { ReferralAd } from '../../../components/profile/RefferalAd/RefferalAd';
import { ReferralAndGuides } from '../../../components/profile/RefferalAndGuides/RefferalAndGuides';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import {
  modalWindowState,
  showReferralLinkWindow,
} from '../../../core/store/slices/modalWindowStateSlice';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { userStore } from '../../../core/store/user/slice';
import { ReferralLinkPopup } from './ReferralLinkPopup/ReferralLinkPopup';
import s from './style.module.scss';

export function ProfileReferralPage() {
  const dispatch = useDispatch();
  const { userReferral } = useSelector(userStore);
  const { staticTextProfileReferrals, staticTextStatusProfileReferrals } =
    useSelector(staticText);
  const { modalReferralLink } = useSelector(modalWindowState);
  const [text, setText] = useState(null);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE_REFERRALS));

    return () => {
      dispatch(removeUnusedStaticText(PageName.ProfileReferrals));
    };
  }, []);

  useEffect(() => {
    if (staticTextStatusProfileReferrals === Status.Resolved) {
      setText(staticTextProfileReferrals);
    }
  }, [staticTextStatusProfileReferrals]);

  return (
    <>
      {userReferral && (
        <main className={cn(s.content)}>
          <div className={cn(s.content__container)}>
            <ProfileFolder>
              {userReferral ? <ReferralAd /> : <ReferralAndGuides />}
            </ProfileFolder>
          </div>
          {(staticTextStatusProfileReferrals === Status.Resolved ||
            staticTextStatusProfileReferrals === Status.Rejected) && (
            <SubtitleWithDifferentButton
              className={s.content__subtitle}
              text={
                text?.[userReferral]?.subtitle ||
                STATIC_TEXT[PageName.ProfileReferrals][userReferral].subtitle
              }
              leftButtonText={
                text?.leftButtonText ||
                STATIC_TEXT[PageName.ProfileReferrals].leftButtonText
              }
              rightButtonText={
                text?.rightButtonText ||
                STATIC_TEXT[PageName.ProfileReferrals].rightButtonText
              }
              sound={true}
              rightButtonOnClick={() => dispatch(showReferralLinkWindow(true))}
            />
          )}
          {modalReferralLink && <ReferralLinkPopup staticText={text} />}
        </main>
      )}
    </>
  );
}
