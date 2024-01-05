import { useEffect } from 'react';
import { Socials } from '../../../core/constants/Socials';
import { getGooleToken, sendGooleToken } from '../../../core/api/authorizationGoogle';
import { sendTwitterCode } from '../../../core/api/authorizationTwitter';
import { LocalStorageItems } from '../../../core/constants/LocalStorageItems';
import { AuthPage } from '../AuthPage/AuthPage';

export function SocialsOauthPage({ social }) {
  const urlParams = new URLSearchParams(window.location.search);
  const receivedCode = urlParams.get('code');

  useEffect(() => {
    if (receivedCode) {
      const decodedCode = decodeURIComponent(receivedCode);

      (async () => {
        if (social === Socials.Google) {
          const googleToken = await getGooleToken(decodedCode);
          await sendGooleToken(googleToken);
        } else if (social === Socials.Twitter) {
          await sendTwitterCode(decodedCode);
        }

        localStorage.setItem(
          LocalStorageItems.AuthorizationDone,
          LocalStorageItems.AuthorizationDone
        );
        window.close();
      })();
    }
  }, [receivedCode]);

  return <AuthPage />; //todo поменять на лоадер когда будет
}
