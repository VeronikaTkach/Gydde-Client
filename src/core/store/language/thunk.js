import { createAsyncThunk } from '@reduxjs/toolkit';
import mainRequest from '../../utils/mainRequestUtils';

export const languageRequest = {
  change: createAsyncThunk(
    'language/change',
    async function (lang, { rejectWithValue, getState }) {
      const state = getState();
      const token = state.authorization.token;
      console.log(lang,token);
      try {
        const response = await mainRequest.get(`/user/update-language/${lang}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);

        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  ),
};
