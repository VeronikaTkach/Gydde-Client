import { createSlice } from '@reduxjs/toolkit';
import { SoundRate } from '../../constants/SoundRate';
import { AudioVolume } from '../../constants/AudioVolume';
import { SoundSwitchStatus } from '../../constants/SoundSwitchStatus';

const initialState = {
  isSoundOn: true,
  soundRate: SoundRate.Normal,
  audioVolume: AudioVolume.On,
  soundSwitch: SoundSwitchStatus.On,
  soundId: null,
  soundIds: [],
};

export const soundSettingsSlice = createSlice({
  name: 'soundSettings',
  initialState,
  reducers: {
    setSoundVolume: (state, action) => {
      state.isSoundOn = action.payload;
    },
    setSoundRate: (state, action) => {
      state.soundRate = action.payload;
    },
    setAudioVolume: (state, action) => {
      state.audioVolume = action.payload;
    },
    switchSound: (state, action) => {
      state.soundSwitch = action.payload;
    },
    setSoundId: (state, action) => {
      state.soundId = action.payload;
    },
    addSoundIds: (state, action) => {
      state.soundIds.push(action.payload);
    },
    clearSoundIds: (state) => {
      state.soundIds = [];
    },
  },
});

export const {
  setSoundVolume,
  setSoundRate,
  setAudioVolume,
  switchSound,
  setSoundId,
  addSoundIds,
  clearSoundIds,
} = soundSettingsSlice.actions;
export const soundSettings = (state) => state.soundSettings;

export default soundSettingsSlice.reducer;
