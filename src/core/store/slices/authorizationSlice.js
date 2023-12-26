import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '../../constants/Status';

export const authorizedUser = createAsyncThunk(
  'authorization/authorizationUser',
  async function (authData, { rejectWithValue }) {
    try {
      const response = await axios.post('http://localhost:3004/authorization', authData);
      localStorage.setItem('accessToken', response.data.accessToken);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: null,
  error: null,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
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

export default authorizationSlice.reducer;