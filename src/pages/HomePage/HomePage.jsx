import cn from 'classnames';
import s from './style.module.scss';

export function HomePage() {
  return (
    <main className={cn(s.content)}>
      <div className={cn(s.content__mainScreen, s.mainScreen)}></div>
    </main>
  );
}
