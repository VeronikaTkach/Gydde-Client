import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import IconE from '../../assets/images/email.svg';
import IconM from '../../assets/images/metamask.svg';
import { modalWindowState } from '../../core/store/slices/modalWindowStateSlice';
import { setCurrentAuthorizationType } from '../../core/store/slices/mailAuthorizationSlice';
import { AuthorizationType } from '../../core/constants/AuthorizationType';
import { Button } from '../ui/buttons/Button';
import { Google } from './Google';
import { Twitter } from './Twitter';
import s from './style.module.scss';

export function AllAuthorizaitions({ modalsText }) {
  const dispatch = useDispatch();
  useSelector(modalWindowState);

  return (
    <>
      <div className={s.auth__body}>
        <div>
          <div className={cn(s.socials__title)}>{modalsText.socialsTitle}</div>
          <div className={cn(s.socials__body)}>
            <Twitter className={cn(s.social, s.social_twitter, 'iconTwitter')} />
            <Google className={cn(s.social, s.social_google)} />
            <Button
              className={cn(s.social, s.social_email)}
              onClick={() =>
                dispatch(setCurrentAuthorizationType(AuthorizationType.AuthMail))
              }>
              <img className={s.social__img} src={IconE} alt={'Email'} />
              <div className={s.social__text}>{modalsText.email}</div>
            </Button>
          </div>
        </div>
        <div>
          <div className={cn(s.socials__title)}>{modalsText.walletTitle}</div>
          <div className={cn(s.socials__body)}>
            <Button
              className={cn(s.social, s.social_metamask)}
              onClick={() =>
                dispatch(setCurrentAuthorizationType(AuthorizationType.AuthMetaMask))
              }>
              <img className={s.social__img} src={IconM} alt={'Metamask'} />
              <div className={s.social__text}>{modalsText.metamask}</div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
