import cn from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/buttons/Button';
import { Metamask } from '../../../components/Auth/Metamask';
import { RoutesName } from '../../../core/constants/Routes';
import s from './style.module.scss';

const connectionStatus = {
  NoWallet: 0,
  Connecting: 1,
  Error: 2,
  Sign: 3,
  Connected: 4,
};
const connectionText = {
  [connectionStatus.NoWallet]: {
    statusText: 'No wallet detected',
    descriptionTextPart1: 'I see that you don’t have a wallet. No problem,',
    descriptionTextPart2: 'I can show you',
    descriptionTextPart3: 'how to create your first account.',
    buttonText: 'Gydde, show me!',
  },
  [connectionStatus.Connecting]: {
    statusText: 'Connecting...',
    descriptionTextPart1: 'Open the',
    descriptionTextPart2: 'MetaMask',
    descriptionTextPart3: 'browser extension and confirm connection to',
    descriptionTextPart4: 'Gydde.com',
  },
  [connectionStatus.Error]: {
    statusText: 'Connection error',
    descriptionText: 'Something went wrong',
    buttonText: 'Try again',
  },
  [connectionStatus.Sign]: {
    statusText: 'Connecting...',
    descriptionTextPart1: 'Please sign the message request in your wallet to continue.',
    descriptionTextPart2: 'sign',
    descriptionTextPart3: 'the message request in your wallet to continue.',
  },
  [connectionStatus.Connected]: {
    statusText: 'Connected',
    descriptionText: 'Logging in',
  },
};

export function MetamaskConnectPage() {
  const navigate = useNavigate();
  const [currentConnectionStatus, setCurrentConnectionStatus] = useState(
    connectionStatus.Connecting
  );

  return (
    <div className={s.connectWindow}>
      <div className={s.connectWindow__header}>
        <div className={s.connectWindow__statusText}>
          {connectionText[currentConnectionStatus].statusText}
        </div>
        <Button
          className={cn(s.connectWindow__close, 'iconClose')}
          onClick={() => navigate(RoutesName.Root)}
        />
      </div>

      <div className={s.connectWindow__descriptionText}></div>
      <Metamask />
    </div>
  );
}
