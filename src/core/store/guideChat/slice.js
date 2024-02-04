import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';
import { guideChatRequest } from './thunk';

const initialState = {
  guideMessages: [],
  statusGuideMessages: Status.Loading,
  errorGuideMessages: null,
  guideStepMessages: [],
};

export const guideChatSlice = createSlice({
  name: 'guideChat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(guideChatRequest.guidesGalery.pending, (state) => {
        state.statusGuidesGallery = Status.Loading;
        state.errorGuidesGallery = null;
      })
      .addCase(guideChatRequest.guidesGalery.fulfilled, (state, action) => {
        state.statusGuidesGallery = Status.Resolved;
        state.guidesGallery = action.payload;
      })
      .addCase(guideChatRequest.guidesGalery.rejected, (state, action) => {
        state.statusGuidesGallery = Status.Rejected;
        state.errorGuidesGallery = action.payload.message;
      });
  },
});

// export const { } = guideChatSlice.actions;
export const guideChatStore = (state) => state.guideChat;

export default guideChatSlice.reducer;
