import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import IconE from '../../assets/images/email.svg';
import IconM from '../../assets/images/metamask.svg';
import { Button } from '../ui/buttons/Button';
import { Metamask } from './Metamask';
import s from './style.module.scss';
import { RoutesName } from '../../core/constants/Routes';
import { Google } from './Google';
import { Twitter } from './Twitter';

export function Auth() {
  const navigate = useNavigate();

  return (
    <div className={s.auth}>
      <div className={s.auth__header}>
        <div className={s.auth__title}>Log in to Gydde</div>
        <Button
          className={s.auth__close}
          onClick={() => navigate(RoutesName.Back)}></Button>
      </div>
      <div className={s.auth__body}>
        <div className={cn(s.auth__socials, s.socials)}>
          <div className={cn(s.socials__title)}>Log in with social account</div>
          <div className={cn(s.socials__body)}>
            <Twitter className={cn(s.social, s.social_twitter)} />
            <Google className={cn(s.social, s.social_google)} />
            <Link className={cn(s.social, s.social_email)} to={RoutesName.MailAuthPage}>
              <img className={s.social__img} src={IconE} />
              <div className={s.social__text}>Email</div>
            </Link>
          </div>
        </div>
        <div className={cn(s.auth__socials, s.socials)}>
          <div className={cn(s.socials__title)}>Log in with wallet</div>
          <div className={cn(s.socials__body)}>
            <Link className={cn(s.social, s.social_metamask)} to='#'>
              <img className={s.social__img} src={IconM} />
              <div className={s.social__text}>
                <Metamask />
                Metamask
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
