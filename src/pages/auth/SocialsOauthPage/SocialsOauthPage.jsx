import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mascot from '../../../assets/images/mascot/mascotStands.png';
import { LoaderMascotWithStikers } from '../../../components/ui/loaders/LoaderMascotWithStikers';
import { twitterAuthorization } from '../../../core/api/authorizationTwitter';
import { Socials } from '../../../core/constants/Socials';
import { allAuth } from '../../../core/store/auth/slice';
import { authRequest } from '../../../core/store/auth/thunk';
import s from './style.module.scss';

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
      <LoaderMascotWithStikers
        mascotImg={mascot}
        spinnerSize={'200px'}
        spinnerTopPosition={'-25%'}
      />
    </div>
  );
}
