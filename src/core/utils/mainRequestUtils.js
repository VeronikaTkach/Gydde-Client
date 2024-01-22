import axios from 'axios';

function createMainRequest() {
  const mainRequest = axios.create();

  mainRequest.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  mainRequest.defaults.headers.common['Accept'] = 'application/json';
  mainRequest.defaults.headers.common['Content-Type'] = 'application/json';

  return mainRequest;
}

const mainRequest = createMainRequest();

export default mainRequest;
