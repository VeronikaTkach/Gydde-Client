import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '../../constants/Status';

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async function(regData, { rejectWithValue }) {
    try {
      const response = await axios.post('http://localhost:3004/register', regData);
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

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = Status.Resolved;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = Status.Rejected;
        state.error = action.payload;
      });
  },
});

export default registrationSlice.reducer;
