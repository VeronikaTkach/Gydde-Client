import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalAuthorization: false,
};

export const modalWindowStateSlice = createSlice({
  name: 'modalWindowState',
  initialState,
  reducers: {
    showAuthorizationWindow: (state, action) => {
      state.modalAuthorization = action.payload;
    },
  },
});

export const { showAuthorizationWindow } = modalWindowStateSlice.actions;
export const modalWindowState = (state) => state.modalWindowState;

export default modalWindowStateSlice.reducer;
