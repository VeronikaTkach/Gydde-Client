import { createSlice } from '@reduxjs/toolkit';
import { MetamaskConnectionStatus } from '../../constants/Status';
import { metamaskRequest } from './thunk';

const initialState = {
  connectionStatus: MetamaskConnectionStatus.Connecting,
  account: null,
  message: null,
  signedMessage: null,
  error: null,
  firstHighlightedItem: 1,
};

export const metamaskSlice = createSlice({
  name: 'metamask',
  initialState,
  reducers: {
    setMetamaskConnectionStatus: (state, action) => {
      state.connectionStatus = action.payload;
    },
    setMetamaskMessage: (state, action) => {
      state.message = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFirstHighlightedItem: (state, action) => {
      state.firstHighlightedItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //getAccount
      .addCase(metamaskRequest.getAccount.pending, (state) => {
        state.error = null;
      })
      .addCase(metamaskRequest.getAccount.fulfilled, (state, action) => {
        state.connectionStatus = MetamaskConnectionStatus.Sign;
        state.account = action.payload;
      })
      .addCase(metamaskRequest.getAccount.rejected, (state, action) => {
        state.connectionStatus = MetamaskConnectionStatus.Error;
        state.error = action.payload.message;
      })

      //signMessage
      .addCase(metamaskRequest.signMessage.pending, (state) => {
        state.error = null;
      })
      .addCase(metamaskRequest.signMessage.fulfilled, (state, action) => {
        state.connectionStatus = MetamaskConnectionStatus.Connected;
        state.signedMessage = action.payload;
      })
      .addCase(metamaskRequest.signMessage.rejected, (state, action) => {
        state.connectionStatus = MetamaskConnectionStatus.Error;
        state.error = action.payload.message;
      })

      //checkUser
      .addCase(metamaskRequest.sendAuthData.pending, (state) => {
        state.error = null;
      })
      .addCase(metamaskRequest.sendAuthData.fulfilled, (state) => {
        state.connectionStatus = MetamaskConnectionStatus.Finish;
        state.account = null;
        state.message = null;
        state.signedMessage = null;
      })
      .addCase(metamaskRequest.sendAuthData.rejected, (state, action) => {
        state.connectionStatus = MetamaskConnectionStatus.Error;
        state.error = action.payload;
      });
  },
});

export const {
  setMetamaskConnectionStatus,
  setMetamaskMessage,
  setError,
  setFirstHighlightedItem,
} = metamaskSlice.actions;
export const metamask = (state) => state.metamask;

export default metamaskSlice.reducer;
