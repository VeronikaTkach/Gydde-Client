import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { MetamaskConnection } from '../../../components/Auth/Metamask';
import { SubtitleRegular } from '../../../components/Subtitle';
import mascotBody from '../../../assets/images/mascot/mascotBodyStands.png';
import mascotHands from '../../../assets/images/mascot/mascotHandsStands.png';
import thumbUp from '../../../assets/images/stickers/thumbUp.png';
import smileyEyesStar from '../../../assets/images/stickers/smileyEyesStar.png';
import { MetamaskConnectionStatus } from '../../../core/constants/Status';
import smiley from '../../../assets/images/stickers/smiley.png';
import ball from '../../../assets/images/stickers/ball.png';
import bangOrange from '../../../assets/images/stickers/bangOrange.png';
import bangWhite from '../../../assets/images/stickers/bangWhite.png';
import metamaskSmiley from '../../../assets/images/stickers/metamask.png';
import { StickersSpinner } from '../../../components/ui/loaders/StickersSpinner';
import {
  metamaskAuthorization,
  setMetamaskConnectionStatus,
} from '../../../core/store/slices/metamaskAuthorizationSlice';
import s from './style.module.scss';

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

export function MetamaskView() {
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
        <MetamaskConnection
          status={connectionStatus}
          text={connectionText[connectionStatus].statusText}
        />
      </div>
      <StickersSpinner
        className={s.connectWindow__spinner}
        icons={[smiley, ball, bangOrange, metamaskSmiley, bangWhite]}
      />
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
