import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setWindowOptions } from '../../../core/helpers/forWindow';
import { RoutesName } from '../../../core/constants/Routes';
import { LocalStorageItems } from '../../../core/constants/LocalStorageItems';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';

export function Twitter({ className }) {
  const navigate = useNavigate();
  const [isAuthorizationDone, setIsAuthorizationDone] = useState(false);
  const intervalId = useRef(null);
  const timeInterval = 300;

  useEffect(() => {
    if (isAuthorizationDone) {
      navigate(RoutesName.Root);
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [isAuthorizationDone]);

  function redirectToTwitterAuthorization() {
    const params = {
      response_type: 'code',
      client_id: 'Y1hITTU4c0RvamtyNVBQamhEcGk6MTpjaQ',
      // client_id: atob(process.env.REACT_APP_TWITTER_CLIENT_ID),//todo обновить ключи когда будут на беке
      redirect_uri: process.env.REACT_APP_TWITTER_REDIRECT_URI,
      scope: 'offline.access',
      state: 'state',
      code_challenge: 'challenge',
      code_challenge_method: 'plain',
    };

    const searchParams = new URLSearchParams(params);
    const windowOptions = setWindowOptions();

    window.open(
      `${process.env.REACT_APP_TWITTER_CONFIRM_URL}?${searchParams}`,
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
      <Button
        className={cn(className, s.button)}
        onClick={redirectToTwitterAuthorization}>
        Twitter
      </Button>
    </>
  );
}
