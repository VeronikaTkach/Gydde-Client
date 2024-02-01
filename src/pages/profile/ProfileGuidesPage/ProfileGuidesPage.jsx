import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SubtitleWithAccentButton } from '../../../components/Subtitle';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { ReferralAndGuides } from '../../../components/profile/RefferalAndGuides/RefferalAndGuides';
import { PageName } from '../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { useStaticText } from '../../../core/hooks/useStaticText';
import { removeUnusedStaticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import s from './style.module.scss';

export function ProfileGuidesPage() {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.ProfileGuides);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE_GUIDES));

    return () => {
      dispatch(removeUnusedStaticText(PageName.ProfileGuides));
    };
  }, []);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__container)}>
          <ProfileFolder>
            {text && (
              <ReferralAndGuides staticText={text} pageName={PageName.ProfileGuides} />
            )}
          </ProfileFolder>
        </div>
        {text && (
          <SubtitleWithAccentButton
            className={s.content__subtitle}
            text={text?.subtitle || STATIC_TEXT[PageName.ProfileGuides].subtitle}
            buttonText={
              text?.buttonText || STATIC_TEXT[PageName.ProfileGuides].buttonText
            }
            sound={true}
          />
        )}
      </main>
    </>
  );
}
