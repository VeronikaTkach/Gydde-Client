import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorizationType } from '../../core/constants/AuthorizationType';
import { PageName } from '../../core/constants/PageNames';
import { MetamaskConnectionStatus } from '../../core/constants/Status';
import { STATIC_TEXT } from '../../core/constants/staticText';
import { useRequestStaticText } from '../../core/hooks/useRequestStaticText';
import { allAuth, setCurrentAuthorizationType } from '../../core/store/auth/slice';
import { setMetamaskConnectionStatus } from '../../core/store/metamask/slice';
import { showAuthorizationWindow } from '../../core/store/slices/modalWindowStateSlice';
import { Button } from '../ui/buttons/Button';
import { ModalWithClose, ModalWithBorderShadow } from '../ui/modals/windows';
import { AllAuthorizaitions } from './AllAuthorizaitions';
import { Email } from './Email/Email';
import { MetamaskView } from './Metamask';
import s from './style.module.scss';

export function Auth() {
  const dispatch = useDispatch();
  const { text } = useRequestStaticText(PageName.Auth);
  const { currentAuthorizationType } = useSelector(allAuth);

  const onClose = () => {
    if (currentAuthorizationType === AuthorizationType.AuthMetaMask) {
      dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.Connecting));
    }
    dispatch(setCurrentAuthorizationType(AuthorizationType.NotСhosen));
    dispatch(showAuthorizationWindow(false));
  };

  return (
    <ModalWithClose Component={ModalWithBorderShadow} onClose={onClose}>
      {text && (
        <>
          {(currentAuthorizationType === AuthorizationType.NotСhosen ||
            currentAuthorizationType === AuthorizationType.AuthMail) && (
            <AuthHeader text={text} currentAuthorizationType={currentAuthorizationType} />
          )}
          {currentAuthorizationType === AuthorizationType.NotСhosen && (
            <AllAuthorizaitions />
          )}
          {currentAuthorizationType === AuthorizationType.AuthMail && <Email />}
          {currentAuthorizationType === AuthorizationType.AuthMetaMask && (
            <MetamaskView />
          )}
        </>
      )}
    </ModalWithClose>
  );
}

export function AuthHeader({ currentAuthorizationType, text }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.auth__header}>
        <div className={s.auth__header_row}>
          {currentAuthorizationType === AuthorizationType.AuthMail && (
            <Button
              className={cn(s.auth__back, 'iconArrowBack')}
              onClick={() => {
                dispatch(setCurrentAuthorizationType(AuthorizationType.NotСhosen));
              }}
            />
          )}
          <div className={s.auth__title}>
            {text.title || STATIC_TEXT[PageName.Auth].title}
          </div>
        </div>
      </div>
    </>
  );
}
