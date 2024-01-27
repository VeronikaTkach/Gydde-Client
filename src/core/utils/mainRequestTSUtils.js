import axios from 'axios';

function createMainRequest() {
  const mainRequestTS = axios.create();
  // mainRequestTS.defaults.baseURL = 'http://3.70.233.189';
  mainRequestTS.defaults.baseURL = process.env.REACT_APP_BASE_URL_TS;
  mainRequestTS.defaults.headers.common['Accept'] = 'application/json';

  return mainRequestTS;
}

const mainRequestTS = createMainRequest();

export default mainRequestTS;
