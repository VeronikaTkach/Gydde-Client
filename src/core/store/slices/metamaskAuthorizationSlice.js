import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MetamaskConnectionStatus } from '../../constants/Status';
import mainRequest from '../../utils/mainRequestUtils';

const initialState = {
  connectionStatus: MetamaskConnectionStatus.Connecting,
  account: null,
  message: null,
  signedMessage: null,
  error: null,
  firstHighlightedItem: 1,
};

export const getMetamaskAccount = createAsyncThunk(
  'metamaskAuthorization/getMetamaskAccount',
  async function (web3, { rejectWithValue }) {
    try {
      const response = await web3.eth.requestAccounts();
      const firstAdress = 0;

      return response[firstAdress];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signMetamaskMessage = createAsyncThunk(
  'metamaskAuthorization/signMetamaskMessage',
  async function (web3, { rejectWithValue, getState }) {
    const state = getState();
    const message = state.metamaskAuthorization.message;
    const account = state.metamaskAuthorization.account;
    // console.log(message);

    try {
      const result = await mainRequest.get(`/auth/metamask/message/${message}`);
      console.log(result.data.token)
      const response = await web3.eth.personal.sign(result.data.token, account, '');
      console.log(result, response);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendMetamaskData = createAsyncThunk(
  'metamaskAuthorization/sendMetamaskData',
  async function (data, { rejectWithValue }) {
    console.log(data);
    try {
      const response = await mainRequest.post('/auth/metamask', JSON.stringify(data));
      console.log(response);

      return response.data.id_token;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error);
    }
  }
);

export const metamaskAuthorizationSlice = createSlice({
  name: 'metamaskAuthorization',
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
      .addCase(getMetamaskAccount.pending, (state) => {
        state.error = null;
      })
      .addCase(getMetamaskAccount.fulfilled, (state, action) => {
        state.connectionStatus = MetamaskConnectionStatus.Sign;
        state.account = action.payload;
      })
      .addCase(getMetamaskAccount.rejected, (state, action) => {
        state.connectionStatus = MetamaskConnectionStatus.Error;
        state.error = action.payload.message;
      })

      //signMessage
      .addCase(signMetamaskMessage.pending, (state) => {
        state.error = null;
      })
      .addCase(signMetamaskMessage.fulfilled, (state, action) => {
        state.connectionStatus = MetamaskConnectionStatus.Connected;
        state.signedMessage = action.payload;
      })
      .addCase(signMetamaskMessage.rejected, (state, action) => {
        state.connectionStatus = MetamaskConnectionStatus.Error;
        state.error = action.payload.message;
      })

      //checkUser
      .addCase(sendMetamaskData.pending, (state) => {
        state.error = null;
      })
      .addCase(sendMetamaskData.fulfilled, (state) => {
        state.connectionStatus = MetamaskConnectionStatus.Finish;
        state.account = null;
        state.message = null;
        state.signedMessage = null;
      })
      .addCase(sendMetamaskData.rejected, (state, action) => {
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
} = metamaskAuthorizationSlice.actions;
export const metamaskAuthorization = (state) => state.metamaskAuthorization;

export default metamaskAuthorizationSlice.reducer;
