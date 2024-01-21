import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import logo from '../../assets/images/logo.png';
import Modal from '../ui/modals/Modal/Modal';
import { Button } from '../ui/buttons/Button';
import { useDispatch } from 'react-redux';
import {
  showProfileWindow,
  showQuestWindow,
} from '../../core/store/slices/modalWindowStateSlice';

const folderTabs = ['Referral program', 'Guides', 'Wallet', 'Account settings'];

export function ProfileWindow({ className }) {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <Modal className={cn(s.profile, className)}>
      <div className={cn(s.profile__container)}>
        <div className={cn(s.profile__header, s.header)}>
          <img className={cn(s.header__logo)} src={logo} alt={'logo'} />
          <Button
            className={cn(s.header__btnClose, 'iconClose')}
            onClick={() => dispatch(showProfileWindow(false))}
          />
        </div>
        <div className={cn(s.profile__content)}>
          <div className={cn(s.profile__folder, s.folder)}>
            <div className={cn(s.folder__tabs, s.tabs)}>
              {folderTabs.map((item, index) => (
                <div className={s.tabs__tab} key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
