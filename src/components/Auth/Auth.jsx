import cn from 'classnames';
import { Button } from '../ui/buttons/Button';
import s from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { modalWindowState } from '../../core/store/slices/modalWindowStateSlice';
import {
  allAuthorization,
  setCurrentAuthorizationType,
} from '../../core/store/slices/authorizationSlice';
import { AuthorizationType } from '../../core/constants/AuthorizationType';
import { MetamaskView } from './Metamask';
import { AllAuthorizaitions } from './AllAuthorizaitions';
import { FormAuthorization } from './forms';
import ModalWithClose from '../ui/ModalWithClose/ModalWithClose';

export function Auth() {
  const dispatch = useDispatch();
  const { modalAuthorization } = useSelector(modalWindowState);
  const { currentAuthorizationType } = useSelector(allAuthorization);

  //TODO: нужно переработать компонент, чтобы было 1 модальное окно и всё остальное внутри менялось от выбранного 'AuthorizationType', вынести кнопки навигации в общий компонент, чтобы не дублировать в других компонентах
  return (
    <>
      {modalAuthorization && (
        <ModalWithClose className={s.auth}>
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
                <div className={s.auth__title}>Log in to Gydde</div>
              </div>
            </div>
          )}
          {currentAuthorizationType === AuthorizationType.NotСhosen && (
            <AllAuthorizaitions />
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
