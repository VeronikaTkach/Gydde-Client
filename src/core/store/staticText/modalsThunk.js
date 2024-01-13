import { createAsyncThunk } from '@reduxjs/toolkit';
import mainRequest from '../../utils/mainRequestUtils';
import { staticTextHelper } from '../../helpers/staticTextHelper';

export const getStaticModalsText = {
  //комментарии TODO оставляем в каждом запросе пока не будет бек, чтобы потом ничего не пропустить
  metamaskConnect: createAsyncThunk(
    'staticModalsText/metamaskConnect', //имена должны совпадать
    async function (keys, { rejectWithValue }) {
      //почти обычный запрос с выбросом ошибки в стор
      try {
        const response = await mainRequest.get('/getText', { keys: keys }); //тут уже ничего не надо писать
        // console.log(response);

        // return response.data; //TODO раскомментировать когда будет бек

        //TODO удалить когда будет бек
        const data = keys.map((item) => {
          return { [item]: response.data[item] };
        });

        return staticTextHelper.convertKeys(data);
      } catch (error) {
        return rejectWithValue(error.message); //выбрасываем ошибку
      }
    }
  ),
  //тут пишем новый запрос, копируем верхний пример, меняем имя запроса - готово
};
