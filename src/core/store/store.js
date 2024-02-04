import { configureStore } from '@reduxjs/toolkit';
import authorization from './auth/slice';
import guide from './guide/slice';
import guideChat from './guideChat/slice';
import language from './language/slice';
import metamask from './metamask/slice';
import guidesCarousel from './slices/guidesCarouselSlice';
import modalWindowState from './slices/modalWindowStateSlice';
import soundSettings from './slices/soundSettingsSlice';
import staticText from './staticText/slice';
import user from './user/slice';

export const store = configureStore({
  reducer: {
    modalWindowState,
    authorization,
    metamask,
    staticText,
    soundSettings,
    guidesCarousel,
    guide,
    language,
    user,
    guideChat,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
