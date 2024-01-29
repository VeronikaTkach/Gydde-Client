import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/Status';
// import { getStaticText } from './thunk';

const initialState = {
  savedStaticText: [],
};

export const staticTextSlice = createSlice({
  name: 'staticText',
  initialState,
  reducers: {
    resetStaticTextState: () => initialState,
    removeUnusedStaticText: (state, action) => {
      const statusState = 'staticTextStatus' + action.payload;
      const textState = 'staticText' + action.payload;
      const errorState = 'staticTextError' + action.payload;

      state[statusState] = null;
      state[textState] = null;
      state[errorState] = null;
    },
  },

  extraReducers: (builder) => {
    const firstItem = 0;

    builder
      //TODO get hello page (не работает, корс, возможно будет другой запрос)
      // .addCase(getStaticText.hello.pending, (state) => {
      //   // state.error = null;
      // })
      // .addCase(getStaticText.hello.fulfilled, (state) => {
      //   // state.connectionStatus = MetamaskConnectionStatus.Finish;
      //   // state.account = null;
      //   // state.message = null;
      //   // state.signedMessage = null;
      // })
      // .addCase(getStaticText.hello.rejected, (state, action) => {
      //   // state.connectionStatus = MetamaskConnectionStatus.Error;
      //   // state.error = action.payload;
      // })

      .addMatcher(
        (action) => /staticText\/.*\/pending$/.test(action.type),
        (state, action) => {
          const stateName = action.meta.arg[firstItem].match(/[^_.]*/)[firstItem];
          const errorState = 'staticTextError' + stateName;
          const statusState = 'staticTextStatus' + stateName;

          state[statusState] = Status.Loading;
          state[errorState] = null;
        }
      )
      .addMatcher(
        (action) => /staticText\/.*\/fulfilled$/.test(action.type),
        (state, action) => {
          const stateName = action.meta.arg[firstItem].match(/[^_.]*/)[firstItem];
          const textState = 'staticText' + stateName;
          const statusState = 'staticTextStatus' + stateName;

          state[statusState] = Status.Resolved;
          state[textState] = action.payload;
        }
      )
      .addMatcher(
        (action) => /staticText\/.*\/rejected$/.test(action.type),
        (state, action) => {
          const stateName = action.meta.arg[firstItem].match(/[^_.]*/)[firstItem];
          const errorState = 'staticTextError' + stateName;
          const statusState = 'staticTextStatus' + stateName;

          state[statusState] = Status.Rejected;
          state[errorState] = action.payload;
        }
      );
  },
});

export const { resetStaticTextState, removeUnusedStaticText } = staticTextSlice.actions;
export const staticText = (state) => state.staticText;

export default staticTextSlice.reducer;
