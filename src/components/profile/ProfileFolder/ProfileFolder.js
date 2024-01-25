import cn from 'classnames';
import s from './style.module.scss';
import { NavigationLink } from '../../ui/Navlink';
import { useDispatch, useSelector } from 'react-redux';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { useEffect, useState } from 'react';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { STATIC_TEXT } from '../../../core/constants/staticText';

// const folderTabs = [
//   { title: 'Referral program', to: '/profile/refferal' },
//   { title: 'Guides', to: '/profile/guides' },
//   { title: 'Wallet', to: '/profile/wallet' },
//   { title: 'Account settings', to: '/profile/settings' },
// ];

const firstItem = 0;

export function ProfileFolder({ className, children }) {
  const dispatch = useDispatch();
  const { staticTextProfile, staticTextStatusProfile } = useSelector(staticText);
  const [folderTabs, setFolderTabs] = useState(null);
  console.log(staticTextProfile);
  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Profile));
    };
  }, []);

  useEffect(() => {
    if (
      staticTextStatusProfile === Status.Resolved ||
      staticTextStatusProfile === Status.Rejected
    ) {
      setFolderTabs([
        {
          title: staticTextProfile.refferalTab || STATIC_TEXT.refferalTab,
          to: '/profile/refferal',
        },
        {
          title: staticTextProfile.guidesTab || STATIC_TEXT.guidesTab,
          to: '/profile/guides',
        },
        {
          title: staticTextProfile.walletTab || STATIC_TEXT.walletTab,
          to: '/profile/wallet',
        },
        {
          title: staticTextProfile.settingsTab || STATIC_TEXT.settingsTab,
          to: '/profile/settings',
        },
      ]);
    }
  }, [staticTextStatusProfile]);

  return (
    <div className={cn(s.folder, className)}>
      <div className={cn(s.folder__tabs, s.tabs)}>
        {folderTabs &&
          folderTabs.map((item, index) => (
            <NavigationLink
              className={cn(s.tabs__tab, { ['iconSeparator']: index !== firstItem })}
              activeClassName={s.tabs__tab_active}
              key={index}
              to={item.to}>
              {item.title}
            </NavigationLink>
          ))}
      </div>
      {children}
    </div>
  );
}
