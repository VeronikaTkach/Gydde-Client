import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MetamaskConnection } from '../../../components/Auth/Metamask';
import { SubtitleWithBorderButton } from '../../../components/Subtitle';
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
import { staticTextHelper } from '../../../core/helpers/staticTextHelper';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { PageName } from '../../../core/constants/PageNames';
import { Size } from '../../../core/constants/Size';
import s from './style.module.scss';
import {
  metamask,
  setFirstHighlightedItem,
  setMetamaskConnectionStatus,
} from '../../../core/store/metamask/slice';

const buttonIcon = {
  [MetamaskConnectionStatus.NoWallet]: {
    buttonSticker: smileyEyesStar,
  },
  [MetamaskConnectionStatus.Error]: {
    buttonSticker: thumbUp,
  },
};

const firstItem = 0;

export function MetamaskView() {
  const dispatch = useDispatch();
  const { connectionStatus, firstHighlightedItem } = useSelector(metamask);
  const { staticTextMetamask, staticTextStatusMetamask } = useSelector(staticText);

  const [currentText, setCurrentText] = useState(null);
  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.METAMASK_CONNECT));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Metamask));
    };
  }, []);

  useEffect(() => {
    if (connectionStatus && staticTextStatusMetamask === Status.Resolved) {
      const highlightedText = staticTextHelper.setHighlightedText(
        staticTextMetamask[connectionStatus],
        firstHighlightedItem
      );
      setCurrentText(highlightedText);
    }
  }, [connectionStatus, staticTextStatusMetamask]);

  if (connectionStatus !== MetamaskConnectionStatus.NoWallet && !window.ethereum) {
    dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.NoWallet));
    dispatch(setFirstHighlightedItem(firstItem));

    return;
  }

  function handleClick() {
    if (connectionStatus === MetamaskConnectionStatus.NoWallet) {
      //TODO отправить куда-то
    } else if (connectionStatus === MetamaskConnectionStatus.Error) {
      dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.Connecting));
    }
  }

  return (
    <>
      {currentText && (
        <div className={s.connectWindow}>
          <div className={cn(s.connectWindow__header, s.header)}>
            <MetamaskConnection status={connectionStatus} text={currentText.statusText} />
          </div>
          <StickersSpinner
            className={s.connectWindow__spinner}
            icons={[smiley, ball, bangOrange, metamaskSmiley, bangWhite]}
          />
          <div className={cn(s.connectWindow__mascot, s.mascot)}>
            <img className={s.mascot__body} src={mascotBody} alt={'mascot'} />
            <img className={s.mascot__hands} src={mascotHands} alt={'mascot'} />
            <SubtitleWithBorderButton
              className={cn(s.mascot__text, {
                [s.mascot__text_noAnswer]: !currentText.buttonText,
              })}
              text={currentText.descriptionText}
              buttonText={currentText.buttonText}
              buttonSticker={buttonIcon[connectionStatus]?.buttonSticker}
              buttonOnClick={handleClick}
              size={Size.L}
            />
          </div>
          <div className={s.connectWindow__descriptionText}></div>
        </div>
      )}
    </>
  );
}
