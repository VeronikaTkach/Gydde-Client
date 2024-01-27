import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import s from '../style.module.scss';
import { ButtonWithBorder } from '../../../../ui/buttons/Button';
import ModalWithClose from '../../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../../ui/modals/Modal/ModalWithBorder';
import { showSetPasswordWindow } from '../../../../../core/store/slices/modalWindowStateSlice';
import { Input } from '../../../../ui/Input';
import { passwordValidation } from '../../../../Auth/validations/registerValidation';
import { allAuth, clearError } from '../../../../../core/store/auth/slice';
import { Status } from '../../../../../core/constants/Status';
import { STATIC_TEXT } from '../../../../../core/constants/staticText';
import { PageName } from '../../../../../core/constants/PageNames';

export const styles = {
  maxWidth: 748,
  minHeight: 298,
  padding: '36px 60px',
  top: 4,
};

export function SetPasswordPopup({ staticTextProfileSettings }) {
  const dispatch = useDispatch();
  const { status, errorType } = useSelector(allAuth);

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const [passwordWatch, passwordRepeatWatch] = watch(['password', 'passwordRepeat']);

  passwordValidation.validate = (value) => {
    value === getValues('password') ||
      staticTextProfileSettings?.passwordRepeatErrorText ||
      STATIC_TEXT[PageName.ProfileSettings].passwordRepeatErrorText;
  };

  useEffect(() => {
    if (Object.keys(errors).length && errorType) {
      clearErrors(['password', 'passwordRepeat']);
      dispatch(clearError());
    } else if (errorType) {
      setError('password');
      setError('passwordRepeat');
    }
  }, [errorType, passwordWatch, passwordRepeatWatch]);

  const onSubmit = (data, e) => {
    // e.preventDefault();
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showSetPasswordWindow(false))}
      styles={styles}>
      <div>
        <div className={cn(s.title)}>
          {staticTextProfileSettings?.setPassTitle ||
            STATIC_TEXT[PageName.ProfileSettings].setPassTitle}
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__inputs}>
            <div className={s.form__input}>
              <Input
                classError={errors.password}
                placeholder={
                  staticTextProfileSettings?.fieldEnterPass ||
                  STATIC_TEXT[PageName.ProfileSettings].fieldEnterPass
                }
                name={'password'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
            </div>
            <div className={s.form__input}>
              <Input
                classError={errors.password}
                placeholder={
                  staticTextProfileSettings?.fieldRepeatPass ||
                  STATIC_TEXT[PageName.ProfileSettings].fieldRepeatPass
                }
                name={'passwordRepeat'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
              {(errors.passwordRepeat || errorType) && (
                <p className={s.form__error}>
                  {errors.passwordRepeat.message ||
                    staticTextProfileSettings?.passwordErrorText ||
                    STATIC_TEXT[PageName.ProfileSettings].passwordErrorText}
                </p>
              )}
            </div>
          </div>
          <ButtonWithBorder
            className={cn(s.form__btn)}
            type={'submit'}
            disabled={status === Status.Loading}
            isLoading={status === Status.Loading}>
            {staticTextProfileSettings?.btnSave ||
              STATIC_TEXT[PageName.ProfileSettings].btnSave}
          </ButtonWithBorder>
        </form>
      </div>
    </ModalWithClose>
  );
}
