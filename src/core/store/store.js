import { configureStore } from '@reduxjs/toolkit';
import modalWindowState from './slices/modalWindowStateSlice';
import registration from './slices/registrationSlice';
import authorization from './slices/authorizationSlice';
import metamaskAuthorization from './slices/metamaskAuthorizationSlice';

export const store = configureStore({
  reducer: {
    modalWindowState,
    registration,
    authorization,
    metamaskAuthorization,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
