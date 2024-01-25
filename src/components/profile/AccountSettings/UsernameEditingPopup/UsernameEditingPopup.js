import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import s from './style.module.scss';
import { ButtonWithBorder } from '../../../ui/buttons/Button';
import { STATIC_TEXT } from '../../../../core/constants/staticText';
import { PageName } from '../../../../core/constants/PageNames';
import ModalWithClose from '../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../ui/modals/Modal/ModalWithBorder';
import {
  showEmailConnectWindow,
  showUsernameEditingWindow,
} from '../../../../core/store/slices/modalWindowStateSlice';
import { Input } from '../../../ui/Input';
import {
  mailValidation,
  passwordValidation,
} from '../../../Auth/validations/registerValidation';
import { LoaderForButtons } from '../../../ui/loaders/LoaderForButtons';
import { SocialButton } from '../../../ui/buttons/SocialButton/SocialButton';
import google from '../../../../assets/images/google.svg';

export function UsernameEditingPopup({ staticTextProfileSettings }) {
  const dispatch = useDispatch();

  const loading = false; //TODO переделать

  const styles = {
    maxWidth: 546,
    minHeight: 292,
    padding: '46px 60px',
    top: 0,
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      isRemember: false,
    },
  });

  const onSubmit = (data, e) => {
    // e.preventDefault();
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showUsernameEditingWindow(false))}
      styles={styles}>
      <div className={cn(s.username)}>
        <div className={cn(s.username__title)}>
          {staticTextProfileSettings?.editNameTitle ||
            STATIC_TEXT[PageName.ProfileSettings].editNameTitle}
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.form__input}
            classError={errors.email} //TODO переделать для юзернейма
            placeholder={
              staticTextProfileSettings?.fieldName ||
              STATIC_TEXT[PageName.ProfileSettings].fieldName
            }
            name={'email'}
            setValue={setValue}
            register={register}
            // type={'email'}
            validation={mailValidation}
          />
          {errors.email && <p className={s.form__error}>{errors.email.message}</p>}
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
      </div>
    </ModalWithClose>
  );
}
