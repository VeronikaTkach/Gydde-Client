import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PageName } from '../../../core/constants/PageNames';
import { RoutesName } from '../../../core/constants/Routes';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { useStaticText } from '../../../core/hooks/useStaticText';
import { removeUnusedStaticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { NavigationLink } from '../../ui/Navlink';
import s from './style.module.scss';

const firstItem = 0;

export function ProfileFolder({ className, children }) {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.Profile);
  const [folderTabs, setFolderTabs] = useState(null);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Profile));
    };
  }, []);

  useEffect(() => {
    if (text) {
      setFolderTabs([
        {
          title: text?.ReferralTab || STATIC_TEXT[PageName.Profile].ReferralTab,
          to: RoutesName.ProfileReferral,
        },
        {
          title: text?.guidesTab || STATIC_TEXT[PageName.Profile].guidesTab,
          to: RoutesName.ProfileGuides,
        },
        {
          title: text?.walletTab || STATIC_TEXT[PageName.Profile].walletTab,
          to: RoutesName.ProfileWallet,
        },
        {
          title: text?.settingsTab || STATIC_TEXT[PageName.Profile].settingsTab,
          to: RoutesName.ProfileSettings,
        },
      ]);
    }
  }, [text]);

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
