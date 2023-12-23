import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { showAuthorizationWindow } from '../../../core/store/slices/windowStateSlice';
import { Button } from '../../ui/buttons/Button';
import { Input } from '../../ui/Input';
import s from './style.module.scss';

export const mailValidation =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const nicknameValidation = /^[A-Za-z0-9_\-.@]+$/;
export const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])/;

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
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(showAuthorizationWindow(false));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={s.form__field}
        placeholder={'Enter email address'}
        name={'email'}
        setValue={setValue}
        register={register}
        validation={{
          required: 'Required!',
          pattern: {
            value: mailValidation,
            message: 'Enter a valid email address',
          },
          minLength: {
            value: 6,
            message: 'Email must be at least 6 characters long',
          },
        }}
      />
      {errors.email && <p className={s.form__error}>{errors.email.message}</p>}
      <Input
        className={s.form__field}
        placeholder={'Enter nickname'}
        name={'userName'}
        setValue={setValue}
        register={register}
        validation={{
          required: 'Required!',
          pattern: {
            value: nicknameValidation,
          },
          maxLength: 20,
        }}
      />
      {errors.userName && <p className={s.form__error}>{errors.userName.message}</p>}
      <Input
        className={s.form__field}
        placeholder={'Enter password'}
        name={'password'}
        setValue={setValue}
        register={register}
        type={'password'}
        validation={{
          required: 'Required!',
          pattern: {
            value: passwordValidation,
            message:
              'The password must contain Latin characters, special characters, numbers',
          },
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters long',
          },
          maxLength: {
            value: 30,
            message: 'Password must be no more than 30 characters',
          },
        }}
      />
      {errors.password && <p className={s.form__error}>{errors.password.message}</p>}
      <Input
        className={s.form__field}
        placeholder={'Confirm password'}
        name={'confirmPassword'}
        setValue={setValue}
        register={register}
        type={'password'}
        validation={{
          required: 'Required!',
          pattern: {
            value: passwordValidation,
          },
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters long',
          },
          maxLength: {
            value: 30,
            message: 'Password must be no more than 30 characters',
          },
          validate: (value) => value === getValues('password') || 'Passwords don\'t match'
        }}
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
