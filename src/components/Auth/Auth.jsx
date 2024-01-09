import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import IconE from '../../assets/images/email.svg';
import IconM from '../../assets/images/metamask.svg';
import { Button } from '../ui/buttons/Button';
import s from './style.module.scss';
import { RoutesName } from '../../core/constants/Routes';
import { Google } from './Google';
import { Twitter } from './Twitter';
import Modal from '../ui/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  modalWindowState,
  showAuthorizationWindow,
} from '../../core/store/slices/modalWindowStateSlice';
import { useEffect } from 'react';
import {
  allAuthorization,
  setCurrentAuthorizationType,
} from '../../core/store/slices/authorizationSlice';
import { AuthorizationType } from '../../core/constants/AuthorizationType';
import { MailAuthorization } from './MailAuthorization';
import { MetamaskConnection, MetamaskView } from './Metamask';

export function Auth() {
  const dispatch = useDispatch();
  const { modalAuthorization } = useSelector(modalWindowState);
  const { currentAuthorizationType } = useSelector(allAuthorization);

  switch (currentAuthorizationType) {
    case AuthorizationType.AuthMail:
      return <MailAuthorization />;

    case AuthorizationType.AuthMetaMask:
      return <MetamaskView />;
    default:
      break;
  }

  //todo нужно переработать компонент, чтобы было 1 модальное окно и всё остальное внутри менялось от выбранного 'AuthorizationType', вынести кнопки навигации в общий компонент, чтобы не дублировать в других компонентах
  return (
    <>
      {modalAuthorization && (
        <Modal className={s.auth}>
          <div className={s.auth__container}>
            <div className={s.auth__header}>
              <div className={s.auth__title}>Log in to Gydde</div>
              <Button
                className={cn(s.auth__close, 'iconClose')}
                onClick={() => {
                  dispatch(showAuthorizationWindow(false));
                  dispatch(setCurrentAuthorizationType(AuthorizationType.NotСhosen));
                }}></Button>
            </div>
            <div className={s.auth__body}>
              <div>
                <div className={cn(s.socials__title)}>Log in with social account</div>
                <div className={cn(s.socials__body)}>
                  <Twitter className={cn(s.social, s.social_twitter)} />
                  <Google className={cn(s.social, s.social_google)} />
                  <Button
                    className={cn(s.social, s.social_email)}
                    onClick={() =>
                      dispatch(setCurrentAuthorizationType(AuthorizationType.AuthMail))
                    }>
                    {/*todo alt!*/}
                    <img className={s.social__img} src={IconE} />
                    <div className={s.social__text}>Email</div>
                  </Button>
                </div>
              </div>
              <div>
                <div className={cn(s.socials__title)}>Log in with wallet</div>
                <div className={cn(s.socials__body)}>
                  <Button
                    className={cn(s.social, s.social_metamask)}
                    onClick={() =>
                      dispatch(
                        setCurrentAuthorizationType(AuthorizationType.AuthMetaMask)
                      )
                    }>
                    {/*todo alt!*/}
                    <img className={s.social__img} src={IconM} />
                    <div className={s.social__text}>Metamask</div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
