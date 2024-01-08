import { configureStore } from '@reduxjs/toolkit';
import statePopupWindow from './slices/windowStateSlice';
import registrationSlice from './slices/registrationSlice';
import authorizationSlice from './slices/authorizationSlice';
import metamaskAuthorization from './slices/metamaskAuthorizationSlice';

export const store = configureStore({
  reducer: {
    statePopupWindow,
    registration: registrationSlice,
    authorization: authorizationSlice,
    metamaskAuthorization,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
