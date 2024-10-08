import { createAsyncThunk } from '@reduxjs/toolkit';
// import mainRequest from '../../utils/mainRequestUtils';
import mainRequest from '../../utils/mainRequestUtils';
import { removeInvalidToken } from '../../helpers/removeInvalidToken';

export const guideRequest = {
  guidesGalery: createAsyncThunk(
    'guide/guidesGalery',
    async function (_, { rejectWithValue, getState, dispatch }) {
      const state = getState();
      const token = state.authorization.token;
      // console.log(token);
      try {
        const response = await mainRequest.get('/quest/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response);

        return response.data;
      } catch (error) {
        removeInvalidToken(error, dispatch);

        return rejectWithValue(error.message);
      }
    }
  ),
  guidesPreview: createAsyncThunk(
    'guide/guidesPreview',
    async function (_, { rejectWithValue, getState }) {
      const state = getState();
      const token = state.authorization.token;

      try {
        const response = await mainRequest.get('/quests-preview', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),
};
