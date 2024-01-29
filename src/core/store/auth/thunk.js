import { createAsyncThunk } from '@reduxjs/toolkit';
import mainRequest from '../../utils/mainRequestUtils';
import { showAuthorizationWindow } from '../slices/modalWindowStateSlice';
import { collectSearchParams } from '../../helpers/collectSearchParams';
import googleRequest from '../../utils/googleRequestUtils';
import { LocalStorageItems } from '../../constants/LocalStorageItems';

export const authRequest = {
  mail: createAsyncThunk(
    'authorization/mail',
    async function (authData, { rejectWithValue, dispatch }) {
      try {
        const response = await mainRequest.post('/auth/email', authData);

        localStorage.setItem(LocalStorageItems.AuthorizationToken, response.data.token);
        dispatch(showAuthorizationWindow(false));

        return response.data.token;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  ),
  getIdTokenGoogle: createAsyncThunk(
    'authorization/getIdTokenGoogle',
    async (code, { rejectWithValue }) => {
      const params = collectSearchParams({
        code: code,
        client_id: atob(process.env.REACT_APP_GOOGLE_CLIENT_ID),
        client_secret: atob(process.env.REACT_APP_GOOGLE_SECRET_KEY),
        redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code',
      });
      // console.log(code)
      try {
        const response = await googleRequest.post('', params);
        // console.log(response);

        return response.data.id_token;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  ),
  sendIdTokenGoogle: createAsyncThunk(
    'authorization/sendIdTokenGoogle',
    async (_, { rejectWithValue, getState }) => {
      const state = getState();
      const idTokenGoogle = state.authorization.idTokenGoogle;
      const token = `OAuth ${idTokenGoogle}`;
      // console.log(token);
      try {
        const response = await mainRequest.get('/auth/gmail', {
          headers: {
            Authorization: token,
          },
        });
        // console.log(response);
        localStorage.setItem(LocalStorageItems.AuthorizationToken, response.data.token);

        localStorage.setItem(
          LocalStorageItems.AuthorizationDone,
          LocalStorageItems.AuthorizationDone
        );
        window.close();

        return response.data.token;
      } catch (error) {
        // console.log(error);

        return rejectWithValue(error);
      }
    }
  ),
};
