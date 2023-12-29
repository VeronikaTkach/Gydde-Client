import { useEffect, useRef, useState } from 'react';
import { Button } from '../../components/ui/buttons/Button/Button';
import cn from 'classnames';
import s from './style.module.scss';
import helper from '../../assets/images/gydde_picture.png';
import usa from '../../assets/images/flagUsa.svg';
import indonesia from '../../assets/images/flagBi.svg';
import china from '../../assets/images/flagCn.svg';
import russia from '../../assets/images/flagRu.svg';
import spain from '../../assets/images/flagEs.svg';
import speaker from '../../assets/images/speaker.svg';
import hand from '../../assets/images/hand.svg';
import arrow from '../../assets/images/subtitleArrow.svg';

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

export function HelloPage() {
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
    <main className={cn(s.content)}>
      <div className={cn(s.content__main)}>
        <div className={cn(s.content__img)}>
          <img src={helper} alt='helper picture' />
        </div>
        <div className={cn(s.content__langs)}>
          <ul
            className={cn(s.content__list)}
            onMouseEnter={handlePause}
            onMouseLeave={handlePause}>
            {languages.map((item, index) => {
              return (
                <li
                  className={
                    activeLanguage === index ? s.content__item_active : s.content__item
                  }
                  key={item.lang}
                  onClick={() => chooseLanguage(index)}>
                  <img src={item.icon} alt='country flag' />
                  <p>{item.lang}</p>
                </li>
              );
            })}
          </ul>
          ;
        </div>
      </div>
      <div className={cn(s.content__subtitles)}>
        <div className={cn(s.subtitles__text)}>
          <Button className={cn(s.subtitles__speaker)}>
            <img src={speaker} alt='speaker' />
          </Button>
          <h2 className={cn(s.subtitles__greeting)}>
            Hello! I’m <span>Gydde!</span>
          </h2>
        </div>
        <div className={cn(s.subtitles__action)}>
          <Button className={cn(s.subtitles__answer)}>
            Hi, Gydde!
            <img src={hand} alt='hand' />
          </Button>
          <img className={cn(s.subtitles__arrow)} src={arrow} alt='arrow' />
        </div>
      </div>
    </main>
  );
}
