import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Outlet, useLocation } from 'react-router-dom';
import { RoutesName } from '../../core/constants/Routes';
import { Header } from '../../components/mainParts/Header';
import s from './style.module.scss';

const staticHeight = 1080;
const staticWidth = 1600;

export function LayoutMain() {
  const path = useLocation().pathname;
  //TODO: вынести в хук
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [zoomValue, setZoomValue] = useState(height / staticHeight);
  const maxAvailableWidth =
    width / zoomValue > staticWidth ? staticWidth : width / zoomValue;

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  function resize() {
    if (window.innerHeight !== height) {
      setHeight(window.innerHeight);
      if (!(window.innerWidth / (window.innerHeight / staticHeight) < staticWidth)) {
        setZoomValue(window.innerHeight / staticHeight);
      }
    }
    if (window.innerWidth !== width) {
      setWidth(window.innerWidth);
      if (window.innerWidth / (window.innerHeight / staticHeight) < staticWidth) {
        setZoomValue(window.innerWidth / staticWidth);
      }
    }
  }

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
