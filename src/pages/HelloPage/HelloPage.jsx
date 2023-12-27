import cn from 'classnames';
import s from './style.module.scss';
import helper from '../../assets/images/gydde_picture.png';
import usa from '../../assets/images/flagUsa.svg';
import indonesia from '../../assets/images/flagBi.svg';
import china from '../../assets/images/flagCn.svg';
import russia from '../../assets/images/flagRu.svg';
import spain from '../../assets/images/flagEs.svg';

const languages = [
  { lang: 'English', icon: usa },
  { lang: 'Bahasa Indonesia', icon: indonesia },
  { lang: '中文', icon: china },
  { lang: 'Español', icon: spain },
  { lang: 'Русский', icon: russia },
];

export function HelloPage() {
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
                <li className={cn(s.content__item)} key={item.lang}>
                  <img src={item.icon} alt='country flag' />
                  <p>{item.lang}</p>
                </li>
              );
            })}
          </ul>
          ;
        </div>
      </div>
      <div></div>
    </main>
  );
}
