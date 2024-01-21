import { LocalStorageItems } from '../constants/LocalStorageItems';
import { collectSearchParams } from '../helpers/collectSearchParams';
import googleRequest from '../utils/googleRequestUtils';
import mainRequest from '../utils/mainRequestUtils';

export const googleAuthorization = {
  getToken: async (code) => {
    const params = collectSearchParams({
      code: code,
      client_id: atob(process.env.REACT_APP_GOOGLE_CLIENT_ID),
      client_secret: atob(process.env.REACT_APP_GOOGLE_SECRET_KEY),
      redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    try {
      const result = await googleRequest.post('', params);

      return result.data.id_token;
    } catch (error) {
      console.error(error);
    }
  },

  sendToken: async (idToken) => {
    const data = {
      id_token: idToken,
    };

    function setCookie(name, value, daysToExpire) {
      const date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      const expires = 'expires=' + date.toUTCString();
      document.cookie = name + '=' + value + '; ' + expires;
    }

    setCookie('XSRF-TOKEN', '4a8fdfd8-587c-491f-a5b1-a2fe64feed99', 30);
    // document.cookie = "empty_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // const response = await mainRequest.get('/auth/gmail');
    // console.log(console.log(response.headers['Cookie']))
    const decodedCookie = decodeURIComponent(document.cookie);
    // console.log(response);
    console.log(decodedCookie);
    console.log(`OAuth ${idToken}`);
    try {
      // mainRequest.defaults.headers.common['Authorization'] = `OAuth ${idToken}`;
      const result = await mainRequest.get('/auth/gmail', {
        headers: {
          Authorization: `OAuth ${idToken}`,
        },
        withCredentials: true,
      }); //? backend api path
console.log(result)
      // localStorage.setItem(LocalStorageItems.JwtToken, result.token);
    } catch (error) {
      console.error(error);
    }
  },
};
