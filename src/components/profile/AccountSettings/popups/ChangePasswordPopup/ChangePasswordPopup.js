import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import s from '../style.module.scss';
import { ButtonWithBorder } from '../../../../ui/buttons/Button';
import ModalWithClose from '../../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../../ui/modals/Modal/ModalWithBorder';
import { showChangePasswordWindow } from '../../../../../core/store/slices/modalWindowStateSlice';
import { Input } from '../../../../ui/Input';
import { passwordValidation } from '../../../../Auth/validations/registerValidation';
import { styles } from '../SetPasswordPopup';
import { Status } from '../../../../../core/constants/Status';
import { allAuth, clearError } from '../../../../../core/store/auth/slice';

export function ChangePasswordPopup({ staticTextProfileSettings }) {
  const dispatch = useDispatch();
  const { status, errorType } = useSelector(allAuth);

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const [passwordWatch, passwordNewWatch] = watch(['password', 'passwordNew']);

  useEffect(() => {
    if (Object.keys(errors).length && errorType) {
      clearErrors(['password', 'passwordNew']);
      dispatch(clearError());
    } else if (errorType) {
      setError('password');
      setError('passwordNew');
    }
  }, [errorType, passwordWatch, passwordNewWatch]);

  const onSubmit = (data, e) => {
    // e.preventDefault();
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showChangePasswordWindow(false))}
      styles={styles}>
      <div>
        <div className={cn(s.title)}>{staticTextProfileSettings?.changePassTitle}</div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__inputs}>
            <div className={s.form__input}>
              <Input
                classError={errors.password}
                placeholder={staticTextProfileSettings?.fieldLastPass}
                name={'password'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
              {errorType && (
                <p className={s.form__error}>
                  {staticTextProfileSettings?.passwordLastErrorText}
                </p>
              )}
            </div>
            <div className={s.form__input}>
              <Input
                classError={errors.password}
                placeholder={staticTextProfileSettings?.fieldNewPass}
                name={'passwordNew'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
              {errorType && (
                <p className={s.form__error}>
                  {staticTextProfileSettings?.passwordNewErrorText}
                </p>
              )}
            </div>
          </div>
          <ButtonWithBorder
            className={cn(s.form__btn)}
            type={'submit'}
            disabled={status === Status.Loading}
            isLoading={status === Status.Loading}>
            {staticTextProfileSettings?.btnSave}
          </ButtonWithBorder>
        </form>
      </div>
    </ModalWithClose>
  );
}
