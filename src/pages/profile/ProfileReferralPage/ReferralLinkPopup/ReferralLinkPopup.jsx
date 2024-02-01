import cn from 'classnames';
import { useDispatch } from 'react-redux';
import ModalWithBorderShadow from '../../../../components/ui/modals/Modal/ModalWithBorder';
import ModalWithClose from '../../../../components/ui/modals/Modal/ModalWithClose';
import { PageName } from '../../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../../core/constants/staticText';
import copyText from '../../../../core/helpers/copyText';
import { showReferralLinkWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import s from './style.module.scss';

export function ReferralLinkPopup({ text }) {
  const dispatch = useDispatch();
  const link = 'http://gyddy.com?REFERRALCODE=yourlink'; //TODO получать с сервера

  const styles = {
    maxWidth: 546,
    minHeight: 292,
    padding: '46px 60px',
    top: 4,
  };

  const socials = [
    { name: 'iconTelegram', size: 23 },
    { name: 'iconDiscord' },
    { name: 'iconTwitter', size: 40 },
    { name: 'iconLinkedin' },
    { name: 'iconFacebook' },
  ];

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showReferralLinkWindow(false))}
      styles={styles}>
      <div>
        <div className={cn(s.title)}>
          {text?.referralLinkTitle ||
            STATIC_TEXT[PageName.ProfileReferrals].referralLinkTitle}
        </div>
        <div className={cn(s.link)}>
          <div className={cn(s.link__text)}>{link}</div>
          <button
            className={cn(s.link__copy, 'iconCopy')}
            onClick={() => copyText(link)}></button>
        </div>
        <div className={cn(s.socials)}>
          {socials.map((item) => (
            <a
              href='#'
              className={cn(s.socials__link, item.name)}
              key={item.name}
              style={{ fontSize: item?.size }}></a>
          ))}
        </div>
      </div>
    </ModalWithClose>
  );
}
