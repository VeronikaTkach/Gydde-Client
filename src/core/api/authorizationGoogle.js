import { GOOGLE_CLIENT_ID, GOOGLE_SECRET_KEY, REDIRECT_URI } from '../constants/authKeys';
import googleApi from './config/googleApi';

export async function getGooleToken(code) {
  const params = new URLSearchParams();
  params.append('code', code);
  params.append('client_id', GOOGLE_CLIENT_ID);
  params.append('client_secret', GOOGLE_SECRET_KEY);
  params.append('redirect_uri', REDIRECT_URI);
  params.append('grant_type', 'authorization_code');

  try {
    const result = await googleApi.post('', params);
    window.location.href = '/';

    return result.data.access_token;
  } catch (error) {
    console.error(error);
  }
}
