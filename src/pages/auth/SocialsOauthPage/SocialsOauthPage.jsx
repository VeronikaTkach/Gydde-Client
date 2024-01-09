import { useEffect } from 'react';
import { Socials } from '../../../core/constants/Socials';
import { googleAuthorization } from '../../../core/api/authorizationGoogle';
import { twitterAuthorization } from '../../../core/api/authorizationTwitter';
import { LocalStorageItems } from '../../../core/constants/LocalStorageItems';
import { HelloPage } from '../../HelloPage/HelloPage';

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

  return <HelloPage />; //todo поменять на лоадер когда будет
}
