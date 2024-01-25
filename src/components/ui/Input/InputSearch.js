import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../buttons/Button';

export function InputSearch(props) {
  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cn(s.field, s.inputQuest)}>
      {!props.format && (
        <input
          className={cn(s.field__input, s.field__input_search)}
          type={'text'}
          accept={props.accept}
          placeholder={props.placeholder}
          disabled={props.disabled}
          pattern={props.pattern}
          name={props.name}
          autoComplete={props.autoComplete || 'off'}
          onInput={handleChange}
        />
      )}
    </div>
  );
}
