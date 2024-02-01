import cn from 'classnames';
import iconEthereum from '../../../assets/images/Ethereum.svg';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import iconMetamask from '../../../assets/images/metamask.svg';
import { NetworkName } from '../../../core/constants/NetworkName';
import { PageName } from '../../../core/constants/PageNames';
import { ConnectWalletStatus } from '../../../core/constants/Status';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import copyText from '../../../core/helpers/copyText';
import walletNumberConverter from '../../../core/helpers/walletNumberConverter';
import s from './style.module.scss';

const number = '0x78245634b81';

export function Wallet({ className, text }) {
  const newNumber = walletNumberConverter(number);

  return (
    <>
      <div className={cn(s.wallet, className)}>
        <img className={s.wallet__mascot} src={mascot} alt={'mascot likes it'} />
        <div className={s.wallet__field}>
          <div className={s.wallet__field_title}>
            {text?.title || STATIC_TEXT[PageName.ProfileWallet].title}
          </div>
          <div className={s.wallet__field_info}>
            <div className={cn(s.wallet__field_info_number)}>
              <div>{newNumber}</div>
              <button
                className={cn(s.wallet__icon, 'iconCopy')}
                onClick={() => copyText(number)}
              />
              <button className={cn(s.wallet__icon, 'iconLink')} />
            </div>
            <div className={cn(s.wallet__field_info_status)}>
              <img className={s.wallet__img} src={iconMetamask} alt={'metamask'} />
              <div className={s.wallet__field_textActive}>
                {text?.statusWallet[ConnectWalletStatus.Connected] ||
                  STATIC_TEXT[PageName.ProfileWallet].statusWallet[
                    ConnectWalletStatus.Connected
                  ]}
              </div>
            </div>
          </div>
          <div className={s.wallet__field_balance}>
            <div className={s.wallet__field_textTitle}>
              {text?.balanceTitle || STATIC_TEXT[PageName.ProfileWallet].balanceTitle}
            </div>
            <div className={s.wallet__field_textActive}>
              {text?.balanceValue || STATIC_TEXT[PageName.ProfileWallet].balanceValue}{' '}
            </div>
          </div>
          <div className={s.wallet__field_connect}>
            <div
              className={cn(s.wallet__field_textTitle, s.wallet__field_connect_status)}>
              {text?.networkTitle || STATIC_TEXT[PageName.ProfileWallet].networkTitle}
            </div>
            <div
              className={cn(s.wallet__field_textActive, s.wallet__field_connect_money)}>
              <img src={iconEthereum} alt={'Ethereum'} />
              <div>
                {text?.networkName[NetworkName.Mainnet] ||
                  STATIC_TEXT[PageName.ProfileWallet].networkName}
              </div>
            </div>
          </div>
          <div className={s.wallet__field_disconnect}>
            <div
              className={cn(s.wallet__field_textTitle, s.wallet__field_disconnect_title)}>
              {text?.connectButton[ConnectWalletStatus.Connected] ||
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
