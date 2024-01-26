import { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { LANGUAGES } from '../../core/constants/languages';

export function MenuBurger({ className }) {
  // const [activeLanguage, setActiveLanguage] = useState('');
  // const [stop, setStop] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className={cn(s.menu, className)}>
      <ul className={cn(s.menu__list)}>
        {LANGUAGES.map((item, index) => {
          return (
            <li
              // className={
              //   // activeLanguage === index ? s.languages__item_active : s.languages__item
              // }
              key={item.lang}
              // onClick={() => chooseLanguage(index)}
            >
              <img src={item.icon} alt='country flag' />
              <p>{item.lang}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
