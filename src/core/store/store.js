import { configureStore } from '@reduxjs/toolkit';
import modalWindowState from './slices/modalWindowStateSlice';
import registration from './slices/registrationSlice';
import authorization from './slices/mailAuthorizationSlice';
import metamaskAuthorization from './slices/metamaskAuthorizationSlice';
import staticText from './staticText/slice';

export const store = configureStore({
  reducer: {
    modalWindowState,
    registration,
    authorization,
    metamaskAuthorization,
    staticText,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
