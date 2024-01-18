import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalAuthorization: false,
  modalQuest: false,
};

export const modalWindowStateSlice = createSlice({
  name: 'modalWindowState',
  initialState,
  reducers: {
    showAuthorizationWindow: (state, action) => {
      state.modalAuthorization = action.payload;
    },
    showQuestWindow: (state, action) => {
      state.modalQuest = action.payload;
    },
  },
});

export const { showAuthorizationWindow, showQuestWindow } = modalWindowStateSlice.actions;
export const modalWindowState = (state) => state.modalWindowState;

export default modalWindowStateSlice.reducer;
