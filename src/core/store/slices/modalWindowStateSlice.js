import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalAuthorization: false,
  modalQuest: false,
  modalProfile: false,
  modalEmailConnect: false,
  modalUsernameEdit: false,
  modalSetPassword: false,
  modalChangePassword: false,
  modalClaim: false,
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
    showUsernameEditWindow: (state, action) => {
      state.modalUsernameEdit = action.payload;
    },
    showSetPasswordWindow: (state, action) => {
      state.modalSetPassword = action.payload;
    },
    showChangePasswordWindow: (state, action) => {
      state.modalChangePassword = action.payload;
    },
    showClaimWindow: (state, action) => {
      state.modalClaim = action.payload;
    },
  },
});

export const {
  showAuthorizationWindow,
  showQuestWindow,
  showProfileWindow,
  showEmailConnectWindow,
  showUsernameEditWindow,
  showSetPasswordWindow,
  showChangePasswordWindow,
  showClaimWindow,
} = modalWindowStateSlice.actions;
export const modalWindowState = (state) => state.modalWindowState;

export default modalWindowStateSlice.reducer;
