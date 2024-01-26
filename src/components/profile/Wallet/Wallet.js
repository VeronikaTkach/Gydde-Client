import cn from 'classnames';
import s from './style.module.scss';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { PageName } from '../../../core/constants/PageNames';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import iconMetamask from '../../../assets/images/metamask.svg';
import iconEthereum from '../../../assets/images/Ethereum.svg';
import { ConnectWalletStatus } from '../../../core/constants/Status';
import { NetworkName } from '../../../core/constants/NetworkName';

export function Wallet({ className, staticText }) {
  console.log(
    staticText?.statusWallet[ConnectWalletStatus.Connected],
    STATIC_TEXT[PageName.ProfileWallet].statusWallet[ConnectWalletStatus.Connected]
  );

  return (
    <>
      <div className={cn(s.wallet, className)}>
        <img className={s.wallet__mascot} src={mascot} alt='mascot likes it' />
        <div className={s.wallet__form}>
          <div className={s.wallet__form_title}>
            {staticText?.title || STATIC_TEXT[PageName.ProfileWallet].title}
          </div>
          <div className={s.wallet__form_info}>
            <div className={cn(s.wallet__form_info_number)}>
              <div>number</div>
              <button className={cn(s.wallet__icon, 'iconCopy')} />
              <button className={cn(s.wallet__icon, 'iconLink')} />
            </div>
            <div className={cn(s.wallet__form_info_status)}>
              <img className={s.wallet__img} src={iconMetamask} alt={'metamask'} />
              <div className={s.wallet__form_textWhite}>
                {staticText?.statusWallet[ConnectWalletStatus.Connected] ||
                  STATIC_TEXT[PageName.ProfileWallet].statusWallet[
                    ConnectWalletStatus.Connected
                  ]}
              </div>
            </div>
          </div>
          <div className={s.wallet__form_balance}>
            <div className={s.wallet__form_textGrey}>
              {staticText?.balanceTitle ||
                STATIC_TEXT[PageName.ProfileWallet].balanceTitle}
            </div>
            <div className={s.wallet__form_textWhite}>
              {staticText?.balanceValue ||
                STATIC_TEXT[PageName.ProfileWallet].balanceValue}{' '}
            </div>
          </div>
          <div className={s.wallet__form_connect}>
            <div className={cn(s.wallet__form_textGrey, s.wallet__form_connect_status)}>
              {staticText?.networkTitle ||
                STATIC_TEXT[PageName.ProfileWallet].networkTitle}
            </div>
            <div className={cn(s.wallet__form_connect_money, s.wallet__form_textWhite)}>
              <img src={iconEthereum} alt={'Ethereum'} />
              <div>
                {staticText?.networkName[NetworkName.Mainnet] ||
                  STATIC_TEXT[PageName.ProfileWallet].networkName}
              </div>
            </div>
          </div>
          <div className={s.wallet__form_disconnect}>
            <div className={cn(s.wallet__form_textGrey, s.wallet__form_disconnect_title)}>
              {staticText?.connectButton[ConnectWalletStatus.Connected] ||
                STATIC_TEXT[PageName.ProfileWallet].connectButton[
                  ConnectWalletStatus.Connected
                ]}
            </div>
            <button className={cn(s.wallet__icon, 'iconDisconnect')} />
          </div>
        </div>
      </div>
    </>
  );
}
