import cn from 'classnames';
import s from './style.module.scss';
import TwitterLogin from 'react-twitter-login';
import { TWITTER_CLIENT_ID, TWITTER_SECRET_KEY } from '../../../core/constants/authKeys';

export function Twitter() {
  async function onConnect(err, data) {
    console.log(err, data);
  }

  return (
    <>
      <TwitterLogin
        authCallback={onConnect}
        consumerKey={TWITTER_CLIENT_ID}
        consumerSecret={TWITTER_SECRET_KEY}
        callbackUrl={'http://localhost:3000'}
      />
    </>
  );
}
