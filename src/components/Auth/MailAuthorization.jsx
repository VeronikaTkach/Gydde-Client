import { useNavigate } from 'react-router-dom';
import { FormAuthorization } from './forms';
import { Button } from '../ui/buttons/Button';
import s from './style.module.scss';
import { RoutesName } from '../../core/constants/Routes';

export function MailAuthorization() {

  const navigate = useNavigate();

  return (
    <>
      <div className={s.auth}>
        <div className={s.auth__header}>
          <div className={s.auth__header_row}> 
            <Button
            className={s.auth__back}
            onClick={() => navigate(RoutesName.Back)}></Button>
            <div className={s.auth__title}>Log in to Gydde</div>
          </div>
          <Button
            className={s.auth__close}
            onClick={() => navigate(RoutesName.Root)}></Button>
        </div>
        <FormAuthorization />
      </div>  
    </>
  );
}
