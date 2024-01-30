import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import menuImg from '../../assets/images/menuImg.png';
import { STATIC_TEXT } from '../../core/constants/staticText';
import { PageName } from '../../core/constants/PageNames';
import { RoutesName } from '../../core/constants/Routes';
import geo from '../../assets/images/menu/geo.png';
import wallet from '../../assets/images/menu/wallet.png';
import people from '../../assets/images/menu/people.png';
import reward from '../../assets/images/menu/reward.png';
import settings from '../../assets/images/menu/settings.png';
import globe from '../../assets/images/menu/globe.png';
import { Link } from 'react-router-dom';
import { LANGUAGES } from '../../core/constants/languages';
import { useDispatch, useSelector } from 'react-redux';
import { languageRequest } from '../../core/store/language/thunk';
import { language } from '../../core/store/language/slice';

export function MenuBurger({ className }) {
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector(language);
  const [menuLink, setMenuLink] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // console.log(currentLanguage);
  const notificationCount = 1;
  const notificationNull = 0;

  useEffect(() => {
    setMenuLink([
      {
        title: STATIC_TEXT[PageName.Header].menuGuides,
        icon: geo,
        notification: notificationCount,
        to: RoutesName.Root,
      },
      {
        title: STATIC_TEXT[PageName.Header].menuReferralRewards,
        icon: people,
        notification: notificationNull,
        to: RoutesName.ProfileReferral,
      },
      {
        title: STATIC_TEXT[PageName.Header].menuGuidesRewards,
        icon: reward,
        notification: notificationCount,
        to: RoutesName.ProfileGuides,
      },
      {
        title: STATIC_TEXT[PageName.Header].menuWallet,
        icon: wallet,
        notification: notificationNull,
        to: RoutesName.ProfileWallet,
      },
      {
        title: STATIC_TEXT[PageName.Header].menuAccountSettings,
        icon: settings,
        to: RoutesName.ProfileSettings,
      },
    ]);

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={cn(s.menu, className)}>
      <div className={cn(s.menu__img, className)} onClick={toggleMenu}>
        <img src={menuImg} alt={'menu image'} />
      </div>
      {isMenuOpen && (
        <ul className={cn(s.menu__list)}>
          {menuLink.map((item, index) => (
            <li key={index}>
              <Link className={cn(s.menu__item, s.item)} to={item.to}>
                <div className={s.menu__item_main}>
                  <div className={s.item__icon}>
                    <img src={item.icon} alt='menu icon' />
                  </div>
                  <div className={s.item__title}>{item.title}</div>
                </div>
                {item.notification > 0 && (
                  <div className={s.item__notification}>{item.notification}</div>
                )}
              </Link>
            </li>
          ))}
          <li className={cn(s.menu__submenu)}>
            <div className={cn(s.menu__item, s.item)}>
              <img className={s.item__icon} src={globe} alt='menu icon' />
              {currentLanguage && (
                <div className={cn(s.item__title, 'iconDropdownArrow_after')}>
                  {currentLanguage}
                </div>
              )}
            </div>
            <ul className={cn(s.menu__sublist)}>
              {LANGUAGES.map((item, index) => (
                <li
                  className={cn(s.menu__item, s.item, s.item_subitem)}
                  key={index}
                  onClick={() => dispatch(languageRequest.change())}>
                  <img
                    className={cn(s.item__icon, s.item__icon_flag)}
                    src={item.icon}
                    alt={'language flag'}
                  />
                  <div className={s.item__title}>{item.lang}</div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
}