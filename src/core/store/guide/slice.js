import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';
import { guideRequest } from './thunk';

const initialState = {
  guidesGallery: [],
  statusGuidesGallery: Status.Loading,
  errorGuidesGallery: null,
  guidesPreview: [],
  statusGuidesPreview: Status.Loading,
  errorGuidesPreview: null,
};

export const guideSlice = createSlice({
  name: 'guide',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(guideRequest.guidesGalery.pending, (state) => {
        state.statusGuidesGallery = Status.Loading;
        state.errorGuidesGallery = null;
      })
      .addCase(guideRequest.guidesGalery.fulfilled, (state, action) => {
        state.statusGuidesGallery = Status.Resolved;
        state.guidesGallery = action.payload;
      })
      .addCase(guideRequest.guidesGalery.rejected, (state, action) => {
        state.statusGuidesGallery = Status.Rejected;
        state.errorGuidesGallery = action.payload.message;
      })

      .addCase(guideRequest.guidesPreview.pending, (state) => {
        state.statusGuidesPreview = Status.Loading;
        state.errorGuidesPreview = null;
      })
      .addCase(guideRequest.guidesPreview.fulfilled, (state, action) => {
        state.statusGuidesPreview = Status.Resolved;
        state.guidesPreview = action.payload;
      })
      .addCase(guideRequest.guidesPreview.rejected, (state, action) => {
        state.statusGuidesPreview = Status.Rejected;
        state.errorGuidesPreview = action.payload.message;
      });
  },
});

// export const { } = guideSlice.actions;
export const guide = (state) => state.guide;

export default guideSlice.reducer;
