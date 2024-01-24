import { createAsyncThunk } from '@reduxjs/toolkit';
// import mainRequest from '../../utils/mainRequestUtils';
import mainRequest from '../../utils/mainRequestUtils';

export const guideRequest = {
  guidesGalery: createAsyncThunk(
    'guide/guidesGalery',
    async function (_, { rejectWithValue, getState }) {
      const state = getState();
      const token = state.authorization.message;

      try {
        const response = await mainRequest.get('/quest/user/1', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);

        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),
};
