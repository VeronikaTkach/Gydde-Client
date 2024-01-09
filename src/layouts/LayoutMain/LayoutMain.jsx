import { RoutesName } from '../../core/constants/Routes';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Header } from '../../components/mainParts/Header';
import { Auth } from '../../components/Auth';
import s from './style.module.scss';
import { modalWindowState } from '../../core/store/slices/modalWindowStateSlice';

export function LayoutMain() {
  // const { authorizationWindowState } = useSelector((state) => state.statePopupWindow);

  const { modalAuthorization } = useSelector(modalWindowState);
  console.log(modalAuthorization);
  const path = useLocation().pathname;

  return (
    <div
      className={cn(s.wrapper, { [s.wrapper__lights]: path === RoutesName.HelloPage })}>
      <div className={s.wrapper__container}>
        {/* {modalAuthorization && <Auth className={s.wrapper__authorization} />} */}
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
