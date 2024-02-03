import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mascotBody from '../../../assets/images/mascot/mascotBodyStands.png';
import mascotHands from '../../../assets/images/mascot/mascotHandsStands.png';
import smileyEyesStar from '../../../assets/images/stickers/smileyEyesStar.png';
import thumbUp from '../../../assets/images/stickers/thumbUp.png';
import { MetamaskConnection } from '../../../components/Auth/Metamask';
import { SubtitleWithBorderButton } from '../../../components/Subtitle';
import { PageName } from '../../../core/constants/PageNames';
import { Size } from '../../../core/constants/Size';
import { MetamaskConnectionStatus } from '../../../core/constants/Status';
import { staticTextHelper } from '../../../core/helpers/staticTextHelper';
import { useRequestStaticText } from '../../../core/hooks/useRequestStaticText';
import {
  metamaskStore,
  setFirstHighlightedItem,
  setMetamaskConnectionStatus,
} from '../../../core/store/metamask/slice';
import { LoaderMascotWithStikers } from '../../ui/loaders/LoaderMascotWithStikers';
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
  const { text } = useRequestStaticText(PageName.Metamask);
  const { connectionStatus, firstHighlightedItem } = useSelector(metamaskStore);
  const [currentText, setCurrentText] = useState(null);

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
          <LoaderMascotWithStikers
            className={s.connectWindow__spinner}
            spinnerSize={'200px'}
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
