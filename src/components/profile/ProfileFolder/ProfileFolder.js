import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageName } from '../../../core/constants/PageNames';
import { RoutesName } from '../../../core/constants/Routes';
import { Status } from '../../../core/constants/Status';
import { STATIC_TEXT } from '../../../core/constants/staticTexts';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { NavigationLink } from '../../ui/Navlink';
import s from './style.module.scss';

const firstItem = 0;

export function ProfileFolder({ className, children }) {
  const dispatch = useDispatch();
  const { staticTextProfile, staticTextStatusProfile } = useSelector(staticText);
  const [folderTabs, setFolderTabs] = useState(null);

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
          title:
            staticTextProfile?.ReferralTab || STATIC_TEXT[PageName.Profile].ReferralTab,
          to: RoutesName.ProfileReferral,
        },
        {
          title: staticTextProfile?.guidesTab || STATIC_TEXT[PageName.Profile].guidesTab,
          to: RoutesName.ProfileGuides,
        },
        {
          title: staticTextProfile?.walletTab || STATIC_TEXT[PageName.Profile].walletTab,
          to: RoutesName.ProfileWallet,
        },
        {
          title:
            staticTextProfile?.settingsTab || STATIC_TEXT[PageName.Profile].settingsTab,
          to: RoutesName.ProfileSettings,
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
