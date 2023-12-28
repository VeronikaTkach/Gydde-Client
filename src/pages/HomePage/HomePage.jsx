import cn from 'classnames';
import s from './style.module.scss';
import { Twitter } from '../../components/Auth/Twitter';

export function HomePage() {
  return (
    <main className={cn(s.content)}>
      <div className={cn(s.content__mainScreen, s.mainScreen)}>
        <Twitter />
      </div>
    </main>
  );
}
