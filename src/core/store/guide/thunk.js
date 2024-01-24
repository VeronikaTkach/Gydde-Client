import { createAsyncThunk } from '@reduxjs/toolkit';
// import mainRequest from '../../utils/mainRequestUtils';
import mainRequest from '../../utils/mainRequestUtils';

export const guideRequest = {
  guidesGalery: createAsyncThunk(
    'guide/guidesGalery',
    async function (_, { rejectWithValue }) {
      try {
        const response = await mainRequest.get('/quest/user/1', {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyLWlkIjoxLCJzdWIiOiJ1c2VybmFtZSIsImlhdCI6MTcwNjEwNjc3MCwiZXhwIjoxNzA2MTkzMTcwfQ.5EyiI27oWExHlDWdh_W1sKYSOQ4e722hqPt4VA49YWE',
          },
        });
        console.log(response);

        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),
};
