import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import IconM from '../../assets/images/metamask.svg';
import IconT from '../../assets/images/trust.png';
import IconB from '../../assets/images/binance.svg';
import { Button } from '../ui/buttons/Button';
import { Metamask } from './Metamask';
import s from './style.module.scss';

export function Auth() {
  const dispatch = useDispatch();

  return (
    <div className={s.auth}>
      <div className={s.auth__title}>Log in to Gydde</div>
      <div className={cn(s.auth__social)}>
        <div className={cn(s.social__title)}>Log in with social account</div>
        <div className={cn(s.social__body)}>
          <Link className={cn(s.social, s.social_twitter)} to='#'>
            <img className={s.social__img} src={IconM} />
            <div className={s.social__text}>Twitter</div>
          </Link>
          <Link className={cn(s.social, s.social_trust)} to='#'>
            <img className={s.social__img} src={IconT} />
            <div className={s.social__text}>Google</div>
          </Link>
          <Link className={cn(s.social, s.social_binance)} to='#'>
            <img className={s.social__img} src={IconB} />
            <div className={s.social__text}>Email</div>
          </Link>
        </div>
      </div>
      <div className={cn(s.auth__social)}>
        <div className={cn(s.social__title)}>Log in with wallet</div>
        <div className={cn(s.social__body)}>
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
  );
}
