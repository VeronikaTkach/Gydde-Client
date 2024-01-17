import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSoundOn: true,
};

export const soundSettingsSlice = createSlice({
  name: 'soundSettings',
  initialState,
  reducers: {
    setSoundVolume: (state, action) => {
      state.isSoundOn = action.payload;
    },
  },
});

export const { setSoundVolume } = soundSettingsSlice.actions;
export const soundSettings = (state) => state.soundSettings;

export default soundSettingsSlice.reducer;
