import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import chat from '../../../assets/images/chat.png';
import { PageName } from '../../../core/constants/PageNames';
import { RoutesName } from '../../../core/constants/Routes';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { useStaticText } from '../../../core/hooks/useStaticText';
import { allAuth } from '../../../core/store/auth/slice';
import {
  modalWindowState,
  showAuthorizationWindow,
  showQuestWindow,
} from '../../../core/store/slices/modalWindowStateSlice';
import { removeUnusedStaticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { Auth } from '../../Auth';
import { MenuBurger } from '../../MenuBurger';
import { QuestWindow } from '../../quests/QuestWindow';
import { NavigationLink } from '../../ui/Navlink';
import { Button, ButtonWithBorder } from '../../ui/buttons/Button';
import s from './style.module.scss';

export function Header({ className }) {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.Header);
  const { modalAuthorization, modalQuest } = useSelector(modalWindowState);
  const { token } = useSelector(allAuth);
  // console.log(token);
  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.HEADER));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Header));
    };
  }, []);
  // localStorage.setItem(LocalStorageItems.AuthorizationToken,'token')
  // localStorage.clear()

  return (
    <header className={cn(s.header, className)}>
      {modalQuest && <QuestWindow />}
      <QuestWindow />
      <NavigationLink
        className={s.header__logo}
        activeClassName={s.navigation__link_active}
        to={RoutesName.Root}>
        <div className={s.header__logo_img}></div>
      </NavigationLink>

      <div className={cn(s.header__option, s.option)}>
        {token ? (
          <>
            <Button
              className={s.option__chat}
              onClick={() => dispatch(showQuestWindow(true))}>
              <img src={chat} alt={'chat icon'} />
            </Button>
            <MenuBurger className={s.option__menu} text={text} />
          </>
        ) : (
          <>
            <ButtonWithBorder
              className={cn(s.option__login)}
              onClick={() => dispatch(showAuthorizationWindow(true))}>
              {text?.buttonLogin || STATIC_TEXT[PageName.Header].buttonLogin}
            </ButtonWithBorder>
            {modalAuthorization && <Auth />}
          </>
        )}
      </div>
    </header>
  );
}
