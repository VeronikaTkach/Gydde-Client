import { createAsyncThunk } from '@reduxjs/toolkit';
import mainRequest from '../../utils/mainRequestUtils';
import { setAuthorizationToken } from '../auth/slice';
import { showAuthorizationWindow } from '../slices/modalWindowStateSlice';

export const metamaskRequest = {
  getAccount: createAsyncThunk(
    'metamask/getAccount',
    async function (web3, { rejectWithValue }) {
      try {
        const response = await web3.eth.requestAccounts();
        const firstAdress = 0;

        return response[firstAdress];
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),
  signMessage: createAsyncThunk(
    'metamask/signMessage',
    async function (web3, { rejectWithValue, getState }) {
      const state = getState();
      const message = state.metamask.message;
      const account = state.metamask.account;

      try {
        const result = await mainRequest.get(`/auth/metamask/message/${message}`);
        const response = await web3.eth.personal.sign(result.data.token, account, '');

        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),
  sendAuthData: createAsyncThunk(
    'metamask/sendAuthData',
    async function (data, { rejectWithValue, dispatch }) {
      try {
        const response = await mainRequest.post('/auth/metamask', JSON.stringify(data));

        localStorage.setItem('AuthorizationToken', response.data.token);
        dispatch(setAuthorizationToken(response.data.token));
        dispatch(showAuthorizationWindow(false));

        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  ),
};
