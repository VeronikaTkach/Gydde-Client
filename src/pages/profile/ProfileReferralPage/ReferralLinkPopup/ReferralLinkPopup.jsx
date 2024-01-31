import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { showReferralLinkWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import ModalWithClose from '../../../../components/ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../../components/ui/modals/Modal/ModalWithBorder';
import s from './style.module.scss';
import { PageName } from '../../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../../core/constants/staticText';
import copyText from '../../../../core/helpers/copyText';

export function ReferralLinkPopup({ staticText }) {
  const dispatch = useDispatch();
  const link = 'http://gyddy.com?REFERRALCODE=yourlink'; //TODO получать с сервера

  const socialIcons = [
    'iconTelegram',
    'iconDiscord',
    'iconTwitter',
    'iconLinkedin',
    'iconFacebook',
  ];

  const styles = {
    maxWidth: 546,
    minHeight: 292,
    padding: '46px 60px',
    top: 4,
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showReferralLinkWindow(false))}
      styles={styles}>
      <div className={cn(s.referralLink)}>
        <div className={cn(s.referralLink__title)}>
          {staticText?.referralLinkTitle ||
            STATIC_TEXT[PageName.ProfileReferrals].referralLinkTitle}
        </div>
        <div className={cn(s.link)}>
          <div className={cn(s.link__text)}>{link}</div>
          <button
            className={cn(s.link__copy, 'iconCopy')}
            onClick={() => copyText(link)}></button>
        </div>
        <div className={cn(s.socials)}>
          {socialIcons.map((item) => {
            return <a href='#' className={cn(s.socials__link, item)} key={item}></a>; // эти ссылки тоже с сервера получать?
          })}
        </div>
      </div>
    </ModalWithClose>
  );
}
