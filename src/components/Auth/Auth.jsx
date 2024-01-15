import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  modalWindowState,
  showAuthorizationWindow,
} from '../../core/store/slices/modalWindowStateSlice';
import {
  allAuthorization,
  setCurrentAuthorizationType,
} from '../../core/store/slices/mailAuthorizationSlice';
import { setMetamaskConnectionStatus } from '../../core/store/slices/metamaskAuthorizationSlice';
import { MetamaskConnectionStatus } from '../../core/constants/Status';
import { AuthorizationType } from '../../core/constants/AuthorizationType';
import { getStaticModalsText } from '../../core/store/staticText/modalsThunk';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { Button } from '../ui/buttons/Button';
import { withClose } from '../ui/modals/Modal/hoc/withClose';
import Modal from '../ui/modals/Modal/Modal';
import { MetamaskView } from './Metamask';
import { AllAuthorizaitions } from './AllAuthorizaitions';
import { FormAuthorization } from './forms';
import s from './style.module.scss';
import { withBorderShadow } from '../ui/modals/Modal/hoc/withBorderShadow';

export function Auth() {
  const dispatch = useDispatch();
  const { modalAuthorization } = useSelector(modalWindowState);
  const { currentAuthorizationType } = useSelector(allAuthorization);
  const { modalsText } = useSelector((state) => state.staticModalsText);

  useEffect(() => {
    dispatch(getStaticModalsText.modals(TEXT_KEYS.AUTH));
  }, []);

  const onClose = () => {
    dispatch(showAuthorizationWindow(false));
    dispatch(setCurrentAuthorizationType(AuthorizationType.NotСhosen));
    if (currentAuthorizationType === AuthorizationType.AuthMetaMask) {
      dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.Connecting));
    }
  };

  const ModalWithClose = withClose(withBorderShadow(Modal), onClose);

  return (
    <>
      {modalAuthorization && (
        <ModalWithClose onClose={onClose}>
          {(currentAuthorizationType === AuthorizationType.NotСhosen ||
            currentAuthorizationType === AuthorizationType.AuthMail) && (
            <div className={s.auth__header}>
              <div className={s.auth__header_row}>
                {currentAuthorizationType === AuthorizationType.AuthMail && (
                  <Button
                    className={cn(s.auth__back, 'iconArrowBack')}
                    onClick={() => {
                      dispatch(setCurrentAuthorizationType(AuthorizationType.NotСhosen));
                    }}></Button>
                )}
                <div className={s.auth__title}>{modalsText.title}</div>
              </div>
            </div>
          )}
          {currentAuthorizationType === AuthorizationType.NotСhosen && (
            <AllAuthorizaitions modalsText={modalsText} />
          )}
          {currentAuthorizationType === AuthorizationType.AuthMail && (
            <FormAuthorization />
          )}
          {currentAuthorizationType === AuthorizationType.AuthMetaMask && (
            <MetamaskView />
          )}
        </ModalWithClose>
      )}
    </>
  );
}
