import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

export function Input(props) {
  const [inputValue, setInputValue] = React.useState(props.defaultValue || '');
  const [typeInput, setTypeInput] = React.useState(props.type);

  const handleChange = (e) => {
    e.preventDefault();

    if (props.type === 'number') {
      setInputValue(e.target.value.replace(/\D/g, ''));
    } else {
      setInputValue(e.target.value);
    }
  };

  const showPassword = (e) => {
    e.preventDefault();
    setTypeInput(typeInput === 'password' ? 'text' : 'password');
  };

  return (
    <div className={cn(s.field, { [s.field_error]: props.classError }, props.className)}>
      {!props.format && (
        <input
          className={s.field__input}
          type={typeInput || 'text'}
          accept={props.accept}
          placeholder={props.placeholder}
          disabled={props.disabled}
          pattern={props.pattern}
          name={props.name}
          autoComplete={props.autoComplete || 'off'}
          onChange={props.onChange || handleChange}
          {...(props.name ? {} : { value: inputValue })}
          {...(props.register ? { ...props.register(props.name, props.validation) } : '')}
        />
      )}
      {props.type === 'password' && (
        <button
          className={cn(s.field__password, 'icon_eye_close', {
            [cn(s.field__password_show, 'icon_eye_open')]: typeInput === 'text',
          })}
          type={'button'}
          onClick={showPassword}></button>
      )}
    </div>
  );
}
