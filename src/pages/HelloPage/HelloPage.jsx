import cn from 'classnames';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import helper from '../../assets/images/gyddePicture.png';
import helloSticker from '../../assets/images/stickers/helloHand.png';
import { LanguageList } from '../../components/LanguageList';
import { SubtitleWithAccentButton } from '../../components/Subtitle';
import { PageName } from '../../core/constants/PageNames';
import { Size } from '../../core/constants/Size';
import { Status } from '../../core/constants/Status';
import { STATIC_TEXT } from '../../core/constants/staticText';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { staticTextHelper } from '../../core/helpers/staticTextHelper';
import { removeUnusedStaticText, staticText } from '../../core/store/staticText/slice';
import { getStaticText } from '../../core/store/staticText/thunk';
import s from './style.module.scss';

const highlightedItemIndex = 1;

export function HelloPage() {
  const dispatch = useDispatch();
  const [currentText, setCurrentText] = useState(null);
  const { staticTextHello, staticTextStatusHello } = useSelector(staticText);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.HELLO));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Hello));
    };
  }, []);

  useEffect(() => {
    if (staticTextStatusHello === Status.Resolved) {
      const highlightedText = staticTextHelper.setHighlightedText(
        staticTextHello,
        highlightedItemIndex
      );
      setCurrentText(highlightedText);
    } else if (staticTextStatusHello === Status.Rejected) {
      const highlightedText = staticTextHelper.setHighlightedText(
        STATIC_TEXT[PageName.Hello],
        highlightedItemIndex
      );
      setCurrentText(highlightedText);
    }
  }, [staticTextStatusHello]);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__main)}>
          <div className={cn(s.content__container)}>
            <img src={helper} alt='helper picture' className={s.content__img} />
          </div>
          <LanguageList className={s.content__languages} />
        </div>
        {currentText && (
          <SubtitleWithAccentButton
            className={s.content__subtitle}
            sound={true}
            text={currentText.mascotText}
            buttonText={currentText.answerButtonText}
            buttonSticker={helloSticker}
            size={Size.L}
          />
        )}
      </main>
    </>
  );
}
