import { LocalStorageItems } from '../constants/LocalStorageItems';
import mainRequest from '../utils/mainApi';

export async function sendTwitterCode(code) {
  const data = {
    code: code,
  };

  try {
    const result = await mainRequest.post('', data); //? backend api path

    localStorage.setItem(LocalStorageItems.JwtToken, result.token);
  } catch (error) {
    console.error(error);
  }
}
