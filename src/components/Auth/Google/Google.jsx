import cn from 'classnames';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CONFIRM_URL,
  REDIRECT_URI,
} from '../../../core/constants/authKeys';

export function Google() {
  async function onConnect() {
    const params = {
      redirect_uri: REDIRECT_URI,
      client_id: GOOGLE_CLIENT_ID,
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ].join(' '),
    };

    const searchParams = new URLSearchParams(params);

    window.location.assign(`${GOOGLE_CONFIRM_URL}?${searchParams.toString()}`);
  }

  return (
    <>
      <Button className={cn(s.button)} onClick={onConnect}></Button>
    </>
  );
}
