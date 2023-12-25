import cn from 'classnames';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';
import { GOOGLE_CLIENT_ID } from '../../../core/constants/authKeys';

export function Google() {
  async function onConnect() {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

    const options = {
      redirect_uri: 'http://localhost:3000',
      client_id: GOOGLE_CLIENT_ID,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" ")
    };

    const qs = new URLSearchParams(options);

    window.location.assign(`${rootUrl}?${qs.toString()}`);
  }

  return (
    <Button className={cn(s.button)} onClick={onConnect}>
      <div className={s.connected}></div>
    </Button>
  );
}
