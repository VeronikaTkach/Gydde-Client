import axios from 'axios';

function createMainRequest() {
  const mainRequest = axios.create();

  mainRequest.defaults.baseURL =
    // 'http://6be7-2a02-8308-213-dd00-b7-e859-b93-730e.ngrok-free.app';
  mainRequest.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  mainRequest.defaults.headers.common['Accept'] = 'application/json';

  return mainRequest;
}

const mainRequest = createMainRequest();

export default mainRequest;
