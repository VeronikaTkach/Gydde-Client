import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';
import { AuthorizationType } from '../../constants/AuthorizationType';
import mainRequest from '../../utils/mainRequestUtils';

const initialState = {
  status: null,
  error: null,
  currentAuthorizationType: AuthorizationType.NotСhosen,
};

export const authorizedUser = createAsyncThunk(
  'mailAuthorization/mailAuthorizationUser',
  async function (authData, { rejectWithValue }) { //todo создавать не просто запросы, а использовать базовый запрос 'mainRequest'
    try {
      const response = await mainRequest.post('localhost:8080', authData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authorizationSlice = createSlice({
  name: 'mailAuthorization',
  initialState,
  reducers: {
    setCurrentAuthorizationType: (state, action) => {
      state.currentAuthorizationType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizedUser.pending, (state) => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(authorizedUser.fulfilled, (state) => {
        state.status = Status.Resolved;
      })
      .addCase(authorizedUser.rejected, (state, action) => {
        state.status = Status.Rejected;
        state.error = action.payload;
      });
  },
});

export const { setCurrentAuthorizationType } = authorizationSlice.actions;
export const allAuthorization = (state) => state.authorization;

export default authorizationSlice.reducer;
