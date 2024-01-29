import cn from 'classnames';
import s from './style.module.scss';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { PageName } from '../../../core/constants/PageNames';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import iconMetamask from '../../../assets/images/metamask.svg';
import iconEthereum from '../../../assets/images/Ethereum.svg';
import { ConnectWalletStatus } from '../../../core/constants/Status';
import { NetworkName } from '../../../core/constants/NetworkName';

const number = '0x7824b81';
const firstItem = 0;
const fourthItem = 4;

export function Wallet({ className, staticText }) {
  const newNumberPart1 = number.substring(firstItem, fourthItem);
  const newNumberPart2 = number.substring(number.length - fourthItem, number.length);
  const newNumber = newNumberPart1 + '...' + newNumberPart2;
  function copyOnClick() {
    navigator.clipboard.writeText(number);
  }

  return (
    <>
      <div className={cn(s.wallet, className)}>
        <img className={s.wallet__mascot} src={mascot} alt='mascot likes it' />
        <div className={s.wallet__field}>
          <div className={s.wallet__field_title}>
            {staticText?.title || STATIC_TEXT[PageName.ProfileWallet].title}
          </div>
          <div className={s.wallet__field_info}>
            <div className={cn(s.wallet__field_info_number)}>
              <div>{newNumber}</div>
              <button className={cn(s.wallet__icon, 'iconCopy')} onClick={copyOnClick} />
              <button className={cn(s.wallet__icon, 'iconLink')} />
            </div>
            <div className={cn(s.wallet__field_info_status)}>
              <img className={s.wallet__img} src={iconMetamask} alt={'metamask'} />
              <div className={s.wallet__field_textActive}>
                {staticText?.statusWallet[ConnectWalletStatus.Connected] ||
                  STATIC_TEXT[PageName.ProfileWallet].statusWallet[
                    ConnectWalletStatus.Connected
                  ]}
              </div>
            </div>
          </div>
          <div className={s.wallet__field_balance}>
            <div className={s.wallet__field_textTitle}>
              {staticText?.balanceTitle ||
                STATIC_TEXT[PageName.ProfileWallet].balanceTitle}
            </div>
            <div className={s.wallet__field_textActive}>
              {staticText?.balanceValue ||
                STATIC_TEXT[PageName.ProfileWallet].balanceValue}{' '}
            </div>
          </div>
          <div className={s.wallet__field_connect}>
            <div
              className={cn(s.wallet__field_textTitle, s.wallet__field_connect_status)}>
              {staticText?.networkTitle ||
                STATIC_TEXT[PageName.ProfileWallet].networkTitle}
            </div>
            <div
              className={cn(s.wallet__field_textActive, s.wallet__field_connect_money)}>
              <img src={iconEthereum} alt={'Ethereum'} />
              <div>
                {staticText?.networkName[NetworkName.Mainnet] ||
                  STATIC_TEXT[PageName.ProfileWallet].networkName}
              </div>
            </div>
          </div>
          <div className={s.wallet__field_disconnect}>
            <div
              className={cn(s.wallet__field_textTitle, s.wallet__field_disconnect_title)}>
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
