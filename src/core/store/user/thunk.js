import { createAsyncThunk } from '@reduxjs/toolkit';
import mainRequest from '../../utils/mainRequestUtils';

export const userRequest = {
  get: createAsyncThunk('authorization/mail', async function (_, { rejectWithValue }) {
    try {
      const response = await mainRequest.get('/');

      return response.data.token;
    } catch (error) {
      return rejectWithValue(error);
    }
  }),
};
