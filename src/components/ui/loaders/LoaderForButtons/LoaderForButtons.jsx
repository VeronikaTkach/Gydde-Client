import s from './style.module.scss';
import cn from 'classnames';

export function LoaderForButtons() {
  return <div className={cn(s.loaderImg, 'iconLoader')}></div>;
}
