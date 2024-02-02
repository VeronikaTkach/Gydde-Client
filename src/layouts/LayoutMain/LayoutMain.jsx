import cn from 'classnames';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/mainParts/Header';
import { RoutesName } from '../../core/constants/Routes';
import s from './style.module.scss';

export function LayoutMain() {
  const path = useLocation().pathname;

  return (
    <div
      className={cn(s.wrapper, {
        [s.wrapper__lights]: path === RoutesName.Root,
      })}>
      <div className={s.wrapper__container}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
