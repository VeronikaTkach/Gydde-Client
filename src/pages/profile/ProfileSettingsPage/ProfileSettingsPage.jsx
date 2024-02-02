import cn from 'classnames';
import { AccountSettings } from '../../../components/profile/AccountSettings/AccountSettings';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { PageName } from '../../../core/constants/PageNames';
import { useRequestStaticText } from '../../../core/hooks/useRequestStaticText';
import s from './style.module.scss';

export function ProfileSettingsPage() {
  const { text } = useRequestStaticText(PageName.ProfileSettings);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__container)}>
          <ProfileFolder>{text && <AccountSettings text={text} />}</ProfileFolder>
        </div>
      </main>
    </>
  );
}
