import { useEffect } from 'react';
import { Socials } from '../../../core/constants/Socials';
import { twitterAuthorization } from '../../../core/api/authorizationTwitter';
import smiley from '../../../assets/images/stickers/smiley.png';
import ball from '../../../assets/images/stickers/ball.png';
import bangOrange from '../../../assets/images/stickers/bangOrange.png';
import bangWhite from '../../../assets/images/stickers/bangWhite.png';
import metamaskSmiley from '../../../assets/images/stickers/metamask.png';
import mascot from '../../../assets/images/mascot/mascotStands.png';
import { StickersSpinner } from '../../../components/ui/loaders/StickersSpinner';
import s from './style.module.scss';
import { authRequest } from '../../../core/store/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { allAuth } from '../../../core/store/auth/slice';

export function SocialsOauthPage({ social }) {
  const urlParams = new URLSearchParams(window.location.search);
  const receivedCode = urlParams.get('code');
  const dispatch = useDispatch();
  const { idTokenGoogle } = useSelector(allAuth);

  useEffect(() => {
    if (receivedCode) {
      const decodedCode = decodeURIComponent(receivedCode);
      if (social === Socials.Google) {
        dispatch(authRequest.getIdTokenGoogle(decodedCode));
      } else if (social === Socials.Twitter) {
        twitterAuthorization.sendCode(decodedCode);
      }

      // window.close();
    }
  }, [receivedCode]);

  useEffect(() => {
    if (idTokenGoogle) {
      dispatch(authRequest.sendIdTokenGoogle());
    }
  }, [idTokenGoogle]);

  return (
    <div className={s.loader}>
      <div className={s.loader__mascot}>
        <img src={mascot} alt={'mascot'} />
      </div>
      <StickersSpinner
        className={s.loader__spinner}
        icons={[smiley, ball, bangOrange, metamaskSmiley, bangWhite]}
      />
    </div>
  );
}
