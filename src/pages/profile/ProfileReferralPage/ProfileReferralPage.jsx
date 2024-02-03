import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import mascot from '../../../assets/images/mascot/mascotWithBook.png';
import { SubtitleWithDifferentButton } from '../../../components/Subtitle';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { ReferralAd } from '../../../components/profile/RefferalAd/RefferalAd';
import { ReferralAndGuides } from '../../../components/profile/RefferalAndGuides/RefferalAndGuides';
import { PageName } from '../../../core/constants/PageNames';
import { UserReferralStatus } from '../../../core/constants/Status';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { useRequestStaticText } from '../../../core/hooks/useRequestStaticText';
import {
  modalWindowState,
  showReferralLinkWindow,
} from '../../../core/store/slices/modalWindowStateSlice';
import { userStore } from '../../../core/store/user/slice';
import { ReferralLinkPopup } from './ReferralLinkPopup/ReferralLinkPopup';
import s from './style.module.scss';

export function ProfileReferralPage() {
  const dispatch = useDispatch();
  const { text } = useRequestStaticText(PageName.ProfileReferrals);
  const { userReferral } = useSelector(userStore);
  const { modalReferralLink } = useSelector(modalWindowState);

  return (
    <>
      {userReferral && (
        <main className={cn(s.content)}>
          <div className={cn(s.content__container)}>
            <ProfileFolder>
              {userReferral === UserReferralStatus.NoReferral ? (
                <ReferralAd text={text} />
              ) : userReferral === UserReferralStatus.Referral ? (
                <ReferralAndGuides
                  text={text}
                  pageName={PageName.ProfileReferrals}
                  mascotImg={mascot}
                />
              ) : null}
            </ProfileFolder>
          </div>
          {text && (
            <>
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
              {modalReferralLink && <ReferralLinkPopup text={text} />}
            </>
          )}
        </main>
      )}
    </>
  );
}
