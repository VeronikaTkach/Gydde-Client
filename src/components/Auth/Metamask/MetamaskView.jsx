import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MetamaskConnection } from '../../../components/Auth/Metamask';
import { SubtitleRegular } from '../../../components/Subtitle';
import mascotBody from '../../../assets/images/mascot/mascotBodyStands.png';
import mascotHands from '../../../assets/images/mascot/mascotHandsStands.png';
import thumbUp from '../../../assets/images/stickers/thumbUp.png';
import smileyEyesStar from '../../../assets/images/stickers/smileyEyesStar.png';
import { MetamaskConnectionStatus, Status } from '../../../core/constants/Status';
import smiley from '../../../assets/images/stickers/smiley.png';
import ball from '../../../assets/images/stickers/ball.png';
import bangOrange from '../../../assets/images/stickers/bangOrange.png';
import bangWhite from '../../../assets/images/stickers/bangWhite.png';
import metamaskSmiley from '../../../assets/images/stickers/metamask.png';
import { StickersSpinner } from '../../../components/ui/loaders/StickersSpinner';
import {
  metamaskAuthorization,
  setFirstHighlightedItem,
  setMetamaskConnectionStatus,
} from '../../../core/store/slices/metamaskAuthorizationSlice';
import { getStaticModalsText } from '../../../core/store/staticText/modalsThunk';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { staticTextHelper } from '../../../core/helpers/staticTextHelper';
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
  [MetamaskConnectionStatus.Error]: {
    statusText: 'Connection error',
    descriptionText: 'Something went wrong',
    buttonText: 'Try again',
    buttonSticker: thumbUp,
  },
};

const firstItem = 0;

export function MetamaskView() {
  const dispatch = useDispatch();
  const { connectionStatus, firstHighlightedItem } = useSelector(metamaskAuthorization);
  const { modalsText, modalsStatus } = useSelector((state) => state.staticModalsText);
  const [currentText, setCurrentText] = useState(null);

  if (connectionStatus !== MetamaskConnectionStatus.NoWallet && !window.ethereum) {
    dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.NoWallet));
    dispatch(setFirstHighlightedItem(firstItem));

    return;
  }

  useEffect(() => {
    dispatch(getStaticModalsText.metamaskConnect(TEXT_KEYS.METAMASK_CONNECT));
  }, []);

  useEffect(() => {
    if (connectionStatus && modalsStatus === Status.Resolved) {
      const highlightedText = staticTextHelper.setHighlightedText(
        modalsText[connectionStatus],
        firstHighlightedItem
      );
      setCurrentText(highlightedText);
    }
  }, [connectionStatus, modalsStatus]);

  return (
    <>
      {modalsStatus === Status.Resolved &&
        modalsText &&
        connectionStatus &&
        currentText && (
          <div className={s.connectWindow}>
            <div className={cn(s.connectWindow__header, s.header)}>
              <MetamaskConnection
                status={connectionStatus}
                text={currentText.statusText}
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
                  [s.mascot__text_noAnswer]: !currentText.buttonText,
                })}
                text={currentText.descriptionText}
                answerButtonText={currentText.buttonText}
                answerButtonSticker={connectionText[connectionStatus]?.buttonSticker}
                answerButtonOnClick={connectionText[connectionStatus]?.buttonOnClick}
              />
            </div>
            <div className={s.connectWindow__descriptionText}></div>
          </div>
        )}
    </>
  );
}
