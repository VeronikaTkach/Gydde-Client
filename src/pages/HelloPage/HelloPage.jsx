import { useEffect, useState } from 'react';
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
  { lang: 'English', icon: usa },
  { lang: 'Bahasa Indonesia', icon: indonesia },
  { lang: '中文', icon: china },
  { lang: 'Русский', icon: russia },
  { lang: 'Español', icon: spain },
];

export function HelloPage() {
  const [clickedElement, setClickedElement] = useState('English');
  const [stop, setStop] = useState(false);
  const [intervalLang, setIntervalLang] = useState(null);
  function handleClick(element) {
    setClickedElement(element);
    setStop(true);
  }

  useEffect(() => {
    if (stop) {
      clearInterval(intervalLang);
    }
  }, [stop, intervalLang]);
  let i = 1;
  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    const interval = setInterval(updateLang, 3000);

    function updateLang() {
      setClickedElement(languages[i].lang);
      i++;
      if (i === languages.length) {
        // eslint-disable-next-line no-magic-numbers
        i = 0;
      }
    }
    setIntervalLang(interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={cn(s.content)}>
      <div className={cn(s.content__main)}>
        <div className={cn(s.content__img)}>
          <img src={helper} alt='helper picture' />
        </div>
        <div className={cn(s.content__langs)}>
          <ul className={cn(s.content__list)}>
            {languages.map((item) => {
              return (
                <li
                  className={
                    clickedElement === item.lang
                      ? s.content__item_active
                      : s.content__item
                  }
                  key={item.lang}
                  onClick={() => handleClick(item.lang)}>
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
