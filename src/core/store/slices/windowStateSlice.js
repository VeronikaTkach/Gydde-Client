import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authorizationWindowState: false,
};

export const statePopupWindow = createSlice({
  name: 'statePopupWindow',
  initialState,
  reducers: {
    showAuthorizationWindow(state, action) {
      state.authorizationWindowState = action.payload;
    },
  },
});

export const { showAuthorizationWindow } = statePopupWindow.actions;

export default statePopupWindow.reducer;
