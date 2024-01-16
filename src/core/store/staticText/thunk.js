import { createAsyncThunk } from '@reduxjs/toolkit';
import mainRequest from '../../utils/mainRequestUtils';
import { staticTextHelper } from '../../helpers/staticTextHelper';

export const getStaticText = {
  basic: createAsyncThunk('staticText/basic', async function (keys, { rejectWithValue }) {
    try {
      const response = await mainRequest.get('/getText', { keys: keys });

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
};
