import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { MetamaskConnectionStatus } from '../../../core/constants/Status';

import { RoutesName } from '../../../core/constants/Routes';
import s from './style.module.scss';
import { metamaskRequest } from '../../../core/store/metamask/thunk';
import { metamask, setFirstHighlightedItem, setMetamaskMessage } from '../../../core/store/metamask/slice';

const firstItem = 0;
const secondItem = 1;

export function MetamaskConnection({ text }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const web3Ref = useRef(new Web3(window.ethereum));
  const { connectionStatus, message, signedMessage } = useSelector(metamask);

  useEffect(() => {
    if (connectionStatus === MetamaskConnectionStatus.Connecting) {
      dispatch(metamaskRequest.getAccount(web3Ref.current));
      dispatch(setFirstHighlightedItem(secondItem));
    } else if (connectionStatus === MetamaskConnectionStatus.Sign) {
      const randomMessage = crypto.randomUUID();

      dispatch(setMetamaskMessage(randomMessage));
      dispatch(metamaskRequest.signMessage(web3Ref.current));
      dispatch(setFirstHighlightedItem(secondItem));
    } else if (connectionStatus === MetamaskConnectionStatus.Connected) {
      const authorizationData = {
        signature: signedMessage,
        uuid: message,
      };

      dispatch(setFirstHighlightedItem(firstItem));
      dispatch(metamaskRequest.sendAuthData(authorizationData));
    } else if (connectionStatus === MetamaskConnectionStatus.Finish) {
      navigate(RoutesName.Root);
    }
  }, [connectionStatus]);

  return <div className={s.statusText}>{text}</div>;
}
