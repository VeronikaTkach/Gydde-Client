import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { LanguageList } from '../../components/LanguageList';
import { BaseSubtitle } from '../../components/Subtitle';
import helper from '../../assets/images/gyddePicture.png';
import helloSticker from '../../assets/images/stickers/helloHand.png';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { Status } from '../../core/constants/Status';
import { staticTextHelper } from '../../core/helpers/staticTextHelper';
import { getStaticText } from '../../core/store/staticText/thunk';
import { removeUnusedStaticText, staticText } from '../../core/store/staticText/slice';
import { PageName } from '../../core/constants/PageNames';
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
    }
  }, [staticTextStatusHello]);

  return (
    <>
      {staticTextHello && staticTextStatusHello === Status.Resolved && currentText && (
        <main className={cn(s.content)}>
          <div className={cn(s.content__main)}>
            <div className={cn(s.content__container)}>
              <img src={helper} alt='helper picture' className={s.content__img} />
            </div>
            <LanguageList className={s.content__languages} />
          </div>
          <BaseSubtitle
            className={s.content__subtitle}
            sound={true}
            text={currentText.mascotText}
            answerButtonText={currentText.answerButtonText}
            answerButtonSticker={helloSticker}
          />
        </main>
      )}
    </>
  );
}
