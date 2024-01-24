import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { LANGUAGES } from '../../core/constants/languages';

const firstLanguage = 0;
const step = 1;
const userLocale = navigator.language.split('-')[firstLanguage];

export function LanguageList({ className }) {
  const [activeLanguage, setActiveLanguage] = useState(firstLanguage);
  const [stop, setStop] = useState(false);
  const [isLanguageChoosen, setIsLanguageChoosen] = useState(false);
  const timeRef = useRef(null);

  useEffect(() => {
    if (LANGUAGES && isLanguageChoosen) {
      setStop(true);

      return;
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
  }, [activeLanguage, stop, LANGUAGES]);

  function checkLanguage(languages) {
    return languages.some((item, index) => {
      if (item.locale === userLocale) {
        localStorage.setItem('userLocale', item.locale);
        setActiveLanguage(index);

        return;
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
    if (activeLanguage < LANGUAGES.length - step) {
      setActiveLanguage((prev) => ++prev);
    } else {
      setActiveLanguage(firstLanguage);
    }
  }

  function chooseLanguage(index) {
    setStop(true);
    setIsLanguageChoosen(true);
    setActiveLanguage(index);
    localStorage.setItem('userLocale', LANGUAGES[index].locale);
  }

  return (
    <div className={cn(s.languages, className)}>
      <ul
        className={cn(s.languages__list)}
        onMouseEnter={handlePause}
        onMouseLeave={handlePause}>
        {LANGUAGES.map((item, index) => {
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
