import { useNavigate } from 'react-router-dom';
import { FormAuthorization } from './forms';
import { Button } from '../ui/buttons/Button';
import s from './style.module.scss';
import cn from 'classnames';
import { RoutesName } from '../../core/constants/Routes';
import Modal from '../ui/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  modalWindowState,
  showAuthorizationWindow,
} from '../../core/store/slices/modalWindowStateSlice';
import {
  allAuthorization,
  setCurrentAuthorizationType,
} from '../../core/store/slices/authorizationSlice';
import { AuthorizationType } from '../../core/constants/AuthorizationType';

export function MailAuthorization() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Modal className={s.auth}>
        <div className={s.auth__container}>
          <div className={s.auth__wrapper}>
            <div className={s.auth__header}>
              <div className={s.auth__header_row}>
                <Button
                  className={cn(s.auth__back, 'iconArrowBack')}
                  onClick={() => {
                    dispatch(setCurrentAuthorizationType(AuthorizationType.NotСhosen));
                  }}></Button>
                <div className={s.auth__title}>Log in to Gydde</div>
              </div>
              <Button
                className={cn(s.auth__close, 'iconClose')}
                onClick={() => {
                  dispatch(showAuthorizationWindow(false));
                  dispatch(setCurrentAuthorizationType(AuthorizationType.NotСhosen));
                }}></Button>
            </div>
            <FormAuthorization />
          </div>
        </div>
      </Modal>
    </>
  );
}
