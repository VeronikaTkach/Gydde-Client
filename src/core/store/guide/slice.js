import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';
import { guideRequest } from './thunk';

const initialState = {
  guidesGallery: [],
  statusGuidesGallery: Status.Loading,
  errorGuidesGallery: null,
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
      });
  },
});

// export const { } = guideSlice.actions;
export const guide = (state) => state.guide;

export default guideSlice.reducer;
