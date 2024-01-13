import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { showAuthorizationWindow } from '../../../core/store/slices/modalWindowStateSlice';
import { Button } from '../../ui/buttons/Button';
import { Input } from '../../ui/Input';
import { mailValidation, passwordValidation } from '../validations/registerValidation';
import { authorizedUser } from '../../../core/store/slices/authorizationSlice';
import cn from 'classnames';
import s from './style.module.scss';

export function FormAuthorization() {
  const [loading, setLoading] = useState(false);
  const { error } = useSelector((state) => state.authorization);
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      isRemember: false, //для чекбокса запомнить данные (должен быть)
    },
  });

  const onSubmit=(data, e) => {
    e.preventDefault();
    dispatch(showAuthorizationWindow(true));
    dispatch(authorizedUser(data));
    setLoading(true);
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form__block}>
          <div className={cn(s.input__title)}>Email address</div>
          <div className={s.input__block}>
            <Input
              classError={errors.email}
              placeholder={'Enter email address'}
              name={'email'}
              setValue={setValue}
              register={register}
              type={'email'}
              validation={mailValidation}
            />
            {errors.email && <p className={s.form__error}>{errors.email.message}</p>}
          </div>
        </div>
        <div className={s.form__block}>
          <div className={cn(s.input__title)}>Password</div>
          <div className={s.input__block}>
            <Input
              classError={errors.password}
              placeholder={'Enter  password'}
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
        </div>
        <div className={s.form__btn}>
          <Button className={s.form__btn_submit} type={'submit'} disabled={loading}>
            {loading ? 'iconLoader' : 'Log in'}
          </Button>
        </div>
      </form>
    </>
  );
}
