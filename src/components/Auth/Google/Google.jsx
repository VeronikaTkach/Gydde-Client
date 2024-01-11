import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { setWindowOptions } from '../../../core/helpers/forWindow';
import { LocalStorageItems } from '../../../core/constants/LocalStorageItems';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';
import { useDispatch } from 'react-redux';
import { showAuthorizationWindow } from '../../../core/store/slices/modalWindowStateSlice';

export function Google({ className }) {
  const dispatch = useDispatch();
  const [isAuthorizationDone, setIsAuthorizationDone] = useState(false);
  const intervalId = useRef(null);
  const timeInterval = 300;

  useEffect(() => {
    if (isAuthorizationDone) {
      dispatch(showAuthorizationWindow(false));
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [isAuthorizationDone]);

  function redirectToGoogleAuthorization() {
    const params = {
      redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI, //todo поменять на беке и потом здесь тоже
      client_id: atob(process.env.REACT_APP_GOOGLE_CLIENT_ID),
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ].join(' '),
    };

    const searchParams = new URLSearchParams(params);
    const windowOptions = setWindowOptions();

    window.open(
      `${process.env.REACT_APP_GOOGLE_CONFIRM_URL}?${searchParams}`,
      '_blank',
      windowOptions
    );

    checkAuthorizationStop();
  }

  function checkAuthorizationStop() {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        if (localStorage[LocalStorageItems.AuthorizationDone]) {
          localStorage.removeItem(LocalStorageItems.AuthorizationDone);
          setIsAuthorizationDone(true);
        }
      }, timeInterval);
    }
  }

  return (
    <>
      <Button className={cn(s.button, className)} onClick={redirectToGoogleAuthorization}>
        Google
      </Button>
    </>
  );
}
