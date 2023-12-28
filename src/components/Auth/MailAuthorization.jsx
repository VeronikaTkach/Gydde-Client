import { FormAuthorization } from './forms';
import s from './style.module.scss';

export function MailAuthorization() {
  return (
    <>
      <div className={s.auth__info}>
        <div className={s.auth__title}>Log in to Gydde</div>
      </div>
      <FormAuthorization />
    </>
  );
}
