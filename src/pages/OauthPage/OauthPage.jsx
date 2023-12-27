import { getGooleToken } from '../../core/api/authorizationGoogle';
import { HomePage } from '../HomePage';

export function OauthPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const receivedCode = urlParams.get('code');
  if (receivedCode) {
    const decodedCode = decodeURIComponent(receivedCode);
    getGooleToken(decodedCode);
  }

  return <HomePage />;
}
