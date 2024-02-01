import { createAsyncThunk } from '@reduxjs/toolkit';
// import mainRequest from '../../utils/mainRequestUtils';
import { staticTextHelper } from '../../helpers/staticTextHelper';
import mainRequestTS from '../../utils/mainRequestTSUtils';

export const getStaticText = {
  basic: createAsyncThunk('staticText/basic', async function (keys, { rejectWithValue }) {
    try {
      const response = await mainRequestTS.get('/getTex', { keys: keys }); //TODO mainRequest?? когда будет бек

      // return staticTextHelper.convertKeys(response.data); //TODO раскомментировать когда будет бек

      //TODO удалить когда будет бек
      const data = keys.map((item) => {
        return { [item]: response.data[item] };
      });

      return staticTextHelper.convertKeys(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }),
  hello: createAsyncThunk('staticText/hello', async function (_, { rejectWithValue }) {
    try {
      const response = await mainRequestTS.get('/getHelloPage'); //TODO mainRequest?? когда будет бек
      // console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }),
};
