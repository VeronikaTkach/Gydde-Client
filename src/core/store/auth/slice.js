import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';
import { AuthorizationType } from '../../constants/AuthorizationType';
import { authorization } from './thunk';

const initialState = {
  status: null,
  errorType: null,
  currentAuthorizationType: AuthorizationType.NotСhosen,
  token: localStorage.getItem('AuthorizationToken'),
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setCurrentAuthorizationType: (state, action) => {
      state.currentAuthorizationType = action.payload;
    },
    clearError: (state) => {
      state.errorType = null;
    },
    setAuthorizationToken: (state, action) => {
      state.token = action.payload;
    },
    clearAuthorizationToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorization.mail.pending, (state) => {
        state.status = Status.Loading;
        state.errorType = null;
      })
      .addCase(authorization.mail.fulfilled, (state, action) => {
        state.status = Status.Resolved;
        state.token = action.payload;
      })
      .addCase(authorization.mail.rejected, (state, action) => {
        state.status = Status.Rejected;
        state.errorType = action.payload.response?.data?.state?.type;
      });
  },
});

export const {
  setCurrentAuthorizationType,
  setAuthorizationToken,
  clearAuthorizationToken,
  clearError,
} = authorizationSlice.actions;
export const allAuthorization = (state) => state.authorization;

export default authorizationSlice.reducer;
