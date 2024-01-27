import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { showEmailConnectWindow } from '../../../../../core/store/slices/modalWindowStateSlice';
import { ButtonWithBorder } from '../../../../ui/buttons/Button';
import ModalWithClose from '../../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../../ui/modals/Modal/ModalWithBorder';
import { Input } from '../../../../ui/Input';
import {
  mailValidation as mailValidationWithoutMessage,
  passwordValidation,
} from '../../../../Auth/validations/registerValidation';
import { SocialButton } from '../../../../ui/buttons/SocialButton/SocialButton';
import google from '../../../../../assets/images/google.svg';
import s from '../style.module.scss';
import { allAuth, clearError } from '../../../../../core/store/auth/slice';
import { Status } from '../../../../../core/constants/Status';
import { staticTextHelper } from '../../../../../core/helpers/staticTextHelper';
import { STATIC_TEXT } from '../../../../../core/constants/staticText';
import { PageName } from '../../../../../core/constants/PageNames';

export function EmailConnectPopup({
  staticTextProfileSettings,
  staticTextStatusProfileSettings,
}) {
  const dispatch = useDispatch();
  const { status, errorType } = useSelector(allAuth);
  const [mailValidation, setMailValidation] = useState(mailValidationWithoutMessage);

  const styles = {
    maxWidth: 748,
    minHeight: 398,
    padding: '36px 60px',
    top: 4,
  };

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
    // e.preventDefault();
  };

  useEffect(() => {
    if (staticTextStatusProfileSettings === Status.Resolved) {
      const convertedMailValidation = staticTextHelper.convertToValidation(
        staticTextProfileSettings?.mailErrorText ||
          STATIC_TEXT[PageName.ProfileSettings].mailErrorText,
        mailValidationWithoutMessage
      );
      setMailValidation(convertedMailValidation);
    }
  }, [staticTextStatusProfileSettings]);

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
      styles={styles}>
      <div>
        <div className={cn(s.title)}>
          {staticTextProfileSettings?.editMailTitle ||
            STATIC_TEXT[PageName.ProfileSettings].editMailTitle}
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__inputs}>
            <div className={s.form__input}>
              <Input
                classError={errors.email}
                placeholder={
                  staticTextProfileSettings?.fieldMail ||
                  STATIC_TEXT[PageName.ProfileSettings].fieldMail
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
                  staticTextProfileSettings?.fieldPass ||
                  STATIC_TEXT[PageName.ProfileSettings].fieldPass
                }
                name={'password'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
              {errorType && (
                <p className={s.form__error}>
                  {staticTextProfileSettings?.passwordErrorText ||
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
        <div className={cn(s.social)}>
          <div className={cn(s.social__title)}>
            {staticTextProfileSettings?.connectSocial ||
              STATIC_TEXT[PageName.ProfileSettings].connectSocial}
          </div>
          <SocialButton
            iconImg={google}
            text={
              staticTextProfileSettings?.socialGoogle ||
              STATIC_TEXT[PageName.ProfileSettings].socialGoogle
            }
            alt={
              staticTextProfileSettings?.socialGoogle ||
              STATIC_TEXT[PageName.ProfileSettings].socialGoogle
            }
          />
        </div>
      </div>
    </ModalWithClose>
  );
}
