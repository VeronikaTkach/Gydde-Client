import s from './style.module.scss';
import { FormRegister } from './forms';

export function Register({ changeAuthorizationForm }) {
  return (
    <>
      <div className={s.auth__info}>
        <div className={s.auth__title}>Sign in to in Cryptocaps</div>
        <div className={s.auth__description}>
          By signing up to Cryptocaps, you agree to Terms of Service and Privacy Policy
        </div>
      </div>
      <FormRegister style={s.form} inputStyle={s.form__input} />
      <button className={s.auth__btn} onClick={() => changeAuthorizationForm(true)}>
        Log in
      </button>
    </>
  );
}
