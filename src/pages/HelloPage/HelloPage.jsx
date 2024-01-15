import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { LanguageList } from '../../components/LanguageList';
import { BaseSubtitle } from '../../components/Subtitle';
import helper from '../../assets/images/gydde_picture.png';
import helloSticker from '../../assets/images/stickers/helloHand.png';
import s from './style.module.scss';
import { getStaticPageText } from '../../core/store/staticText/pageThunk';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { Status } from '../../core/constants/Status';
import { staticTextHelper } from '../../core/helpers/staticTextHelper';

const secondItem = 1;

export function HelloPage() {
  const dispatch = useDispatch();
  const [currentText, setCurrentText] = useState(null);
  const { pageText, pageStatus } = useSelector((state) => state.staticPageText);

  useEffect(() => {
    dispatch(getStaticPageText.page(TEXT_KEYS.HELLO));
  }, []);

  useEffect(() => {
    if (pageStatus === Status.Resolved) {
      const highlightedText = staticTextHelper.setHighlightedText(pageText, secondItem);
      setCurrentText(highlightedText);
    }
  }, [pageStatus]);

  return (
    <>
      {pageText && pageStatus === Status.Resolved && currentText && (
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
