// import { useState, useEffect } from 'react';
import cn from 'classnames';
import { PageName } from '../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { InputSearch } from '../../ui/Input/InputSearch';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';

export function QuestSearch({ text, cardsCount }) {
  // const [pageHeight, setPageHeight] = useState(null);
  // const isScrollVisible = pageHeight < numberOfCards * 100; // высота карточки + расстояние между карточками
  // const updatePageHeight = () => {
  //   const windowHeight = window.innerHeight; // Высота видимой области страницы
  //   setPageHeight(windowHeight);
  // };
  const cardScrollLimit = 8;
  const isScrollVisible = cardsCount > cardScrollLimit;
  // useEffect(() => {
  //   updatePageHeight();
  //   window.addEventListener('resize', updatePageHeight);

  //   return () => {
  //     window.removeEventListener('resize', updatePageHeight);
  //   };
  // }, []);

  return (
    <>
      {isScrollVisible && (
        <div className={cn(s.questSearch)}>
          <InputSearch
            className={s.questSearch__input}
            placeholder={
              text?.searchPlaceholder ||
              STATIC_TEXT[PageName.GuidesChat].searchPlaceholder
            }
          />
          <Button
            className={cn(s.field__btn, s.field__btn__search, 'iconSearch')}
            type={'button'}
            // onClick={searchHandler}
          />
        </div>
      )}
      {!isScrollVisible && (
        <div className={cn(s.questSearch, s.questSearch__title)}>
          <InputSearch
            placeholder={
              text?.searchTitle || STATIC_TEXT[PageName.GuidesChat].searchTitle
            }
            disabled={true}
          />
        </div>
      )}
    </>
  );
}
