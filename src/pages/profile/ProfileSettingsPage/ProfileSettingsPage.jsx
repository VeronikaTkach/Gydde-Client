import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { AccountSettings } from '../../../components/profile/AccountSettings';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { staticText } from '../../../core/store/staticText/slice';
import { Status } from '../../../core/constants/Status';

export function ProfileSettingsPage({ children }) {
  const dispatch = useDispatch();
  const { staticTextProfileSettings, staticTextStatusProfileSettings } =
    useSelector(staticText);

  useEffect(() => {
    dispatch(getStaticText.basic([...TEXT_KEYS.PROFILE_SETTINGS, ...TEXT_KEYS.PROFILE]));
  }, []);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__container)}>
          {staticTextStatusProfileSettings !== Status.Loading && (
            <ProfileFolder staticTextProfile={staticTextProfileSettings}>
              <AccountSettings staticTextProfileSettings={staticTextProfileSettings} />
            </ProfileFolder>
          )}
        </div>
      </main>
    </>
  );
}
