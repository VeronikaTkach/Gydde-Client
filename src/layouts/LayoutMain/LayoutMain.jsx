import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from '../../components/mainParts/Header';
import { Auth } from '../../components/Auth';
import s from './style.module.scss';

export function LayoutMain() {
  const { authorizationWindowState } = useSelector((state) => state.statePopupWindow);

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__container}>
        {authorizationWindowState && <Auth className={s.wrapper__authorization} />}
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
