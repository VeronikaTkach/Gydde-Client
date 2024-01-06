import { LanguageList } from '../../components/LanguageList';
import { Subtitle } from '../../components/Subtitle';
import cn from 'classnames';
import s from './style.module.scss';
import helper from '../../assets/images/gydde_picture.png';

export function HelloPage() {
  return (
    <main className={cn(s.content)}>
      <div className={cn(s.content__main)}>
        <div className={cn(s.content__img)}>
          <img src={helper} alt='helper picture' />
        </div>
        <LanguageList />
      </div>
      <Subtitle />
    </main>
  );
}
