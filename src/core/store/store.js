import { configureStore } from '@reduxjs/toolkit';
import modalWindowState from './slices/modalWindowStateSlice';
import registration from './slices/registrationSlice';
import authorization from './slices/mailAuthorizationSlice';
import metamaskAuthorization from './slices/metamaskAuthorizationSlice';
import soundSettings from './slices/soundSettingsSlice';
import staticText from './staticText/slice';
import guidesCarousel from './slices/guidesCarouselSlice';

export const store = configureStore({
  reducer: {
    modalWindowState,
    registration,
    authorization,
    metamaskAuthorization,
    staticText,
    soundSettings,
    guidesCarousel,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
