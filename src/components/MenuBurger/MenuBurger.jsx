import cn from 'classnames';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import geo from '../../assets/images/menu/geo.png';
import globe from '../../assets/images/menu/globe.png';
import people from '../../assets/images/menu/people.png';
import reward from '../../assets/images/menu/reward.png';
import settings from '../../assets/images/menu/settings.png';
import wallet from '../../assets/images/menu/wallet.png';
import menuImg from '../../assets/images/menuImg.png';
import { PageName } from '../../core/constants/PageNames';
import { RoutesName } from '../../core/constants/Routes';
import { Status } from '../../core/constants/Status';
import { LANGUAGES } from '../../core/constants/languages';
import { STATIC_TEXT } from '../../core/constants/staticText';
import { language } from '../../core/store/language/slice';
import { languageRequest } from '../../core/store/language/thunk';
import s from './style.module.scss';

const notificationCount = 1;
const notificationNull = 0;

export function MenuBurger({ className, staticText, statusText }) {
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

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
console.log(statusText,staticText?.menuGuides)
  useEffect(() => {
    if (statusText === Status.Resolved || statusText === Status.Rejected) {
      setMenuLink([
        {
          title: staticText?.menuGuides || STATIC_TEXT[PageName.Header].menuGuides,
          icon: geo,
          notification: notificationCount,
          to: RoutesName.Root,
        },
        {
          title:
            staticText?.menuReferralRewards ||
            STATIC_TEXT[PageName.Header].menuReferralRewards,
          icon: people,
          notification: notificationNull,
          to: RoutesName.ProfileReferral,
        },
        {
          title:
            staticText?.menuGuidesRewards ||
            STATIC_TEXT[PageName.Header].menuGuidesRewards,
          icon: reward,
          notification: notificationCount,
          to: RoutesName.ProfileGuides,
        },
        {
          title: staticText?.menuWallet || STATIC_TEXT[PageName.Header].menuWallet,
          icon: wallet,
          notification: notificationNull,
          to: RoutesName.ProfileWallet,
        },
        {
          title:
            staticText?.menuAccountSettings ||
            STATIC_TEXT[PageName.Header].menuAccountSettings,
          icon: settings,
          to: RoutesName.ProfileSettings,
        },
      ]);
    }
  }, [statusText]);

  return (
    <div ref={menuRef} className={cn(s.menu, className)}>
      <div className={cn(s.menu__img, className)} onClick={toggleMenu}>
        <img src={menuImg} alt={'menu image'} />
      </div>
      {isMenuOpen && (
        <ul className={cn(s.menu__list)}>
          {menuLink.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <Link className={cn(s.menu__item, s.item, s.item__row)} to={item.to}>
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
