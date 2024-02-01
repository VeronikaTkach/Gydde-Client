import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubtitleWithAccentButton } from '../../../components/Subtitle';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { ReferralAndGuides } from '../../../components/profile/RefferalAndGuides/RefferalAndGuides';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import s from './style.module.scss';

export function ProfileGuidesPage() {
  const dispatch = useDispatch();
  const { staticTextProfileGuides, staticTextStatusProfileGuides } =
    useSelector(staticText);
  const [text, setText] = useState(null);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE_GUIDES));

    return () => {
      dispatch(removeUnusedStaticText(PageName.ProfileGuides));
    };
  }, []);

  useEffect(() => {
    if (staticTextStatusProfileGuides === Status.Resolved) {
      setText(staticTextProfileGuides);
    } else if (staticTextStatusProfileGuides === Status.Rejected) {
      setText(STATIC_TEXT[PageName.ProfileGuides]);
    }
  }, [staticTextStatusProfileGuides]);

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
