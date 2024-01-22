import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import iconCopy from '../../../assets/images/copy.svg';
import iconSend from '../../../assets/images/IconSend.svg';
import iconMetamask from '../../../assets/images/metamask.svg';
import iconEthereum from '../../../assets/images/Ethereum.svg';
import iconDisconnect from '../../../assets/images/IconDisconnect.svg';

export function Wallet({ className }) {
  useEffect(() => {}, []);

  return (
    <>
      <div className={cn(s.wallet)}>
        <div className={s.wallet__form}>
          <div className={s.wallet__form_title}>Your wallet address</div>
          <div className={s.wallet__form_info}>
            <div className={cn(s.wallet__form_info_number)}>
              <div>number</div>
              <button>
                <img src={iconCopy} alt={'copy'} />
              </button>
              <button>
                <img src={iconSend} alt={'send'} />
              </button>
            </div>
            <div className={cn(s.wallet__form_info_status)}>
              <img className={s.wallet__img} src={iconMetamask} alt={'metamask'} />
              <div className={s.wallet__form_textWhite}>Connected</div>
            </div>
          </div>
          <div className={s.wallet__form_balance}>
            <div className={s.wallet__form_textGrey}>Balance ETH</div>
            <div className={s.wallet__form_textWhite}>0</div>
          </div>
          <div className={s.wallet__form_connect}>
            <div className={cn(s.wallet__form_textGrey, s.wallet__form_connect_status)}>
              Connected network
            </div>
            <div className={cn(s.wallet__form_connect_money, s.wallet__form_textWhite)}>
              <img src={iconEthereum} alt={'Ethereum'} />
              <div>Ethereum</div>
            </div>
          </div>
          <div className={s.wallet__form_disconnect}>
            <div className={cn(s.wallet__form_textGrey, s.wallet__form_disconnect_title)}>
              Disconnect
            </div>
            <img
              className={s.wallet__img_disconnect}
              src={iconDisconnect}
              alt={'disconnect'}
            />
          </div>
        </div>
      </div>
    </>
  );
}
