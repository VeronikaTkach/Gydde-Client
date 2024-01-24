import { configureStore } from '@reduxjs/toolkit';
import modalWindowState from './slices/modalWindowStateSlice';
import registration from './slices/registrationSlice';
import authorization from './auth/slice';
import metamaskAuthorization from './slices/metamaskAuthorizationSlice';
import soundSettings from './slices/soundSettingsSlice';
import staticText from './staticText/slice';
import guidesCarousel from './slices/guidesCarouselSlice';
import guide from './guide/slice';

export const store = configureStore({
  reducer: {
    modalWindowState,
    registration,
    authorization,
    metamaskAuthorization,
    staticText,
    soundSettings,
    guidesCarousel,
    guide,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
