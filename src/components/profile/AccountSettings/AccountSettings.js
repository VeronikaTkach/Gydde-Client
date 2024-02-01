import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import mascot from '../../../assets/images/mascot/mascotGood.png';
import eng from '../../../assets/images/flag/flagEng.png';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { PageName } from '../../../core/constants/PageNames';
import { LANGUAGES } from '../../../core/constants/languages';
import { languageRequest } from '../../../core/store/language/thunk';
import { language } from '../../../core/store/language/slice';
import {
  modalWindowState,
  showChangePasswordWindow,
  showEmailConnectWindow,
  showSetPasswordWindow,
  showUsernameEditWindow,
} from '../../../core/store/slices/modalWindowStateSlice';
import {
  EmailConnectPopup,
  UsernameEditPopup,
  SetPasswordPopup,
  ChangePasswordPopup,
} from './popups';

export function AccountSettings({
  className,
  staticTextProfileSettings,
  staticTextStatusProfileSettings,
}) {
  const { modalEmailConnect, modalUsernameEdit, modalSetPassword, modalChangePassword } =
    useSelector(modalWindowState);
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector(language);
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

  return (
    <>
      <div className={cn(s.settings, className)}>
        <div className={cn(s.settings__mascot)}>
          <img className={cn(s.settings__mascot_img)} src={mascot} alt={'Gydde'} />
        </div>
        <div className={cn(s.settings__info, s.info)}>
          <div className={cn(s.info__header, s.header)}>
            <div className={cn(s.header__userInfo)}>
              <div className={cn(s.header__userName)}>
                {staticTextProfileSettings?.userNameTitle ||
                  STATIC_TEXT[PageName.ProfileSettings].userNameTitle}
              </div>
              <div
                className={cn(s.header__btnEdit, 'iconEdit')}
                onClick={() => dispatch(showUsernameEditWindow(true))}></div>
              {modalUsernameEdit && (
                <UsernameEditPopup
                  staticTextProfileSettings={staticTextProfileSettings}
                  staticTextStatusProfileSettings={staticTextStatusProfileSettings}
                />
              )}
            </div>
            <div ref={menuRef} className={s.container__language}>
              <Button
                className={cn(s.header__langInfo, 'iconDropdownArrow')}
                onClick={toggleMenu}>
                {currentLanguage && (
                  <div className={cn(s.header__language)}>{currentLanguage}</div>
                )}
                <img
                  className={cn(s.header__language_img)}
                  src={eng}
                  alt={'Image of current language'}
                />
              </Button>
              {isMenuOpen && (
                <div className={s.menuLang}>
                  <ul className={cn(s.menuLang__sublist)}>
                    {LANGUAGES.map((item, index) => (
                      <li
                        className={cn(s.menuLang__item)}
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
                </div>
              )}
            </div>
          </div>
          <div className={cn(s.info__connections, s.connections)}>
            <div className={cn(s.connections__title)}>
              {staticTextProfileSettings?.socialTitle ||
                STATIC_TEXT[PageName.ProfileSettings].socialTitle}
            </div>
            <div className={cn(s.connections__socials)}>
              <Button
                className={cn(
                  s.connections__button_mail,
                  s.connections__button,
                  'iconEmail'
                )}
                onClick={() => dispatch(showEmailConnectWindow(true))}>
                {staticTextProfileSettings?.connectMail ||
                  STATIC_TEXT[PageName.ProfileSettings].connectMail}
              </Button>
              {modalEmailConnect && (
                <EmailConnectPopup
                  staticTextProfileSettings={staticTextProfileSettings}
                  staticTextStatusProfileSettings={staticTextStatusProfileSettings}
                />
              )}
              <Button
                className={cn(s.connections__button_pass, s.connections__button)}
                onClick={() => dispatch(showSetPasswordWindow(true))}>
                {staticTextProfileSettings?.setPass ||
                  STATIC_TEXT[PageName.ProfileSettings].setPass}
              </Button>
              {modalSetPassword && (
                <SetPasswordPopup
                  staticTextProfileSettings={staticTextProfileSettings}
                  staticTextStatusProfileSettings={staticTextStatusProfileSettings}
                />
              )}
              <Button
                className={cn(s.connections__button_pass, s.connections__button)}
                onClick={() => dispatch(showChangePasswordWindow(true))}>
                {staticTextProfileSettings?.changePass ||
                  STATIC_TEXT[PageName.ProfileSettings].changePass}
              </Button>
              {modalChangePassword && (
                <ChangePasswordPopup
                  staticTextProfileSettings={staticTextProfileSettings}
                  staticTextStatusProfileSettings={staticTextStatusProfileSettings}
                />
              )}
            </div>
            <div className={cn(s.connections__socials)}>
              <Button
                className={cn(
                  s.connections__button_twitter,
                  s.connections__button,
                  'iconTwitter'
                )}>
                {staticTextProfileSettings?.connectTwitter ||
                  STATIC_TEXT[PageName.ProfileSettings].connectTwitter}
              </Button>
            </div>
          </div>
          <Button className={cn(s.info__logout, 'iconLogout_after')}>
            {staticTextProfileSettings?.logout ||
              STATIC_TEXT[PageName.ProfileSettings].logout}
          </Button>
        </div>
      </div>
    </>
  );
}
