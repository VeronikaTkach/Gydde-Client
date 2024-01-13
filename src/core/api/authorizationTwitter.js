import { LocalStorageItems } from '../constants/LocalStorageItems';
import mainRequest from '../utils/mainRequestUtils';

export const twitterAuthorization = {
  sendCode: async (code) => {
    const data = {
      code: code,
    };

    try {
      const result = await mainRequest.get('', data); //? backend api path

      localStorage.setItem(LocalStorageItems.JwtToken, result.token);
    } catch (error) {
      console.error(error);
    }
  },
};
