import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { NavigationLink } from '../../ui/Navlink';
import { NavLink } from 'react-router-dom';

const folderTabs = [
  { title: 'Referral program', to: '/profile/refferal' },
  { title: 'Guides', to: '/profile/guides' },
  { title: 'Wallet', to: '/profile/wallet' },
  { title: 'Account settings', to: '/profile/settings' },
];

export function ProfileFolder({ className, children }) {
  useEffect(() => {}, []);

  return (
    <div className={cn(s.folder)}>
      <div className={cn(s.folder__tabs, s.tabs)}>
        {folderTabs.map((item, index) => (
          <NavigationLink
            className={s.tabs__tab}
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
