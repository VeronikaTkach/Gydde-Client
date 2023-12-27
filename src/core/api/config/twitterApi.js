import axios from 'axios';

export const twitterBaseUrl = 'https://api.twitter.com';

export default axios.create({
  baseURL: twitterBaseUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
