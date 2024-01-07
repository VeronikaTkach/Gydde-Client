import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../components/ui/buttons/Button';
import { Metamask } from '../../../components/Auth/Metamask';
import { RoutesName } from '../../../core/constants/Routes';
import { SubtitleRegular } from '../../../components/Subtitle';
import mascotBody from '../../../assets/images/mascot/mascotBodyStands.png';
import mascotHands from '../../../assets/images/mascot/mascotHandsStands.png';
import thumbUp from '../../../assets/images/stickers/thumbUp.png';
import smileyEyesStar from '../../../assets/images/stickers/smileyEyesStar.png';
import { MetamaskConnectionStatus } from '../../../core/constants/Status';
import {
  metamaskAuthorization,
  setMetamaskConnectionStatus,
} from '../../../core/store/slices/metamaskAuthorizationSlice';
import s from './style.module.scss';

const connectionTextServer = {
  [MetamaskConnectionStatus.NoWallet]: {
    statusText: 'No wallet detected',
    descriptionTextPart1: 'I see that you don’t have a wallet. No problem,',
    descriptionTextPart2: 'I can show you',
    descriptionTextPart3: 'how to create your first account.',
    buttonText: 'Gydde, show me!',
  },
  [MetamaskConnectionStatus.Connecting]: {
    statusText: 'Connecting...',
    descriptionTextPart1: 'Open the',
    descriptionTextPart2: 'MetaMask',
    descriptionTextPart3: 'browser extension and confirm connection to',
    descriptionTextPart4: 'Gydde.com',
  },
  [MetamaskConnectionStatus.Error]: {
    statusText: 'Connection error',
    descriptionText: 'Something went wrong',
    buttonText: 'Try again',
  },
  [MetamaskConnectionStatus.Sign]: {
    statusText: 'Connecting...',
    descriptionTextPart1: 'Please sign the message request in your wallet to continue.',
    descriptionTextPart2: 'sign',
    descriptionTextPart3: 'the message request in your wallet to continue.',
  },
  [MetamaskConnectionStatus.Connected]: {
    statusText: 'Connected',
    descriptionText: 'Logging in',
  },
};

const connectionText = {
  [MetamaskConnectionStatus.NoWallet]: {
    statusText: 'No wallet detected',
    descriptionText: [
      { part: 'I will show you', isHighlighted: true },
      { part: 'how to create your first wallet.', isHighlighted: false },
    ],
    buttonText: 'Show me!',
    buttonSticker: smileyEyesStar,
  },
  [MetamaskConnectionStatus.Connecting]: {
    statusText: 'Connecting...',
    descriptionText: [
      { part: 'Open the', isHighlighted: false },
      { part: 'MetaMask', isHighlighted: true },
      { part: 'browser extension and confirm connection to', isHighlighted: false },
      { part: 'Gydde.com', isHighlighted: true },
    ],
  },
  [MetamaskConnectionStatus.Error]: {
    statusText: 'Connection error',
    descriptionText: 'Something went wrong',
    buttonText: 'Try again',
    buttonSticker: thumbUp,
  },
  [MetamaskConnectionStatus.Sign]: {
    statusText: 'Connecting...',
    descriptionText: [
      { part: 'Please', isHighlighted: false },
      { part: 'sign', isHighlighted: true },
      { part: 'the message request in your wallet to continue.', isHighlighted: false },
    ],
  },
  [MetamaskConnectionStatus.Connected]: {
    statusText: 'Connected',
    descriptionText: 'Logging in',
  },
};

export function MetamaskConnectPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { connectionStatus } = useSelector(metamaskAuthorization);
  connectionText[MetamaskConnectionStatus.Error].buttonOnClick = () =>
    dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.Connecting)); //! временно

  if (connectionStatus !== MetamaskConnectionStatus.NoWallet && !window.ethereum) {
    dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.NoWallet));

    return;
  }

  return (
    <div className={s.connectWindow}>
      <div className={cn(s.connectWindow__header, s.header)}>
        <Metamask
          status={connectionStatus}
          text={connectionText[connectionStatus].statusText}
        />
        <Button
          className={cn(s.header__close, 'iconClose')}
          onClick={() => {
            dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.Connecting));
            navigate(RoutesName.Root);
          }}
        />
      </div>
      <div className={cn(s.connectWindow__mascot, s.mascot)}>
        <img className={s.mascot__body} src={mascotBody} alt={'mascot'} />
        <img className={s.mascot__hands} src={mascotHands} alt={'mascot'} />
        <SubtitleRegular
          className={cn(s.mascot__text, {
            [s.mascot__text_noAnswer]: !connectionText[connectionStatus].buttonText,
          })}
          text={connectionText[connectionStatus].descriptionText}
          answerButtonText={connectionText[connectionStatus].buttonText}
          answerButtonSticker={connectionText[connectionStatus].buttonSticker}
          answerButtonOnClick={connectionText[connectionStatus].buttonOnClick}
        />
      </div>
      <div className={s.connectWindow__descriptionText}></div>
    </div>
  );
}
