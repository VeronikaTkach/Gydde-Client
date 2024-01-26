import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';
import { languageRequest } from './thunk';

const initialState = {
  status: Status.Loading,
  currentLanguage: null,
  error: null,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(languageRequest.change.pending, (state) => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(languageRequest.change.fulfilled, (state, action) => {
        state.status = Status.Resolved;
        state.currentLanguage = action.payload;
      })
      .addCase(languageRequest.change.rejected, (state, action) => {
        state.status = Status.Rejected;
        state.error = action.payload.message;
      });
  },
});

// export const { } = languageSlice.actions;
export const language = (state) => state.language;

export default languageSlice.reducer;
