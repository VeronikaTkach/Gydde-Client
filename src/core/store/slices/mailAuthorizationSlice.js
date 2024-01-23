import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';
import { AuthorizationType } from '../../constants/AuthorizationType';
import mainRequest from '../../utils/mainRequestUtils';
import { ErrorType } from '../../constants/Errors';
import { showAuthorizationWindow } from './modalWindowStateSlice';

const initialState = {
  status: null,
  errorMessage: null,
  currentAuthorizationType: AuthorizationType.NotСhosen,
  loading: false,
};

export const authorizedUser = createAsyncThunk(
  'mailAuthorization/mailAuthorizationUser',
  async function (authData, { rejectWithValue, dispatch }) {
    try {
      const response = await mainRequest.post('/auth/email', authData);

      dispatch(showAuthorizationWindow(false));

      return response.data;
    } catch (error) {
      // const response = await mainRequest.post('/auth/email', authData);

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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizedUser.pending, (state) => {
        state.status = Status.Loading;
        state.errorMessage = null;
      })
      .addCase(authorizedUser.fulfilled, (state) => {
        state.status = Status.Resolved;
      })
      .addCase(authorizedUser.rejected, (state, action) => {
        state.status = Status.Rejected;

        switch (action.payload.data.state.type) {
          case ErrorType.Error:
            // state.errorMessage = TEXT_ERRORS.AUTH.INCORRECT_MAIL_AUTH;
            break;
          default:
            // state.errorMessage = TEXT_ERRORS.ERROR;
            break;
        }
      });
  },
});

export const { setCurrentAuthorizationType } = authorizationSlice.actions;
export const allAuthorization = (state) => state.authorization;
export const loading = (state) => state.loading;

export default authorizationSlice.reducer;
