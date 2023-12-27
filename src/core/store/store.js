import { configureStore } from '@reduxjs/toolkit';
import statePopupWindow from './slices/windowStateSlice';
import registrationSlice from './slices/registrationSlice';
import authorizationSlice from './slices/authorizationSlice';

export const store = configureStore({
  reducer: {
    statePopupWindow,
    registration: registrationSlice,
    authorization: authorizationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
