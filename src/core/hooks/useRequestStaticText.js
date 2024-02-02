import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TEXT_KEYS } from '../constants/textKeys';
import { removeUnusedStaticText } from '../store/staticText/slice';
import { getStaticText } from '../store/staticText/thunk';
import { useStaticText } from './useStaticText';

export function useRequestStaticText(pageName) {
  const dispatch = useDispatch();
  const { text, textStatus } = useStaticText(pageName);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS[pageName]));

    return () => {
      dispatch(removeUnusedStaticText(pageName));
    };
  }, []);

  return {
    text,
    textStatus,
  };
}
