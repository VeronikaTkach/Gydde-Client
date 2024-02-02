import cn from 'classnames';
import { useState, useEffect } from 'react';
import helper from '../../assets/images/gyddePicture.png';
import helloSticker from '../../assets/images/stickers/helloHand.png';
import { LanguageList } from '../../components/LanguageList';
import { SubtitleWithAccentButton } from '../../components/Subtitle';
import { PageName } from '../../core/constants/PageNames';
import { Size } from '../../core/constants/Size';
import { staticTextHelper } from '../../core/helpers/staticTextHelper';
import { useRequestStaticText } from '../../core/hooks/useRequestStaticText';
import s from './style.module.scss';

const highlightedItemIndex = 1;

export function HelloPage() {
  const { text } = useRequestStaticText(PageName.Hello);
  const [currentText, setCurrentText] = useState(null);

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
