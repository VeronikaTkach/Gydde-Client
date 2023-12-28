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
  { lang: 'English', icon: usa },
  { lang: 'Bahasa Indonesia', icon: indonesia },
  { lang: '中文', icon: china },
  { lang: 'Русский', icon: russia },
  { lang: 'Español', icon: spain },
];
const firstLanguage = 0;
const step = 1;

export function HelloPage() {
  const [clickedElement, setClickedElement] = useState(firstLanguage);
  const [stop, setStop] = useState(false);
  const timeRef = useRef(null);

  useEffect(() => {
    clearInterval(timeRef.current);

    if (stop) {
      return;
    }

    const timeInterval = 3000;
    timeRef.current = setInterval(changeLanguage, timeInterval);

    return () => clearInterval(timeRef.current);
  }, [clickedElement, stop]);

  function changeLanguage() {
    if (clickedElement < languages.length - step) {
      setClickedElement((prev) => ++prev);
    } else {
      setClickedElement(firstLanguage);
    }
  }

  function handleClick(index) {
    setClickedElement(index);
    setStop(true);
  }

  return (
    <main className={cn(s.content)}>
      <div className={cn(s.content__main)}>
        <div className={cn(s.content__img)}>
          <img src={helper} alt='helper picture' />
        </div>
        <div className={cn(s.content__langs)}>
          <ul className={cn(s.content__list)}>
            {languages.map((item, index) => {
              return (
                <li
                  className={
                    clickedElement === index ? s.content__item_active : s.content__item
                  }
                  key={item.lang}
                  onClick={() => handleClick(index)}>
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
