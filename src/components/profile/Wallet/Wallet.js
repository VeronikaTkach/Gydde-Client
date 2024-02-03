import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3';
import iconEthereum from '../../../assets/images/Ethereum.svg';
import mascot from '../../../assets/images/mascot/mascotReads.png';
import mascotSadness from '../../../assets/images/mascot/mascotSadness.png';
import iconMetamask from '../../../assets/images/metamask.svg';
import { PageName } from '../../../core/constants/PageNames';
import { ConnectWalletStatus } from '../../../core/constants/Status';
import { NETWORKS_BY_ID } from '../../../core/constants/networks';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import copyText from '../../../core/helpers/copyText';
import walletNumberConverter from '../../../core/helpers/walletNumberConverter';
import { metamaskStore } from '../../../core/store/metamask/slice';
import { metamaskRequest } from '../../../core/store/metamask/thunk';
import { LoaderMascotWithStikers } from '../../ui/loaders/LoaderMascotWithStikers';
import s from './style.module.scss';

export function Wallet({ className, text }) {
  const dispatch = useDispatch();
  const { account, balance, networkId } = useSelector(metamaskStore);
  const web3Ref = useRef(new Web3(window.ethereum));
  const [hiddenWallet, setHiddenWallet] = useState(null);
  const [connectStatus, setConnectStatus] = useState(ConnectWalletStatus.Disonnected);

  useEffect(() => {
    if (!account) {
      dispatch(metamaskRequest.getAccount(web3Ref.current));
    }
  }, []);

  useEffect(() => {
    if (account) {
      setHiddenWallet(walletNumberConverter(account));
      setConnectStatus(ConnectWalletStatus.Connected);
    }
  }, [account]);

  return (
    <>
      <div className={cn(s.wallet, className)}>
        {!account ? (
          <div className={s.wallet__container}>
            <img className={s.wallet__mascot} src={mascot} alt={'mascot likes it'} />
            <div className={s.wallet__field}>
              <div className={s.wallet__field_title}>
                {text?.title || STATIC_TEXT[PageName.ProfileWallet].title}
              </div>
              <div className={s.wallet__field_info}>
                <div className={cn(s.wallet__field_info_number)}>
                  <div>{hiddenWallet || '-'}</div>
                  {hiddenWallet && (
                    <button
                      className={cn(s.wallet__icon, 'iconCopy')}
                      onClick={() => copyText(account)}
                    />
                  )}
                  {/* <button className={cn(s.wallet__icon, 'iconLink')} /> */}
                </div>
                <div className={cn(s.wallet__field_info_status)}>
                  <img className={s.wallet__img} src={iconMetamask} alt={'metamask'} />
                  <div className={s.wallet__field_textActive}>
                    {text?.statusWallet[connectStatus] ||
                      STATIC_TEXT[PageName.ProfileWallet].statusWallet[connectStatus]}
                  </div>
                </div>
              </div>
              <div className={s.wallet__field_balance}>
                <div className={s.wallet__field_textTitle}>
                  {text?.balanceTitle || STATIC_TEXT[PageName.ProfileWallet].balanceTitle}
                </div>
                <div className={s.wallet__field_textActive}>{balance || '-'}</div>
              </div>
              <div className={s.wallet__field_connect}>
                <div
                  className={cn(
                    s.wallet__field_textTitle,
                    s.wallet__field_connect_status
                  )}>
                  {text?.networkTitle || STATIC_TEXT[PageName.ProfileWallet].networkTitle}
                </div>
                <div
                  className={cn(
                    s.wallet__field_textActive,
                    s.wallet__field_connect_money
                  )}>
                  <img src={iconEthereum} alt={'Ethereum'} />
                  <div>{NETWORKS_BY_ID[networkId]?.labelName || '-'}</div>
                </div>
              </div>
              <div className={s.wallet__field_disconnect}>
                <div
                  className={cn(
                    s.wallet__field_textTitle,
                    s.wallet__field_disconnect_title
                  )}>
                  {text?.connectButton[connectStatus] ||
                    STATIC_TEXT[PageName.ProfileWallet].connectButton[connectStatus]}
                </div>
                <button className={cn(s.wallet__icon, 'iconDisconnect')} />
              </div>
            </div>
          </div>
        ) : (
          <div className={s.wallet__loader}>
            <LoaderMascotWithStikers
              mascotImg={mascotSadness}
              spinnerSize={'280px'}
              spinnerTopPosition={'0'}
              mascotSize={{ marginTop: '55px' }}
            />
          </div>
        )}
      </div>
    </>
  );
}
