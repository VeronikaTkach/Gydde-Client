import cn from 'classnames';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';
import { GOOGLE_CLIENT_ID } from '../../../core/constants/authKeys';

export function Google() {
  async function onConnect() {
    const redirect = 'http://localhost:3000/';
    const scope = 'email prifile';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${redirect}&client_id=${GOOGLE_CLIENT_ID}/`;

    window.location.assign(url);
  }

  return (
    <Button className={cn(s.button)} onClick={onConnect}>
      <div className={s.connected}></div>
    </Button>
  );
}
