import { createAsyncThunk } from '@reduxjs/toolkit';
// import mainRequest from '../../utils/mainRequestUtils';
import mainRequest from '../../utils/mainRequestUtils';

export const guideRequest = {
  guidesGalery: createAsyncThunk(
    'guide/guidesGalery',
    async function (_, { rejectWithValue }) {
      try {
        const response = await mainRequest.get('/internal/quest');
        console.log(response);

        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),
};
