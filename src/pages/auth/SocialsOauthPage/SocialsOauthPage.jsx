import { useEffect } from 'react';
import { Socials } from '../../../core/constants/Socials';
import { googleAuthorization } from '../../../core/api/authorizationGoogle';
import { twitterAuthorization } from '../../../core/api/authorizationTwitter';
import { LocalStorageItems } from '../../../core/constants/LocalStorageItems';
import smiley from '../../../assets/images/stickers/smiley.png';
import ball from '../../../assets/images/stickers/ball.png';
import bangOrange from '../../../assets/images/stickers/bangOrange.png';
import bangWhite from '../../../assets/images/stickers/bangWhite.png';
import metamaskSmiley from '../../../assets/images/stickers/metamask.png';
import mascot from '../../../assets/images/mascot/mascotStands.png';
import { StickersSpinner } from '../../../components/ui/loaders/StickersSpinner';
import s from './style.module.scss';

export function SocialsOauthPage({ social }) {
  const urlParams = new URLSearchParams(window.location.search);
  const receivedCode = urlParams.get('code');

  useEffect(() => {
    if (receivedCode) {
      const decodedCode = decodeURIComponent(receivedCode);

      (async () => {
        if (social === Socials.Google) {
          const googleToken = await googleAuthorization.getToken(decodedCode);
          await googleAuthorization.sendToken(googleToken);
        } else if (social === Socials.Twitter) {
          await twitterAuthorization.sendCode(decodedCode);
        }

        localStorage.setItem(
          LocalStorageItems.AuthorizationDone,
          LocalStorageItems.AuthorizationDone
        );
        window.close();
      })();
    }
  }, [receivedCode]);

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
