import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { STATIC_TEXT } from '../../../../core/constants/staticTex';
import { PageName } from '../../../../core/constants/PageNames';
import { showEmailConnectWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import { ButtonWithBorder } from '../../../ui/buttons/Button';
import ModalWithClose from '../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../ui/modals/Modal/ModalWithBorder';
import { Input } from '../../../ui/Input';
import {
  mailValidation,
  passwordValidation,
} from '../../../Auth/validations/registerValidation';
import { LoaderForButtons } from '../../../ui/loaders/LoaderForButtons';
import { SocialButton } from '../../../ui/buttons/SocialButton/SocialButton';
import google from '../../../../assets/images/google.svg';
import s from './style.module.scss';

export function EmailConnectPopup({ staticTextProfileSettings }) {
  const dispatch = useDispatch();

  const loading = false; //TODO переделать, получать из стора, когда будут запросы на апи

  const styles = {
    maxWidth: 748,
    minHeight: 496,
    padding: '36px 60px',
    top: 4,
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data, e) => {
    // e.preventDefault();
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showEmailConnectWindow(false))}
      styles={styles}>
      <div className={cn(s.emailConnect)}>
        <div className={cn(s.emailConnect__title)}>
          {staticTextProfileSettings?.editMailTitle ||
            STATIC_TEXT[PageName.ProfileSettings].editMailTitle}
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__inputs}>
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
            {errors.password && (
              <p className={s.form__error}>{errors.password.message}</p>
            )}
          </div>
          <ButtonWithBorder
            className={cn(s.form__btn)}
            type={'submit'}
            disabled={loading}>
            {loading ? (
              <LoaderForButtons />
            ) : (
              staticTextProfileSettings?.btnSave ||
              STATIC_TEXT[PageName.ProfileSettings].btnSave
            )}
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
