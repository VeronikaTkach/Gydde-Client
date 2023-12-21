import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { showAuthorizationWindow } from '../../../core/store/slices/windowStateSlice';
import { Button } from '../../ui/buttons/Button';
import { Input } from '../../ui/Input';
import s from './style.module.scss';

export const mailValidation =
  '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/iu';
export const passwordValidation = /^[A-Za-z0-9_\-.@]+$/;

export function FormRegister() {
  const dispatch = useDispatch();
  const { register, setValue, handleSubmit } = useForm({
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
        nameField={'email'}
        setValue={setValue}
        register={register}
        validation={{
          required: 'Required!',
          pattern: mailValidation,
          minLength: 6,
        }}
      />
      <Input
        className={s.form__field}
        placeholder={'Enter nickname'}
        nameField={'first_name'}
        setValue={setValue}
        register={register}
        validation={{
          required: 'Required!',
          pattern: {
            value: passwordValidation,
          },
          maxLength: 20,
        }}
      />
      <Input
        className={s.form__field}
        placeholder={'Enter  new password'}
        nameField={'password'}
        setValue={setValue}
        register={register}
        type={'password'}
        validation={{
          required: 'Required!',
          pattern: {
            value: passwordValidation,
          },
          maxLength: 20,
        }}
      />
      <Button className={s.form__btnSubmit} type='submit'>
        Sign up
      </Button>
    </form>
  );
}
