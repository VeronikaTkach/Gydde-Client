import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '../../constants/Status';
import { AuthorizationType } from '../../constants/AuthorizationType';

const initialState = {
  status: null,
  error: null,
  currentAuthorizationType: AuthorizationType.NotСhosen,
};

export const authorizedUser = createAsyncThunk(
  'authorization/authorizationUser',
  async function (authData, { rejectWithValue }) {
    try {
      const response = await axios.post('http://localhost:3004/authorization', authData);//todo создавать не просто запросы, а использовать базовый запрос 'mainRequest'
      localStorage.setItem('accessToken', response.data.accessToken);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setCurrentAuthorizationType: (state, action) => {
      state.currentAuthorizationType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizedUser.pending, (state) => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(authorizedUser.fulfilled, (state) => {
        state.status = Status.Resolved;
      })
      .addCase(authorizedUser.rejected, (state, action) => {
        state.status = Status.Rejected;
        state.error = action.payload;
      });
  },
});

export const { setCurrentAuthorizationType } = authorizationSlice.actions;
export const allAuthorization = (state) => state.authorization;

export default authorizationSlice.reducer;
