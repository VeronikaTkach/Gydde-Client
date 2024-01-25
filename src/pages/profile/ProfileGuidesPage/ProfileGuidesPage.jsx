import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { RefferalAndGuides } from '../../../components/profile/RefferalAndGuides/RefferalAndGuides';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { SubtitleWithAccentButton } from '../../../components/Subtitle';

export function ProfileGuidesPage() {
  const dispatch = useDispatch();
  const { staticTextProfileGuides, staticTextStatusProfileGuides } =
    useSelector(staticText);

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
            {(staticTextStatusProfileGuides === Status.Resolved ||
              staticTextStatusProfileGuides === Status.Rejected) && (
              <RefferalAndGuides
                staticText={
                  staticTextProfileGuides || STATIC_TEXT[PageName.ProfileGuides]
                }
              />
            )}
          </ProfileFolder>
        </div>
        {(staticTextStatusProfileGuides === Status.Resolved ||
          staticTextStatusProfileGuides === Status.Rejected) && (
          <SubtitleWithAccentButton
            className={s.content__subtitle}
            text={staticTextProfileGuides.subtitle}
            buttonText={staticTextProfileGuides.buttonText}
          />
        )}
      </main>
    </>
  );
}
