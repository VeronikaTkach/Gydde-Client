import { createSlice } from '@reduxjs/toolkit';
import { Status, UserReferralStatus } from '../../constants/Status';
import { userRequest } from './thunk';

const initialState = {
  userName: null,
  userReferral: UserReferralStatus.Referral,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRequest.get.pending, (state) => {
        state.status = Status.Loading;
        state.errorType = null;
      })
      .addCase(userRequest.get.fulfilled, (state, action) => {
        state.status = Status.Resolved;
        state.userName = action.payload;
      })
      .addCase(userRequest.get.rejected, (state, action) => {
        state.status = Status.Rejected;
        state.errorType = action.payload.response?.data?.state?.type;
      });
  },
});

// export const {} = userSlice.actions;
export const userStore = (state) => state.user;

export default userSlice.reducer;
