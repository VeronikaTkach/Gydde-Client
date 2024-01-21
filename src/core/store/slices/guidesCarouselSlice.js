import { createSlice } from '@reduxjs/toolkit';
import { Position } from '../../constants/Position';

const initialState = {
  carouselGuidePosition: Position.Current,
};

export const guidesCarouselSlice = createSlice({
  name: 'guidesCarousel',
  initialState,
  reducers: {
    switchGuides: (state, action) => {
      state.carouselGuidePosition = action.payload;
    },
  },
});

export const { switchGuides } = guidesCarouselSlice.actions;
export const guidesCarousel = (state) => state.guidesCarousel;

export default guidesCarouselSlice.reducer;
