import cn from 'classnames';
import s from './style.module.scss';
import TwitterLogin from 'react-twitter-login';
import {
  REDIRECT_URI,
  TWITTER_CLIENT_ID,
  TWITTER_SECRET_KEY,
} from '../../../core/constants/authKeys';
import axios from 'axios';

export function Twitter({ className }) {
  const urlParams = new URLSearchParams(window.location.search);
  const receivedCode = urlParams.get('code');
  if (receivedCode) {
    const decodedCode = decodeURIComponent(receivedCode);
    console.log(decodedCode);
    getToken(decodedCode);
  }
  //вариант 2
  function onConnect2() {
    const data = {
      oauth_callback: REDIRECT_URI,
      oauth_consumer_key: TWITTER_CLIENT_ID,
    };
    const options = {
      method: 'POST',
      url: 'https://api.twitter.com/oauth/request_token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    };
    axios(options)
      .then((res) => {
        console.log(res); //блокируется корс

        // const params = {
        //   redirect_uri: REDIRECT_URI,
        //   client_id: TWITTER_CLIENT_ID,
        //   oauth_token: res.oauth_token,
        // };
        // const searchParams = new URLSearchParams(params);

        const requestUrl = 'https://api.twitter.com/oauth/authorize';

        window.location.assign(`${requestUrl}?oauth_token=${res.oauth_token}`);
      })
      .catch(console.log);

    const params = {
      response_type: 'code',
      client_id: 'Y1hITTU4c0RvamtyNVBQamhEcGk6MTpjaQ', //работает с моим ключом приложения, возможно ключ Гайди не тот который нужен
      redirect_uri: 'http://localhost:3000',
      scope: 'offline.access',
      state: 'state',
      code_challenge: 'challenge',
      code_challenge_method: 'plain',
    };

    const searchParams = new URLSearchParams(params);

    window.location.assign(`https://twitter.com/i/oauth2/authorize?${searchParams}`);
    //после получаю код (чтобы вывелся в консоль нужно зоново открыть окно регистрауии) с которым можно запросить токен, но далее так же блокирует корс
  }

  async function getToken(code) {
    //блокируется корс
    const tokenUrl = 'https://api.twitter.com/2/oauth2/token';

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const data = new URLSearchParams();
    data.append('code', code);
    data.append('grant_type', 'authorization_code');
    data.append('client_id', 'Y1hITTU4c0RvamtyNVBQamhEcGk6MTpjaQ'); //
    data.append('redirect_uri', 'http://localhost:3001');
    data.append('code_verifier', 'challenge');

    axios
      .post(tokenUrl, data, { headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при запросе:', error);
      });
  }

  //под библиотеку
  // async function onConnect(err, data) {
  //   console.log(err, data);
  // }

  return (
    <>
      {/* <TwitterLogin
        authCallback={onConnect}
        consumerKey={TWITTER_CLIENT_ID}
        consumerSecret={TWITTER_SECRET_KEY}
        callbackUrl={REDIRECT_URI}
      /> */}
      <button className={cn(className, s.button)} onClick={onConnect2}>
        Twitter
      </button>
    </>
  );
}
