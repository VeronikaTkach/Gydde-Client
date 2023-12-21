import React from 'react';
import { useDispatch } from 'react-redux';
import { showAuthorizationWindow } from '../../core/store/slices/windowStateSlice';
import { PopupWindow } from '../ui/PopupWindow';
import { Register, Authorization } from './';
import s from './style.module.scss';

export function Auth({ className }) {
  const dispatch = useDispatch();
  const [isAuthorizationForm, changeAuthorizationForm] = React.useState(true);

  return (
    <PopupWindow
      className={className}
      onCloseButton={() => dispatch(showAuthorizationWindow(false))}
      children={
        <div className={s.auth}>
          {isAuthorizationForm ? (
            <Authorization changeAuthorizationForm={changeAuthorizationForm} />
          ) : (
            <Register changeAuthorizationForm={changeAuthorizationForm} />
          )}
        </div>
      }
    />
  );
}
