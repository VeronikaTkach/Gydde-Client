import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Status } from '../constants/Status';
import { STATIC_TEXT } from '../constants/staticText';
import { staticText } from '../store/staticText/slice';

export function useStaticText(pageName) {
  const staticTextName = `staticText${pageName}`;
  const staticTextStatusName = `staticTextStatus${pageName}`;

  const { [staticTextName]: textPage, [staticTextStatusName]: textStatus } =
    useSelector(staticText);

  const [text, setText] = useState(null);

  useEffect(() => {
    if (textStatus === Status.Resolved) {
      setText(textPage);
    } else if (textStatus === Status.Rejected) {
      setText(STATIC_TEXT[pageName]);
    }
  }, [textStatus]);

  return {
    text,
    textStatus,
  };
}
