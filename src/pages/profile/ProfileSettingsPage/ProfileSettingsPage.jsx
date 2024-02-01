import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AccountSettings } from '../../../components/profile/AccountSettings/AccountSettings';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { PageName } from '../../../core/constants/PageNames';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { useStaticText } from '../../../core/hooks/useStaticText';
import { removeUnusedStaticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import s from './style.module.scss';

export function ProfileSettingsPage() {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.ProfileSettings);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE_SETTINGS));

    return () => {
      dispatch(removeUnusedStaticText(PageName.ProfileSettings));
    };
  }, []);

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
