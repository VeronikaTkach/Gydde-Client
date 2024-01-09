import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { showAuthorizationWindow } from '../../../core/store/slices/modalWindowStateSlice';
import logo from '../../../assets/images/logo.png';
import { Button } from '../../ui/buttons/Button';
import { NavigationLink } from '../../ui/Navlink';
import s from './style.module.scss';
import { Auth } from '../../Auth';

export function Header({ className }) {
  const dispatch = useDispatch();

  return (
    <header className={cn(s.header, className)}>
      <nav className={cn(s.header__navigation, s.navigation)}>
        <ul className={cn(s.navigation__list)}>
          <li className={s.navigation__item}>
            <NavigationLink
              className={s.navigation__link}
              activeClassName={s.navigation__link_active}
              to={'/'}>
              <img src={logo} alt='logo and home link' />
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
            <Button
              className={cn(s.auth__button, s.auth__button_login)}
              onClick={() => dispatch(showAuthorizationWindow(true))}>
              Log In
            </Button>
            <Auth />
          </>
        )}
      </div>
    </header>
  );
}
