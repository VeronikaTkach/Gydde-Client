import { LocalStorageItems } from '../constants/LocalStorageItems';
import { StatusCode } from '../constants/Status';
import { clearAuthorizationToken } from '../store/auth/slice';

export function removeInvalidToken(error, dispatch) {
  if (
    error.response.status === StatusCode.Unauthorized ||
    error.response.status === StatusCode.Forbidden
  ) {
    localStorage.removeItem(LocalStorageItems.AuthorizationToken);
    dispatch(clearAuthorizationToken());
  }
}
