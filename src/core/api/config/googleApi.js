import axios from 'axios';

export const googleAuthorizationUrl = 'https://www.googleapis.com/oauth2/v4/token';

export default axios.create({
  baseURL: googleAuthorizationUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
