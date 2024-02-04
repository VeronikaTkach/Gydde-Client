import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeInvalidToken } from '../../helpers/removeInvalidToken';
// import mainRequest from '../../utils/mainRequestUtils';
import mainRequestTS from '../../utils/mainRequestTSUtils';

export const guideChatRequest = {
  guidesGalery: createAsyncThunk(
    'guideChat/guidesGalery',
    async function (guideId, { rejectWithValue, getState, dispatch }) {
      const state = getState();
      const token = state.authorization.token;
      // console.log(token);
      // /quest-step/findAll/${guideId}
      try {
        const response = await mainRequestTS.get('/quest-step');
        console.log(response);

        return response.data;
      } catch (error) {
        removeInvalidToken(error, dispatch);

        return rejectWithValue(error.message);
      }
    }
  ),
};
