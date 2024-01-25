import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import s from '../style.module.scss';
import { ButtonWithBorder } from '../../../../ui/buttons/Button';
import { STATIC_TEXT } from '../../../../../core/constants/staticText';
import { PageName } from '../../../../../core/constants/PageNames';
import ModalWithClose from '../../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../../ui/modals/Modal/ModalWithBorder';
import { showSetPasswordWindow } from '../../../../../core/store/slices/modalWindowStateSlice';
import { Input } from '../../../../ui/Input';
import { LoaderForButtons } from '../../../../ui/loaders/LoaderForButtons';
import { passwordValidation } from '../../../../Auth/validations/registerValidation';

export function SetPasswordPopup({ staticTextProfileSettings }) {
  const dispatch = useDispatch();

  const loading = false; //TODO переделать

  const styles = {
    maxWidth: 748,
    minHeight: 298,
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
      onClose={() => dispatch(showSetPasswordWindow(false))}
      styles={styles}>
      <div>
        <div className={cn(s.title)}>
          {staticTextProfileSettings?.setPassTitle ||
            STATIC_TEXT[PageName.ProfileSettings].setPassTitle}
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__inputs}>
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
            {errors.password && (
              <p className={s.form__error}>{errors.password.message}</p>
            )}
            <Input
              classError={errors.password}
              placeholder={
                staticTextProfileSettings?.fieldRepeatPass ||
                STATIC_TEXT[PageName.ProfileSettings].fieldRepeatPass
              }
              name={'passwordConfirm'}
              setValue={setValue}
              register={register}
              type={'password'}
              validation={passwordValidation}
            />
            {errors.passwordConfirm && (
              <p className={s.form__error}>{errors.passwordConfirm.message}</p>
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
      </div>
    </ModalWithClose>
  );
}
