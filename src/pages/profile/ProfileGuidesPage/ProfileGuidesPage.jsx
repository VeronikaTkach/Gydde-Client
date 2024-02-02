import cn from 'classnames';
import { SubtitleWithAccentButton } from '../../../components/Subtitle';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { ReferralAndGuides } from '../../../components/profile/RefferalAndGuides/RefferalAndGuides';
import { PageName } from '../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { useRequestStaticText } from '../../../core/hooks/useRequestStaticText';
import s from './style.module.scss';

export function ProfileGuidesPage() {
  const { text } = useRequestStaticText(PageName.ProfileGuides);

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
