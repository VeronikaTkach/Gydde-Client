import cn from 'classnames';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import helper from '../../assets/images/gyddePicture.png';
import helloSticker from '../../assets/images/stickers/helloHand.png';
import { LanguageList } from '../../components/LanguageList';
import { SubtitleWithAccentButton } from '../../components/Subtitle';
import { PageName } from '../../core/constants/PageNames';
import { Size } from '../../core/constants/Size';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { staticTextHelper } from '../../core/helpers/staticTextHelper';
import { useStaticText } from '../../core/hooks/useStaticText';
import { removeUnusedStaticText } from '../../core/store/staticText/slice';
import { getStaticText } from '../../core/store/staticText/thunk';
import s from './style.module.scss';

const highlightedItemIndex = 1;

export function HelloPage() {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.Hello);
  const [currentText, setCurrentText] = useState(null);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.HELLO));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Hello));
    };
  }, []);

  useEffect(() => {
    if (text) {
      const highlightedText = staticTextHelper.setHighlightedText(
        text,
        highlightedItemIndex
      );
      setCurrentText(highlightedText);
    }
  }, [text]);

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
