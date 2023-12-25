import { useForm } from 'react-hook-form';
import { Button } from '../../ui/buttons/Button';
import { Telegram } from '../../profile/Accounts';
import { Input } from '../../ui/Input';
import {
  mailValidation,
  passwordValidation
} from '../validations/registerValidation';
// import ApiClient from '../../../core/api/api';
import s from './style.module.scss';
import { Google } from '../Google';
import { Twitter } from '../Twitter';

export function FormAuthorization() {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm({
    mode: 'all',
    defaultValues: {
      isRemember: false, //для чекбокса запомнить данные (должен быть)
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
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
        placeholder={'Enter  password'}
        name={'password'}
        setValue={setValue}
        register={register}
        type={'password'}
        validation={passwordValidation}
      />
      {errors.password && <p className={s.form__error}>{errors.password.message}</p>}
      <div className={s.form__link}>Forgot password?</div>
      <div className={s.accounts__list}>
        <Google />
        <Twitter />
        <Telegram />
      </div>
      <Button className={s.form__btnSubmit} type={'submit'}>
        Log in
      </Button>
    </form>
  );
}
