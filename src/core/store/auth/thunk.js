import { createAsyncThunk } from '@reduxjs/toolkit';
import mainRequest from '../../utils/mainRequestUtils';
import { showAuthorizationWindow } from '../slices/modalWindowStateSlice';

export const authorization = {
  mail: createAsyncThunk(
    'authorization/mail',
    async function (authData, { rejectWithValue, dispatch }) {
      try {
        const response = await mainRequest.post('/auth/email', authData);

        localStorage.setItem('AuthorizationToken', response.data.token);
        dispatch(showAuthorizationWindow(false));

        return response.data.token;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  ),
};
