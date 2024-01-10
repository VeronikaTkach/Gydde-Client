import { useDispatch, useSelector } from 'react-redux';
import { showAuthorizationWindow } from '../../store/slices/modalWindowStateSlice';
import {
  setCurrentAuthorizationType,
  allAuthorization,
} from '../../store/slices/authorizationSlice';
import { setMetamaskConnectionStatus } from '../../store/slices/metamaskAuthorizationSlice';
import { MetamaskConnectionStatus } from '../../constants/Status';
import { AuthorizationType } from '../../constants/AuthorizationType';

export function withClose(Component) {
  return function Fn(props) {
    const dispatch = useDispatch();
    const { currentAuthorizationType } = useSelector(allAuthorization);
    const onClose = () => {
      dispatch(showAuthorizationWindow(false));
      dispatch(setCurrentAuthorizationType(AuthorizationType.NotСhosen));
      if (currentAuthorizationType === AuthorizationType.AuthMetaMask) {
        dispatch(setMetamaskConnectionStatus(MetamaskConnectionStatus.Connecting));
      }
    };

    return <Component onClose={onClose} {...props} />;
  };
}
