import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import usa from '../../../assets/images/flagUsa.svg';

export function AccountSettings({ className }) {
  useEffect(() => {}, []);

  return (
    <>
      <div className={cn(s.settings, className)}>
        <div className={cn(s.settings__mascot)}>
          <img className={cn(s.settings__mascot_img)} src={mascot} alt={'Gydde'} />
        </div>
        <div className={cn(s.settings__info, s.info)}>
          <div className={cn(s.info__header, s.header)}>
            <div className={cn(s.header__userInfo)}>
              <div className={cn(s.header__userName)}>{'User name'}</div>
              <div className={cn(s.header__btnEdit, 'iconEdit')}></div>
            </div>
            <Button className={cn(s.header__langInfo, 'iconDropdownArrow')}>
              <div className={cn(s.header__language)}>Eng</div>
              <img
                className={cn(s.header__language_img)}
                src={usa}
                alt={'Image of current language'}
              />
            </Button>
          </div>
          <div className={cn(s.info__connections, s.connections)}>
            <div className={cn(s.connections__title)}>Уour social account</div>
            <div className={cn(s.connections__socials)}>
              <Button
                className={cn(
                  s.connections__button_mail,
                  s.connections__button,
                  'iconEmail'
                )}>
                Connect Email Address
              </Button>
              <Button className={cn(s.connections__button_pass, s.connections__button)}>
                Set password
              </Button>
            </div>
            <div className={cn(s.connections__socials)}>
              <Button
                className={cn(
                  s.connections__button_twitter,
                  s.connections__button,
                  'iconTwitter'
                )}>
                Connect Twitter Account
              </Button>
            </div>
          </div>
          <Button className={cn(s.info__logout, 'iconLogout_after')}>Log out</Button>
        </div>
      </div>
    </>
  );
}
