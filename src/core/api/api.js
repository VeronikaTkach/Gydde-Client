import axios from 'axios';

export const baseUrl = 'http://localhost:4000';

export default axios.create({
  baseURL: baseUrl,
  headers: { accept: 'application/json', 'Content-Type': 'application/json' },
});
