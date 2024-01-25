import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ButtonWithBorder } from '../../ui/buttons/Button';
import { Input } from '../../ui/Input';
import {
  mailValidation as mailValidationWithoutMessage,
  passwordValidation,
} from '../validations/registerValidation';
import { allAuthorization, clearError } from '../../../core/store/auth/slice';
import cn from 'classnames';
import s from './style.module.scss';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { staticTextHelper } from '../../../core/helpers/staticTextHelper';
import { Status } from '../../../core/constants/Status';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { PageName } from '../../../core/constants/PageNames';
import { authorization } from '../../../core/store/auth/thunk';

export function Email() {
  const dispatch = useDispatch();
  const { staticTextMailAuthorization, staticTextStatusMailAuthorization } =
    useSelector(staticText);
  const { status, errorType } = useSelector(allAuthorization);
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
    dispatch(getStaticText.basic(TEXT_KEYS.MAIL_AUTHORIZATION));

    return () => {
      dispatch(removeUnusedStaticText(PageName.MailAuthorization));
    };
  }, []);

  useEffect(() => {
    if (staticTextStatusMailAuthorization === Status.Resolved) {
      const convertedMailValidation = staticTextHelper.convertToValidation(
        staticTextMailAuthorization.mailErrorText,
        mailValidationWithoutMessage
      );

      setMailValidation(convertedMailValidation);
    }
  }, [staticTextStatusMailAuthorization]);

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
    dispatch(authorization.mail(data));
  };

  return (
    <>
      {staticTextMailAuthorization && (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__block}>
            <div className={cn(s.input__title)}>
              {staticTextMailAuthorization.mailLabel}
            </div>
            <div className={s.input__block}>
              <Input
                classError={errors.email}
                placeholder={staticTextMailAuthorization.mailPlaceholder}
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
              {staticTextMailAuthorization.passwordLabel}
            </div>
            <div className={s.input__block}>
              <Input
                classError={errors.password}
                placeholder={staticTextMailAuthorization.passwordPlaceholder}
                name={'password'}
                setValue={setValue}
                register={register}
                type={'password'}
                validation={passwordValidation}
              />
              {errorType && (
                <p className={s.form__error}>
                  {staticTextMailAuthorization.passwordErrorText}
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
              {staticTextMailAuthorization.button}
            </ButtonWithBorder>
          </div>
        </form>
      )}
    </>
  );
}
