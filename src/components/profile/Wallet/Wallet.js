import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { PageName } from '../../../core/constants/PageNames';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import iconMetamask from '../../../assets/images/metamask.svg';
import iconEthereum from '../../../assets/images/Ethereum.svg';

export function Wallet({ className, staticTextWallet }) {
  return (
    <>
      <div className={cn(s.wallet)}>
        <img className={s.wallet__mascot} src={mascot} alt='mascot likes it' />
        <div className={s.wallet__form}>
          <div className={s.wallet__form_title}>
            {staticTextWallet?.formTitle || STATIC_TEXT[PageName.ProfileWallet].formTitle}
          </div>
          <div className={s.wallet__form_info}>
            <div className={cn(s.wallet__form_info_number)}>
              <div>number</div> {/* как получить номер? */}
              <button className={cn(s.wallet__icon, 'iconCopy')} />
              <button className={cn(s.wallet__icon, 'iconLink')} />
            </div>
            <div className={cn(s.wallet__form_info_status)}>
              <img className={s.wallet__img} src={iconMetamask} alt={'metamask'} />
              <div className={s.wallet__form_textWhite}>
                {staticTextWallet?.statusWallet ||
                  STATIC_TEXT[PageName.ProfileWallet].statusWallet}
              </div>
            </div>
          </div>
          <div className={s.wallet__form_balance}>
            <div className={s.wallet__form_textGrey}>
              {staticTextWallet?.balanceTitle ||
                STATIC_TEXT[PageName.ProfileWallet].balanceTitle}
            </div>
            <div className={s.wallet__form_textWhite}>
              {staticTextWallet?.balanceValue ||
                STATIC_TEXT[PageName.ProfileWallet].balanceValue}{' '} {/* как получить баланс? что писать, если static text? */}
            </div>
          </div>
          <div className={s.wallet__form_connect}>
            <div className={cn(s.wallet__form_textGrey, s.wallet__form_connect_status)}>
              {staticTextWallet?.networkTitle ||
                STATIC_TEXT[PageName.ProfileWallet].networkTitle}
            </div>
            <div className={cn(s.wallet__form_connect_money, s.wallet__form_textWhite)}>
              <img src={iconEthereum} alt={'Ethereum'} />
              <div>
                {staticTextWallet?.networkName ||
                  STATIC_TEXT[PageName.ProfileWallet].networkName}
              </div>
            </div>
          </div>
          <div className={s.wallet__form_disconnect}>
            <div className={cn(s.wallet__form_textGrey, s.wallet__form_disconnect_title)}>
              {staticTextWallet?.statusForm ||
                STATIC_TEXT[PageName.ProfileWallet].statusForm}
            </div>
            <button className={cn(s.wallet__icon, 'iconDisconnect')} />
          </div>
        </div>
      </div>
    </>
  );
}
