import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mascotBody from '../../../assets/images/mascot/mascotBodyStands.png';
import mascotHands from '../../../assets/images/mascot/mascotHandsStands.png';
import ball from '../../../assets/images/stickers/ball.png';
import bangOrange from '../../../assets/images/stickers/bangOrange.png';
import bangWhite from '../../../assets/images/stickers/bangWhite.png';
import metamaskSmiley from '../../../assets/images/stickers/metamask.png';
import smiley from '../../../assets/images/stickers/smiley.png';
import smileyEyesStar from '../../../assets/images/stickers/smileyEyesStar.png';
import thumbUp from '../../../assets/images/stickers/thumbUp.png';
import { MetamaskConnection } from '../../../components/Auth/Metamask';
import { SubtitleWithBorderButton } from '../../../components/Subtitle';
import { StickersSpinner } from '../../../components/ui/loaders/StickersSpinner';
import { PageName } from '../../../core/constants/PageNames';
import { Size } from '../../../core/constants/Size';
import { MetamaskConnectionStatus } from '../../../core/constants/Status';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { staticTextHelper } from '../../../core/helpers/staticTextHelper';
import { useStaticText } from '../../../core/hooks/useStaticText';
import {
  metamaskStore,
  setFirstHighlightedItem,
  setMetamaskConnectionStatus,
} from '../../../core/store/metamask/slice';
import { removeUnusedStaticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import s from './style.module.scss';

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
  const { text } = useStaticText(PageName.Metamask);
  const { connectionStatus, firstHighlightedItem } = useSelector(metamaskStore);

  const [currentText, setCurrentText] = useState(null);
  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.METAMASK_CONNECT));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Metamask));
    };
  }, []);

  useEffect(() => {
    if (text) {
      const highlightedText = staticTextHelper.setHighlightedText(
        text[connectionStatus],
        firstHighlightedItem
      );
      setCurrentText(highlightedText);
    }
  }, [connectionStatus, text]);

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
