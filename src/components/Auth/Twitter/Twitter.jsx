import cn from 'classnames';
import s from './style.module.scss';
import TwitterLogin from 'react-twitter-login';
import { TWITTER_CLIENT_ID, TWITTER_SECRET_KEY } from '../../../core/constants/authKeys';

export function Twitter() {
  async function onConnect(err, data) {
    console.log(err, data);

    window.location.assign(
      `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${TWITTER_CLIENT_ID}&redirect_uri=${'http://localhost:3000'}&scope=tweet.read%20users.read%20follows.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`
    );
  }

  return (
    <>
      {/* <TwitterLogin
        authCallback={onConnect}
        consumerKey={TWITTER_CLIENT_ID}
        consumerSecret={TWITTER_SECRET_KEY}
        callbackUrl={'http://localhost:3000'}
      /> */}
      <button onClick={onConnect}>twitter</button>
    </>
  );
}
