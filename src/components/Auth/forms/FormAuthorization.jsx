import { useForm } from 'react-hook-form';
import { Button } from '../../ui/buttons/Button';
import { Google, Telegram, Twitter } from '../../profile/Accounts';
import { Input } from '../../ui/Input';
import { mailValidation, passwordValidation } from '../validations/regValidation';
import s from './style.module.scss';

export function FormAuthorization() {
  const { register, setValue, handleSubmit } = useForm({
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
        validation={{
          required: 'Required!',
          pattern: mailValidation,
          minLength: 6,
        }}
      />
      <Input
        className={s.form__field}
        placeholder={'Enter  password'}
        name={'password'}
        setValue={setValue}
        register={register}
        type={'password'}
        validation={{
          required: 'Required!',
          pattern: { value: passwordValidation },
          minLength: 6,
        }}
      />
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
