import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { showAuthorizationWindow } from '../../../core/store/slices/windowStateSlice';
import { Button } from '../../ui/buttons/Button';
import { Input } from '../../ui/Input';
import {
  mailValidation,
  nicknameValidation,
  passwordValidation,
} from '../validations/registerValidation';
import s from './style.module.scss';
import { registerUser } from '../../../core/store/slices/registrationSlice';

export function FormRegister() {
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      isRemember: false,
    },
    shouldUnregister: true,
  });

  passwordValidation.validate = (value) =>
    value === getValues('password') || 'Passwords do not match';

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(showAuthorizationWindow(false));
    delete data.confirmPassword;
    dispatch(registerUser(data));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={s.form__field}
        placeholder={'Enter email address'}
        name={'email'}
        setValue={setValue}
        register={register}
        validation={mailValidation}
      />
      {errors.email && <p className={s.form__error}>{errors.email.message}</p>}
      <Input
        className={s.form__field}
        placeholder={'Enter nickname'}
        name={'userName'}
        setValue={setValue}
        register={register}
        validation={nicknameValidation}
      />
      {errors.userName && <p className={s.form__error}>{errors.userName.message}</p>}
      <Input
        className={s.form__field}
        placeholder={'Enter password'}
        name={'password'}
        setValue={setValue}
        register={register}
        type={'password'}
        validation={passwordValidation}
      />
      {errors.password && <p className={s.form__error}>{errors.password.message}</p>}
      <Input
        className={s.form__field}
        placeholder={'Confirm password'}
        name={'confirmPassword'}
        setValue={setValue}
        register={register}
        type={'password'}
        validation={passwordValidation}
      />
      {errors.confirmPassword && (
        <p className={s.form__error}>{errors.confirmPassword.message}</p>
      )}
      <Button className={s.form__btnSubmit} type='submit'>
        Sign up
      </Button>
    </form>
  );
}
