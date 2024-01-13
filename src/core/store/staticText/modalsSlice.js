import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';

const initialState = {
  modalsStatus: Status.Loading,
  modalsText: null,
  modalsError: null,
};

export const staticModalsTextSlice = createSlice({
  name: 'staticModalsText',
  initialState,
  reducers: {
    updateModalsText: (state, action) => {
      state.modalsText = { ...state.modalsText, ...action.payload };
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => /staticModalsText\/.*\/pending$/.test(action.type),
        (state) => {
          state.modalsStatus = Status.Loading;
          state.modalsError = null;
        }
      )
      .addMatcher(
        (action) => /staticModalsText\/.*\/fulfilled$/.test(action.type),
        (state, action) => {
          state.modalsStatus = Status.Resolved;
          state.modalsText = action.payload;
        }
      )
      .addMatcher(
        (action) => /staticModalsText\/.*\/rejected$/.test(action.type),
        (state, action) => {
          state.modalsStatus = Status.Rejected;
          state.modalsError = action.payload;
        }
      );
  },
});

export const { updateModalsText } = staticModalsTextSlice.actions;
export const staticModalsText = (state) => state.staticModalsText;

export default staticModalsTextSlice.reducer;
