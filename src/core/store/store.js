import { configureStore } from '@reduxjs/toolkit';
import statePopupWindow from './slices/windowStateSlice';

export const store = configureStore({
  reducer: {
    statePopupWindow,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
