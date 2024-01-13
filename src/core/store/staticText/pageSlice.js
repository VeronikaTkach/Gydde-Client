import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';

const initialState = {
  pageStatus: Status.Loading,
  pageText: null,
  pageError: null,
};

export const staticPageTextSlice = createSlice({
  name: 'staticPageText',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => /staticPageText\/.*\/pending$/.test(action.type),
        (state) => {
          state.pageStatus = Status.Loading;
          state.pageError = null;
        }
      )
      .addMatcher(
        (action) => /staticPageText\/.*\/fulfilled$/.test(action.type),
        (state, action) => {
          state.pageStatus = Status.Resolved;
          state.pageText = action.payload;
        }
      )
      .addMatcher(
        (action) => /staticPageText\/.*\/rejected$/.test(action.type),
        (state, action) => {
          state.pageStatus = Status.Rejected;
          state.pageError = action.payload;
        }
      );
  },
});

export const staticPageText = (state) => state.staticPageText;

export default staticPageTextSlice.reducer;
