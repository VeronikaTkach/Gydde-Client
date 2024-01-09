import axios from 'axios';

function createGoogleRequest() {
  const googleRequest = axios.create();

  googleRequest.defaults.baseURL = 'https://www.googleapis.com/oauth2/v4/token';
  googleRequest.defaults.headers.common['Accept'] = 'application/json';
  googleRequest.defaults.headers.common['Content-Type'] =
    'application/x-www-form-urlencoded';

  return googleRequest;
}

const googleRequest = createGoogleRequest();

export default googleRequest;
