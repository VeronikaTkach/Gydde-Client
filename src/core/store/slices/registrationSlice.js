import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '../../constants/Status';

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async function(regData, { rejectWithValue }) {
    try {
      const response = await axios.post('http://localhost:3004/register', regData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.status = Status.Loading;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = Status.Resolved;
      state.todos = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
      state.status = Status.Rejected;
      state.error = action.payload.message;
    },
  },
});

export default registrationSlice.reducer;
