import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { showAuthorizationWindow } from '../../../core/store/slices/modalWindowStateSlice';
import { Button } from '../../ui/buttons/Button';
import { Input } from '../../ui/Input';
import {
  mailValidation as mailValidationWithoutMessage,
  passwordValidation as passwordValidationWithoutMessage,
} from '../validations/registerValidation';
import { authorizedUser } from '../../../core/store/slices/mailAuthorizationSlice';
import cn from 'classnames';
import s from './style.module.scss';
import { staticText } from '../../../core/store/staticText/slice';
import { staticTextHelper } from '../../../core/helpers/staticTextHelper';
import { Status } from '../../../core/constants/Status';

export function FormAuthorization() {
  const dispatch = useDispatch();
  const { staticTextMailAuthorization, staticTextStatusMailAuthorization } =
    useSelector(staticText);
  // const { error } = useSelector((state) => state.authorization);
  const [mailValidation, setMailValidation] = useState(mailValidationWithoutMessage);
  const [loading, setLoading] = useState(false); //TODO только если временно! статус должен идти из стора при отправке запроса
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

  useEffect(() => {
    if (staticTextStatusMailAuthorization === Status.Resolved) {
      const convertedMailValidation = staticTextHelper.convertToValidation(
        staticTextMailAuthorization,
        mailValidationWithoutMessage
      );
      setMailValidation(convertedMailValidation);
    }
  }, [staticTextStatusMailAuthorization]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(showAuthorizationWindow(true));
    dispatch(authorizedUser(data));
    setLoading(true); //TODO перенести логику лоадера в стор, а то получается он не вырубится никогда
  };

  return (
    <>
      {staticTextMailAuthorization && (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form__block}>
            <div className={cn(s.input__title)}>
              {staticTextMailAuthorization.mailLabel}
            </div>
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
                // validation={passwordValidation}
              />
              {errors.password && (
                <p className={s.form__error}>{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className={s.form__btn}>
            <Button className={s.form__btn_submit} type={'submit'} disabled={loading}>
              {/* TODO тут текст кладётся. 'iconLoader' нужно в класс ставить */}
              {loading ? 'iconLoader' : 'Log in'}
            </Button>
          </div>
        </form>
      )}
    </>
  );
}
