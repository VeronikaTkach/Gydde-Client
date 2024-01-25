import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cn from 'classnames';
import { showAuthorizationWindow } from '../../core/store/slices/modalWindowStateSlice';
import {
  allAuthorization,
  setCurrentAuthorizationType,
} from '../../core/store/auth/slice';
import { setMetamaskConnectionStatus } from '../../core/store/slices/metamaskAuthorizationSlice';
import { MetamaskConnectionStatus, Status } from '../../core/constants/Status';
import { AuthorizationType } from '../../core/constants/AuthorizationType';
import { getStaticText } from '../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { PageName } from '../../core/constants/PageNames';
import { removeUnusedStaticText, staticText } from '../../core/store/staticText/slice';
import { Button } from '../ui/buttons/Button';
import ModalWithClose from '../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../ui/modals/Modal/ModalWithBorder';
import { MetamaskView } from './Metamask';
import { AllAuthorizaitions } from './AllAuthorizaitions';
import { Email } from './Email';
import s from './style.module.scss';

export function Auth() {
  const dispatch = useDispatch();
  const { currentAuthorizationType } = useSelector(allAuthorization);
  const { staticTextAuth, staticTextStatusAuth } = useSelector(staticText);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.AUTH));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Auth));
    };
  }, []);

  const onClose = () => {
    if (currentAuthorizationType === AuthorizationType.AuthMetaMask) {
      dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.Connecting));
    }
    dispatch(setCurrentAuthorizationType(AuthorizationType.NotСhosen));
    dispatch(showAuthorizationWindow(false));
  };

  return (
    <ModalWithClose Component={ModalWithBorderShadow} onClose={onClose}>
      {staticTextStatusAuth === Status.Resolved && (
        <>
          {(currentAuthorizationType === AuthorizationType.NotСhosen ||
            currentAuthorizationType === AuthorizationType.AuthMail) && (
            <AuthHeader
              staticTextAuth={staticTextAuth}
              currentAuthorizationType={currentAuthorizationType}
            />
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

export function AuthHeader({ currentAuthorizationType, staticTextAuth }) {
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
              }}></Button>
          )}
          <div className={s.auth__title}>{staticTextAuth.title}</div>
        </div>
      </div>
    </>
  );
}
