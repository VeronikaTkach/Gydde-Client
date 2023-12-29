import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import usa from '../../assets/images/flagUsa.svg';
import indonesia from '../../assets/images/flagBi.svg';
import china from '../../assets/images/flagCn.svg';
import russia from '../../assets/images/flagRu.svg';
import spain from '../../assets/images/flagEs.svg';

const languages = [
  { lang: 'English', icon: usa, locale: 'en' },
  { lang: 'Bahasa Indonesia', icon: indonesia, locale: 'id' },
  { lang: '中文', icon: china, locale: 'cn' },
  { lang: 'Русский', icon: russia, locale: 'ru' },
  { lang: 'Español', icon: spain, locale: 'es' },
];
const firstLanguage = 0;
const step = 1;
const userLocale = navigator.language.split('-')[firstLanguage];

export function LanguageList() {
  const [activeLanguage, setActiveLanguage] = useState(firstLanguage);
  const [stop, setStop] = useState(false);
  const [isLanguageChoosen, setIsLanguageChoosen] = useState(false);
  const timeRef = useRef(null);

  useEffect(() => {
    if (languages && !isLanguageChoosen) {
      if (checkLanguage(languages)) {
        setStop(true);

        return;
      }
    }
    clearInterval(timeRef.current);

    if (stop) {
      return;
    }

    const timeInterval = 3000;
    if (stop === false) {
      timeRef.current = setInterval(changeLanguage, timeInterval);
    }

    return () => clearInterval(timeRef.current);
  }, [activeLanguage, stop, languages]);

  function checkLanguage(languages) {
    return languages.some((item, index) => {
      if (item.locale === userLocale) {
        localStorage.setItem('userLocale', item.locale);
        setActiveLanguage(index);
        setIsLanguageChoosen(true);

        return true;
      }
    });
  }

  function handlePause(e) {
    if (!isLanguageChoosen) {
      if (e.type === 'mouseenter') {
        setStop(true);
      } else {
        setStop(false);
      }
    }
  }

  function changeLanguage() {
    if (activeLanguage < languages.length - step) {
      setActiveLanguage((prev) => ++prev);
    } else {
      setActiveLanguage(firstLanguage);
    }
  }

  function chooseLanguage(index) {
    setStop(true);
    setIsLanguageChoosen(true);
    setActiveLanguage(index);
    localStorage.setItem('userLocale', languages[index].locale);
  }

  return (
    <div className={cn(s.languages)}>
      <ul
        className={cn(s.languages__list)}
        onMouseEnter={handlePause}
        onMouseLeave={handlePause}>
        {languages.map((item, index) => {
          return (
            <li
              className={
                activeLanguage === index ? s.languages__item_active : s.languages__item
              }
              key={item.lang}
              onClick={() => chooseLanguage(index)}>
              <img src={item.icon} alt='country flag' />
              <p>{item.lang}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
