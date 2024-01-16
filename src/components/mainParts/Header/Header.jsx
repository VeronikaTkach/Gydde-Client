import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { useEffect } from 'react';
import {
  modalWindowState,
  showAuthorizationWindow,
} from '../../../core/store/slices/modalWindowStateSlice';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { ButtonWithBorder } from '../../ui/buttons/Button';
import { NavigationLink } from '../../ui/Navlink';
import { Auth } from '../../Auth';
import s from './style.module.scss';

export function Header({ className }) {
  const dispatch = useDispatch();
  const { modalAuthorization } = useSelector(modalWindowState);
  const { staticTextHeader, staticTextStatusHeader } = useSelector(staticText);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.HEADER));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Header));
    };
  }, []);

  return (
    <>
      {staticTextStatusHeader === Status.Resolved && (
        <header className={cn(s.header, className)}>
          <nav className={cn(s.header__navigation, s.navigation)}>
            <ul className={cn(s.navigation__list)}>
              <li className={s.navigation__item}>
                <NavigationLink
                  className={s.navigation__link}
                  activeClassName={s.navigation__link_active}
                  to={'/'}>
                  <p className={s.navigation__title}>Gydde</p>
                </NavigationLink>
              </li>
            </ul>
          </nav>
          <div className={cn(s.header__auth, s.auth)}>
            {localStorage.authorization ? (
              <Link
                to={
                  localStorage.authorization === 'user'
                    ? '/account/leaderboard'
                    : 'admin/tasks'
                }
                className={cn(s.auth__button, s.auth__button_login)}>
                Profile
              </Link>
            ) : (
              <>
                <ButtonWithBorder
                  className={cn(s.auth__button, s.auth__button_login)}
                  onClick={() => dispatch(showAuthorizationWindow(true))}>
                  {staticTextHeader.buttonLogin}
                </ButtonWithBorder>
                {modalAuthorization && <Auth />}
              </>
            )}
          </div>
        </header>
      )}
    </>
  );
}
