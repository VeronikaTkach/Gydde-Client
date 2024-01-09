import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { MetamaskConnectionStatus } from '../../../core/constants/Status';
import {
  getMetamaskAccount,
  metamaskAuthorization,
  sendMetamaskData,
  setMetamaskMessage,
  signMetamaskMessage,
} from '../../../core/store/slices/metamaskAuthorizationSlice';
import { RoutesName } from '../../../core/constants/Routes';
import s from './style.module.scss';

const numberSize = 1000000;

export function MetamaskConnection({ text }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const web3Ref = useRef(new Web3(window.ethereum));
  const { connectionStatus, account, message, signedMessage } =
    useSelector(metamaskAuthorization);

  useEffect(() => {
    if (connectionStatus === MetamaskConnectionStatus.Connecting) {
      dispatch(getMetamaskAccount(web3Ref.current));
    } else if (connectionStatus === MetamaskConnectionStatus.Sign) {
      const randomMessage = Math.floor(Math.random() * numberSize).toString();

      dispatch(setMetamaskMessage(randomMessage));
      dispatch(signMetamaskMessage(web3Ref.current));
    } else if (connectionStatus === MetamaskConnectionStatus.Connected) {
      sendMetamaskData({
        account: account,
        message: message,
        signedMessage: signedMessage,
      });
    } else if (connectionStatus === MetamaskConnectionStatus.Finish) {
      navigate(RoutesName.Root);
    }
  }, [connectionStatus]);

  return <div className={s.statusText}>{text}</div>;
}
