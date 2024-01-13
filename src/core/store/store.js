import { configureStore } from '@reduxjs/toolkit';
import modalWindowState from './slices/modalWindowStateSlice';
import registration from './slices/registrationSlice';
import authorization from './slices/mailAuthorizationSlice';
import metamaskAuthorization from './slices/metamaskAuthorizationSlice';
import staticPageText from './staticText/pageSlice';
import staticModalsText from './staticText/modalsSlice';

export const store = configureStore({
  reducer: {
    modalWindowState,
    registration,
    authorization,
    metamaskAuthorization,
    staticPageText,
    staticModalsText
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
