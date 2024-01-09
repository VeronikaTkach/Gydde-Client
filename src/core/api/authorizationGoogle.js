import { LocalStorageItems } from '../constants/LocalStorageItems';
import googleRequest from '../utils/googleRequestUtils';
import mainRequest from '../utils/mainRequestUtils';

export const googleAuthorization = {
  getToken: async (code) => {
    const params = new URLSearchParams();
    params.append('code', code);
    params.append('client_id', atob(process.env.REACT_APP_GOOGLE_CLIENT_ID));
    params.append('client_secret', atob(process.env.REACT_APP_GOOGLE_SECRET_KEY));
    params.append('redirect_uri', process.env.REACT_APP_GOOGLE_REDIRECT_URI);
    params.append('grant_type', 'authorization_code');

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

    try {
      const result = await mainRequest.post('', data); //? backend api path

      localStorage.setItem(LocalStorageItems.JwtToken, result.token);
    } catch (error) {
      console.error(error);
    }
  },
};
