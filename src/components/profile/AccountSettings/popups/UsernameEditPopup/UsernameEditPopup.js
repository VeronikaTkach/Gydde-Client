import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { PageName } from '../../../../../core/constants/PageNames';
import { Status } from '../../../../../core/constants/Status';
import { STATIC_TEXT } from '../../../../../core/constants/staticText';
import { allAuth } from '../../../../../core/store/auth/slice';
import { showUsernameEditWindow } from '../../../../../core/store/slices/modalWindowStateSlice';
import { Input } from '../../../../ui/Input';
import { ButtonWithBorder } from '../../../../ui/buttons/Button';
import { ModalWithClose, ModalWithBorderShadow } from '../../../../ui/modals/windows';
import s from '../style.module.scss';

export function UsernameEditPopup({ text }) {
  const dispatch = useDispatch();
  const { status } = useSelector(allAuth);

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
    e.preventDefault();
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showUsernameEditWindow(false))}
      styles={styles}>
      <div>
        <div className={cn(s.title)}>
          {text?.editNameTitle || STATIC_TEXT[PageName.ProfileSettings].editNameTitle}
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.input}
            classError={errors.username} //TODO переделать для юзернейма
            placeholder={
              text?.fieldName || STATIC_TEXT[PageName.ProfileSettings].fieldName
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
            disabled={status === Status.Loading}
            isLoading={status === Status.Loading}>
            {text?.btnSave || STATIC_TEXT[PageName.ProfileSettings].btnSave}
          </ButtonWithBorder>
        </form>
      </div>
    </ModalWithClose>
  );
}
