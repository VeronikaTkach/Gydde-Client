import { configureStore } from '@reduxjs/toolkit';
import statePopupWindow from './slices/windowStateSlice';
import registrationSlice from './slices/registrationSlice';

export const store = configureStore({
  reducer: {
    statePopupWindow,
    registration: registrationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
