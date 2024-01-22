import cn from 'classnames';
import s from './style.module.scss';
import { NavigationLink } from '../../ui/Navlink';

const folderTabs = [
  { title: 'Referral program', to: '/profile/refferal' },
  { title: 'Guides', to: '/profile/guides' },
  { title: 'Wallet', to: '/profile/wallet' },
  { title: 'Account settings', to: '/profile/settings' },
];

const firstItem = 0;

export function ProfileFolder({ className, children }) {
  return (
    <div className={cn(s.folder, className)}>
      <div className={cn(s.folder__tabs, s.tabs)}>
        {folderTabs.map((item, index) => (
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
