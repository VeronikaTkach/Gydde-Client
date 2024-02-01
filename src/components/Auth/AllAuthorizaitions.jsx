import cn from 'classnames';
import { useDispatch } from 'react-redux';
import IconE from '../../assets/images/email.svg';
import IconM from '../../assets/images/metamask.svg';
import { AuthorizationType } from '../../core/constants/AuthorizationType';
import { PageName } from '../../core/constants/PageNames';
import { STATIC_TEXT } from '../../core/constants/staticText';
import { useStaticText } from '../../core/hooks/useStaticText';
import { setCurrentAuthorizationType } from '../../core/store/auth/slice';
import { Button } from '../ui/buttons/Button';
import { Google } from './Google';
import { Twitter } from './Twitter';
import s from './style.module.scss';

export function AllAuthorizaitions() {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.Auth);

  return (
    <>
      {text && (
        <div className={s.auth__body}>
          <div>
            <div className={cn(s.socials__title)}>{text.socialsTitle}</div>
            <div className={cn(s.socials__body)}>
              <Twitter
                className={cn(s.social, s.social_twitter, 'iconTwitter')}
                children={text.twitter || STATIC_TEXT[PageName.Auth].twitter}
              />
              <Google
                className={cn(s.social, s.social_google)}
                children={text.google || STATIC_TEXT[PageName.Auth].google}
              />
              <Button
                className={cn(s.social, s.social_email)}
                onClick={() =>
                  dispatch(setCurrentAuthorizationType(AuthorizationType.AuthMail))
                }>
                <img className={s.social__img} src={IconE} alt={'Email'} />
                <div className={s.social__text}>
                  {text.email || STATIC_TEXT[PageName.Auth].email}
                </div>
              </Button>
            </div>
          </div>
          <div>
            <div className={cn(s.socials__title)}>
              {text.walletTitle || STATIC_TEXT[PageName.Auth].walletTitle}
            </div>
            <div className={cn(s.socials__body)}>
              <Button
                className={cn(s.social, s.social_metamask)}
                onClick={() =>
                  dispatch(setCurrentAuthorizationType(AuthorizationType.AuthMetaMask))
                }>
                <img className={s.social__img} src={IconM} alt={'Metamask'} />
                <div className={s.social__text}>
                  {text.metamask || STATIC_TEXT[PageName.Auth].metamask}
                </div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
