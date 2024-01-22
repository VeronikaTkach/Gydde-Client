import { useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { InputSearch } from '../../ui/Input/InputSearch';

export function QuestSearch(numberOfCards) {
  // useEffect(() => {}, []);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isTitleVisible, setTitleVisible] = useState(true);

  // const isScroll = 600 - numberOfCards * 92;
  // const isScroll = numberOfCards;

  // if (isScroll < 6) {
  //   setTitleVisible(true);
  //   setSearchVisible(false);
  // } else {
  //   setSearchVisible(true);
  //   setTitleVisible(false);
  // }

  return (
    <>
      {isSearchVisible && (
        <div className={cn(s.questSearch)}>
          <InputSearch className={s.questSearch__input}/>
          <Button
            className={cn(s.field__btn, s.field__btn__search, 'iconSearch')}
            type={'button'}
            // onClick={searchHandler}
          />
        </div>
      )}
      {isTitleVisible && (
        <div className={s.questSearch__title}>
          <InputSearch placeholder={'My guides'} disabled={true} />
        </div>
      )}
    </>
  );
}
