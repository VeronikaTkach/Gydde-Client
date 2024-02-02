import cn from 'classnames';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { PageName } from '../../../../../core/constants/PageNames';
import { Status } from '../../../../../core/constants/Status';
import { STATIC_TEXT } from '../../../../../core/constants/staticText';
import { allAuth, clearError } from '../../../../../core/store/auth/slice';
import { showSetPasswordWindow } from '../../../../../core/store/slices/modalWindowStateSlice';
import { passwordValidation } from '../../../../Auth/validations/registerValidation';
import { Input } from '../../../../ui/Input';
import { ButtonWithBorder } from '../../../../ui/buttons/Button';
import { ModalWithClose, ModalWithBorderShadow } from '../../../../ui/modals/windows';
import s from '../style.module.scss';

export const styles = {
  maxWidth: 748,
  minHeight: 298,
  padding: '36px 60px',
  top: 4,
};

export function SetPasswordPopup({ text }) {
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

  const [passwordWatch, passwordRepeatWatch] = watch(['password', 'passwordRepeat']);

  const passwordRepeatValidation = {
    required: true,
    validate: (value) =>
      value === passwordWatch ||
      text?.passwordRepeatErrorText ||
      STATIC_TEXT[PageName.ProfileSettings].passwordRepeatErrorText,
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
    e.preventDefault();
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showSetPasswordWindow(false))}
      styles={styles}>
      <div>
        <div className={cn(s.title)}>
          {text?.setPassTitle || STATIC_TEXT[PageName.ProfileSettings].setPassTitle}
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__inputs}>
            <div className={s.form__input}>
              <Input
                classError={errors.password}
                placeholder={
                  text?.fieldEnterPass ||
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
                classError={errors.passwordRepeat}
                placeholder={
                  text?.fieldRepeatPass ||
                  STATIC_TEXT[PageName.ProfileSettings].fieldRepeatPass
                }
                name={'passwordRepeat'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordRepeatValidation}
              />
              {(errors.passwordRepeat || errorType) && (
                <p className={s.form__error}>
                  {errors.passwordRepeat.message ||
                    text?.passwordErrorText ||
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
            {text?.btnSave || STATIC_TEXT[PageName.ProfileSettings].btnSave}
          </ButtonWithBorder>
        </form>
      </div>
    </ModalWithClose>
  );
}
