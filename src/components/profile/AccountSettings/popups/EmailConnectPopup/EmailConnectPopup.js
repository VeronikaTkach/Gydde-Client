import cn from 'classnames';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import google from '../../../../../assets/images/google.svg';
import { PageName } from '../../../../../core/constants/PageNames';
import { Status } from '../../../../../core/constants/Status';
import { STATIC_TEXT } from '../../../../../core/constants/staticText';
import { staticTextHelper } from '../../../../../core/helpers/staticTextHelper';
import { allAuth, clearError } from '../../../../../core/store/auth/slice';
import { showEmailConnectWindow } from '../../../../../core/store/slices/modalWindowStateSlice';
import {
  mailValidation as mailValidationWithoutMessage,
  passwordValidation,
} from '../../../../Auth/validations/registerValidation';
import { Input } from '../../../../ui/Input';
import { ButtonWithBorder } from '../../../../ui/buttons/Button';
import { SocialButton } from '../../../../ui/buttons/SocialButton/SocialButton';
import { ModalWithClose, ModalWithBorderShadow } from '../../../../ui/modals/windows';
import s from '../style.module.scss';

export function EmailConnectPopup({ text }) {
  const dispatch = useDispatch();
  const { status, errorType } = useSelector(allAuth);
  const [mailValidation, setMailValidation] = useState(mailValidationWithoutMessage);

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

  const [emailWatch, passwordWatch] = watch(['email', 'password']);

  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (text) {
      const convertedMailValidation = staticTextHelper.convertToValidation(
        text?.mailErrorText || STATIC_TEXT[PageName.ProfileSettings].mailErrorText,
        mailValidationWithoutMessage
      );
      setMailValidation(convertedMailValidation);
    }
  }, [text]);

  useEffect(() => {
    if (Object.keys(errors).length && errorType) {
      clearErrors(['email', 'password']);
      dispatch(clearError());
    } else if (errorType) {
      setError('email');
      setError('password');
    }
  }, [errorType, emailWatch, passwordWatch]);

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showEmailConnectWindow(false))}
      className={s.modal}>
      <div>
        <div className={cn(s.modal__title)}>
          {text?.editMailTitle || STATIC_TEXT[PageName.ProfileSettings].editMailTitle}
        </div>
        <form className={cn(s.modal__form, s.form)} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__inputs}>
            <div className={s.form__input}>
              <Input
                classError={errors.email}
                placeholder={
                  text?.fieldMail || STATIC_TEXT[PageName.ProfileSettings].fieldMail
                }
                name={'email'}
                setValue={setValue}
                register={register}
                type={'email'}
                validation={mailValidation}
              />
              {errors.email && <p className={s.form__error}>{errors.email.message}</p>}
            </div>
            <div className={s.form__input}>
              <Input
                classError={errors.password}
                placeholder={
                  text?.fieldPass || STATIC_TEXT[PageName.ProfileSettings].fieldPass
                }
                name={'password'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
              {errorType && (
                <p className={s.form__error}>
                  {text?.passwordErrorText ||
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
        <div className={cn(s.social)}>
          <div className={cn(s.social__title)}>
            {text?.connectSocial || STATIC_TEXT[PageName.ProfileSettings].connectSocial}
          </div>
          <SocialButton
            iconImg={google}
            text={
              text?.socialGoogle || STATIC_TEXT[PageName.ProfileSettings].socialGoogle
            }
            alt={text?.socialGoogle || STATIC_TEXT[PageName.ProfileSettings].socialGoogle}
          />
        </div>
      </div>
    </ModalWithClose>
  );
}
