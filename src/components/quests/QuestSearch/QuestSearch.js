import { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { InputSearch } from '../../ui/Input/InputSearch';

export function QuestSearch({ numberOfCards }) {
  const [pageHeight, setPageHeight] = useState(null);
console.log(numberOfCards)
  const isScrollVisible = pageHeight < numberOfCards * 100; // высота карточки + расстояние между карточками
console.log(isScrollVisible)
  useEffect(() => {
    const updatePageHeight = () => {
      const windowHeight = window.innerHeight; // Высота видимой области страницы
      setPageHeight(windowHeight);
    };
    updatePageHeight();
    window.addEventListener('resize', updatePageHeight);

    return () => {
      window.removeEventListener('resize', updatePageHeight);
    };
  }, []);

  return (
    <>
      {isScrollVisible && (
        <div className={cn(s.questSearch)}>
          <InputSearch className={s.questSearch__input} />
          <Button
            className={cn(s.field__btn, s.field__btn__search, 'iconSearch')}
            type={'button'}
            // onClick={searchHandler}
          />
        </div>
      )}
      {!isScrollVisible && (
        <div className={s.questSearch__title}>
          <InputSearch placeholder={'My guides'} disabled={true} />
        </div>
      )}
    </>
  );
}
