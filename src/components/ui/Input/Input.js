import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../buttons/Button';

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
          className={cn(
            s.field__input,
            { [s.field__input_error]: props.classError },
            props.className
          )}
          type={typeInput || 'text'}
          accept={props.accept}
          placeholder={props.placeholder}
          disabled={props.disabled}
          pattern={props.pattern}
          name={props.name}
          autoComplete={props.autoComplete || 'on'}
          onInput={handleChange}
          {...(props.name ? {} : { value: inputValue })}
          {...(props.register ? { ...props.register(props.name, props.validation) } : '')}
        />
      )}
      {props.type === 'password' && (
        <Button
          className={cn(
            s.field__password,
            { [s.field__password_error]: props.classError },
            {
              [cn(s.field__password_empty, 'iconError')]: !inputValue && props.classError,
            },
            { [cn(s.field__password_show, 'iconEyeOpen')]: typeInput === 'text' },
            { ['iconEyeClose']: inputValue }
          )}
          type={'button'}
          onClick={showPassword}></Button>
      )}
      {props.type === 'email' && props.classError && (
        <div className={cn(s.field__email_error, 'iconError')}></div>
      )}
    </div>
  );
}
