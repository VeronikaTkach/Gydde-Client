import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import s from './style.module.scss';
import { ButtonWithBorder } from '../../../ui/buttons/Button';
import { STATIC_TEXT } from '../../../../core/constants/staticTex';
import { PageName } from '../../../../core/constants/PageNames';
import ModalWithClose from '../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../ui/modals/Modal/ModalWithBorder';
import { showUsernameEditWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import { Input } from '../../../ui/Input';
import { LoaderForButtons } from '../../../ui/loaders/LoaderForButtons';

export function UsernameEditPopup({ staticTextProfileSettings }) {
  const dispatch = useDispatch();

  const loading = false; //TODO переделать

  const styles = {
    maxWidth: 546,
    minHeight: 292,
    padding: '46px 60px',
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
      onClose={() => dispatch(showUsernameEditWindow(false))}
      styles={styles}>
      <div className={cn(s.username)}>
        <div className={cn(s.username__title)}>
          {staticTextProfileSettings?.editNameTitle ||
            STATIC_TEXT[PageName.ProfileSettings].editNameTitle}
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.form__input}
            classError={errors.username} //TODO переделать для юзернейма
            placeholder={
              staticTextProfileSettings?.fieldName ||
              STATIC_TEXT[PageName.ProfileSettings].fieldName
            }
            name={'username'}
            setValue={setValue}
            register={register}
            // validation={nicknameValidation}
          />
          {errors.username && <p className={s.form__error}>{errors.username.message}</p>}
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
