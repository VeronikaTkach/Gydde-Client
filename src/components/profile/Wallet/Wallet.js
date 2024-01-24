import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
// import { Button } from '../../ui/buttons/Button';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { PageName } from '../../../core/constants/PageNames';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import iconMetamask from '../../../assets/images/metamask.svg';
import iconEthereum from '../../../assets/images/Ethereum.svg';

export function Wallet() {
  // const dispatch = useDispatch();
  // const { staticTextWallet } = useSelector(staticText);

  // useEffect(() => {
  //   dispatch(getStaticText.basic(TEXT_KEYS.PROFILE_WALLET));

  //   return () => {
  //     dispatch(removeUnusedStaticText(PageName.ProfileWallet));
  //   };
  // }, []);

  return (
    <>
      <div className={cn(s.wallet)}>
        <img className={s.wallet__mascot} src={mascot} alt='mascot likes it' />
        <div className={s.wallet__form}>
          <div className={s.wallet__form_title}>Your wallet address</div>
          {/* <div className={s.wallet__form_title}>{staticTextWallet.formTitle}</div> */}
          <div className={s.wallet__form_info}>
            <div className={cn(s.wallet__form_info_number)}>
              <div>number</div>
              <button className={cn(s.wallet__icon, 'iconCopy')} />
              <button className={cn(s.wallet__icon, 'iconLink')} />
            </div>
            <div className={cn(s.wallet__form_info_status)}>
              <img className={s.wallet__img} src={iconMetamask} alt={'metamask'} />
              {/* <div className={s.wallet__form_textWhite}>
                {staticTextWallet.statusWallet}
              </div> */}
              <div className={s.wallet__form_textWhite}>Connected</div>
            </div>
          </div>
          <div className={s.wallet__form_balance}>
            {/* <div className={s.wallet__form_textGrey}>{staticTextWallet.balanceTitle}</div> */}
            <div className={s.wallet__form_textGrey}>Balance ETH</div>
            {/* <div className={s.wallet__form_textWhite}>
              {staticTextWallet.balanceValue}
            </div> */}
            <div className={s.wallet__form_textWhite}>0</div>
          </div>
          <div className={s.wallet__form_connect}>
            {/* <div className={cn(s.wallet__form_textGrey, s.wallet__form_connect_status)}>
              {staticTextWallet.networkTitle}
            </div> */}
            <div className={cn(s.wallet__form_textGrey, s.wallet__form_connect_status)}>
              Connected network
            </div>
            <div className={cn(s.wallet__form_connect_money, s.wallet__form_textWhite)}>
              <img src={iconEthereum} alt={'Ethereum'} />
              {/* <div>{staticTextWallet.networkName}</div> */}
              <div>Ethereum</div>
            </div>
          </div>
          <div className={s.wallet__form_disconnect}>
            {/* <div className={cn(s.wallet__form_textGrey, s.wallet__form_disconnect_title)}>
              {staticTextWallet.statusForm}
            </div> */}
            <div className={cn(s.wallet__form_textGrey, s.wallet__form_disconnect_title)}>
              Disconnect
            </div>
            <button className={cn(s.wallet__icon, 'iconDisconnect')} />
          </div>
        </div>
      </div>
    </>
  );
}
