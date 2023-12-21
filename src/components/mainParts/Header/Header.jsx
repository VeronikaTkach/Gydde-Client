import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { showAuthorizationWindow } from '../../../core/store/slices/windowStateSlice';
import logo from '../../../assets/images/logo.png';
import { Button } from '../../ui/buttons/Button';
import { NavigationLink } from '../../ui/Navlink';
import { BorderBlock } from '../../ui/tags/BorderBlock';
import s from './style.module.scss';

const navigation = [
  { type: 'link', title: 'Quests', link: '/quests' },
  { type: 'link', title: 'Space', link: '/space' },
  { type: 'link', title: 'Web3', link: '/web3' },
  { type: 'link', title: 'Swap', link: '/swap' },
  { type: 'link', title: 'Bridge', link: '/bridge' },
  {
    type: 'menu',
    title: 'More ',
    submenu: [
      { type: 'link', title: 'FAQ', link: '/' },
      { type: 'link', title: 'How to connect a wallet?', link: '/' },
      { type: 'link', title: 'NEWS', link: '/' },
    ],
  },
];
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
            </NavigationLink>
          </li>
          {navigation.map((item, idx) =>
            item.type === 'link' ? (
              <li className={s.navigation__item} key={idx}>
                <NavigationLink
                  className={s.navigation__link}
                  activeClassName={s.navigation__link_active}
                  to={item.link}>
                  {item.title}
                </NavigationLink>
              </li>
            ) : (
              <li
                className={cn(
                  s.navigation__item,
                  s.navigation__link,
                  'icon_arrow_down_after'
                )}
                key={idx}>
                {item.title}
                <BorderBlock className={cn(s.navigation__submenu, s.submenu)}>
                  {item.submenu.map((item, idx) => (
                    <NavigationLink
                      className={cn(s.submenu__link, 'icon_arrow_towards')}
                      key={idx}
                      activeClassName={s.navigation__link_active}
                      to={item.link}>
                      {item.title}
                    </NavigationLink>
                  ))}
                </BorderBlock>
              </li>
            )
          )}
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
            <Button className={cn(s.auth__button, s.auth__button_wallet, 'icon_money')}>
              Wallet
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
