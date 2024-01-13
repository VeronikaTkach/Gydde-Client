import cn from 'classnames';
import { Outlet, useLocation } from 'react-router-dom';
import { RoutesName } from '../../core/constants/Routes';
import { Header } from '../../components/mainParts/Header';
import s from './style.module.scss';
import { useResize } from '../../core/hooks/resize';

const staticHeight = 1080;
const staticWidth = 1600;

export function LayoutMain() {
  const path = useLocation().pathname;
  const { height, zoomValue, maxAvailableWidth } = useResize(staticWidth, staticHeight);

  return (
    <div
      className={cn(s.wrapper, {
        [s.wrapper__lights]: path === RoutesName.HelloPage,
      })}>
      <div
        className={s.wrapper__container}
        style={{
          transform: `scale(${zoomValue})`,
          maxHeight: `${height}px`,
          minWidth: `${maxAvailableWidth}px`,
        }}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
