import { createAsyncThunk } from '@reduxjs/toolkit';
import mainRequest from '../../utils/mainRequestUtils';

export const getStaticPageText = {
  //тут пишем новый запрос, копируем из "modalsThunk" пример, меняем имя запроса - готово
  yourPageName: createAsyncThunk(
    'staticPageText/metamaskConnect',//первая часть пути указывает на конкретный слайс редюсера
    //далее как в "modalsThunk"
  ),
  //тут пишем новый запрос, копируем верхний пример, меняем имя запроса - готово
};
