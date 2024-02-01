import cn from 'classnames';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { PageName } from '../../../../../core/constants/PageNames';
import { Status } from '../../../../../core/constants/Status';
import { STATIC_TEXT } from '../../../../../core/constants/staticText';
import { allAuth, clearError } from '../../../../../core/store/auth/slice';
import { showChangePasswordWindow } from '../../../../../core/store/slices/modalWindowStateSlice';
import { passwordValidation } from '../../../../Auth/validations/registerValidation';
import { Input } from '../../../../ui/Input';
import { ButtonWithBorder } from '../../../../ui/buttons/Button';
import ModalWithBorderShadow from '../../../../ui/modals/Modal/ModalWithBorder';
import ModalWithClose from '../../../../ui/modals/Modal/ModalWithClose';
import { styles } from '../SetPasswordPopup';
import s from '../style.module.scss';

export function ChangePasswordPopup({ text }) {
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
    e.preventDefault();
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showChangePasswordWindow(false))}
      styles={styles}>
      <div>
        <div className={cn(s.title)}>
          {text?.changePassTitle || STATIC_TEXT[PageName.ProfileSettings].changePassTitle}
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__inputs}>
            <div className={s.form__input}>
              <Input
                classError={errors.password}
                placeholder={
                  text?.fieldLastPass ||
                  STATIC_TEXT[PageName.ProfileSettings].fieldLastPass
                }
                name={'password'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
              {errorType && (
                <p className={s.form__error}>
                  {text?.passwordLastErrorText ||
                    STATIC_TEXT[PageName.ProfileSettings].passwordLastErrorText}
                </p>
              )}
            </div>
            <div className={s.form__input}>
              <Input
                classError={errors.password}
                placeholder={
                  text?.fieldNewPass || STATIC_TEXT[PageName.ProfileSettings].fieldNewPass
                }
                name={'passwordNew'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
              {errorType && (
                <p className={s.form__error}>
                  {text?.passwordNewErrorText ||
                    STATIC_TEXT[PageName.ProfileSettings].passwordNewErrorText}
                </p>
              )}
            </div>
          </div>
          <ButtonWithBorder
            className={cn(s.form__btn)}
            type={'submit'}
            disabled={status === Status.Loading}
            isLoading={status === Status.Loading}>
            {text?.btnSave || STATIC_TEXT[PageName.ProfileSettings].btnSave}
          </ButtonWithBorder>
        </form>
      </div>
    </ModalWithClose>
  );
}
