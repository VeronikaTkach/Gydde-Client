import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { staticTextHelper } from '../../../core/helpers/staticTextHelper';
import { useRequestStaticText } from '../../../core/hooks/useRequestStaticText';
import { allAuth, clearError } from '../../../core/store/auth/slice';
import { authRequest } from '../../../core/store/auth/thunk';
import { Input } from '../../ui/Input';
import { ButtonWithBorder } from '../../ui/buttons/Button';
import {
  mailValidation as mailValidationWithoutMessage,
  passwordValidation,
} from '../validations/registerValidation';
import s from './style.module.scss';

export function Email() {
  const dispatch = useDispatch();
  const { text } = useRequestStaticText(PageName.MailAuthorization);
  const { status, errorType } = useSelector(allAuth);
  const [mailValidation, setMailValidation] = useState(mailValidationWithoutMessage);

  const {
    register,
    setValue,
    setError,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const [emailWatch, passwordWatch] = watch(['email', 'password']);

  useEffect(() => {
    if (text) {
      const convertedMailValidation = staticTextHelper.convertToValidation(
        text.mailErrorText,
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

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(authRequest.mail(data));
  };

  return (
    <>
      {text && (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__block}>
            <div className={cn(s.input__title)}>
              {text.mailLabel || STATIC_TEXT[PageName.MailAuthorization].mailLabel}
            </div>
            <div className={s.input__block}>
              <Input
                classError={errors.email}
                placeholder={
                  text.mailPlaceholder ||
                  STATIC_TEXT[PageName.MailAuthorization].mailPlaceholder
                }
                name={'email'}
                setValue={setValue}
                register={register}
                type={'text'}
                validation={mailValidation}
              />
              {errors.email && <p className={s.form__error}>{errors.email.message}</p>}
            </div>
          </div>
          <div className={s.form__block}>
            <div className={cn(s.input__title)}>
              {text.passwordLabel ||
                STATIC_TEXT[PageName.MailAuthorization].passwordLabel}
            </div>
            <div className={s.input__block}>
              <Input
                classError={errors.password}
                placeholder={
                  text.passwordPlaceholder ||
                  STATIC_TEXT[PageName.MailAuthorization].passwordPlaceholder
                }
                name={'password'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
              {errorType && (
                <p className={s.form__error}>
                  {text.passwordErrorText ||
                    STATIC_TEXT[PageName.MailAuthorization].passwordErrorText}
                </p>
              )}
            </div>
          </div>
          <div className={s.form__btn}>
            <ButtonWithBorder
              className={cn(s.form__btn_submit)}
              type={'submit'}
              disabled={status === Status.Loading}
              isLoading={status === Status.Loading}>
              {text.button || STATIC_TEXT[PageName.MailAuthorization].button}
            </ButtonWithBorder>
          </div>
        </form>
      )}
    </>
  );
}
