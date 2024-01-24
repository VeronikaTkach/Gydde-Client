import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';
import { guideRequest } from './thunk';

const initialState = {
  guidesGalery: [],
  statusGuidesGalery: Status.Loading,
  errorGuidesGalery: null,
};

export const guideSlice = createSlice({
  name: 'guide',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(guideRequest.guidesGalery.pending, (state) => {
        state.guidesGalery = Status.Loading;
        state.errorGuidesGalery = null;
      })
      .addCase(guideRequest.guidesGalery.fulfilled, (state, action) => {
        state.guidesGalery = Status.Resolved;
        state.guidesGalery = action.payload;
      })
      .addCase(guideRequest.guidesGalery.rejected, (state, action) => {
        state.guidesGalery = Status.Rejected;
        state.errorGuidesGalery = action.payload.message;
      });
  },
});

// export const { } = guideSlice.actions;
export const guide = (state) => state.guide;

export default guideSlice.reducer;
