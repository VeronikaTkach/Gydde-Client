import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalAuthorization: false,
  modalQuest: false,
  modalProfile: false,
  modalEmailConnect: false,
  modalUsernameEditing: false,
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
    showProfileWindow: (state, action) => {
      state.modalProfile = action.payload;
    },
    showEmailConnectWindow: (state, action) => {
      state.modalEmailConnect = action.payload;
    },
    showUsernameEditingWindow: (state, action) => {
      state.modalUsernameEditing = action.payload;
    },
  },
});

export const {
  showAuthorizationWindow,
  showQuestWindow,
  showProfileWindow,
  showEmailConnectWindow,
  showUsernameEditingWindow,
} = modalWindowStateSlice.actions;
export const modalWindowState = (state) => state.modalWindowState;

export default modalWindowStateSlice.reducer;
