import { useEffect, useState } from 'react';
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

export function MenuBurger({ className }) {
  // const [activeLanguage, setActiveLanguage] = useState('');
  const [menuLink, setMenuLink] = useState(false);

  useEffect(() => {
    setMenuLink([
      {
        title: STATIC_TEXT[PageName.Header].menuGuides,
        icon: geo,
        to: RoutesName.Root,
      },
      {
        title: STATIC_TEXT[PageName.Header].menuReferralRewards,
        icon: people,
        to: RoutesName.ProfileReferral,
      },
      {
        title: STATIC_TEXT[PageName.Header].menuGuidesRewards,
        icon: reward,
        to: RoutesName.ProfileGuides,
      },
      {
        title: STATIC_TEXT[PageName.Header].menuWallet,
        icon: wallet,
        to: RoutesName.ProfileWallet,
      },
      {
        title: STATIC_TEXT[PageName.Header].menuAccountSettings,
        icon: settings,
        to: RoutesName.ProfileSettings,
      },
    ]);
  }, []);

  return (
    <div className={cn(s.menu, className)}>
      <div className={cn(s.menu__img, className)}>
        <img src={menuImg} alt={'menu image'} />
      </div>

      {menuLink && (
        <ul className={cn(s.menu__list)}>
          {menuLink.map((item, index) => {
            return (
              <li
                key={index}
                // onClick={() => chooseLanguage(index)}
              >
                <Link className={s.menu__item} to={item.to}>
                  <img className={s.menu__icon} src={item.icon} alt='country flag' />
                  <div className={s.menu__title}>{item.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
