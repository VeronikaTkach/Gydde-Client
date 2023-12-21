import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { showAuthorizationWindow } from '../../../core/store/slices/windowStateSlice';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';

export function Metamask({ className, isConnected }) {
  const dispatch = useDispatch();

  async function onConnect() {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(() => {
          localStorage.setItem('authorization', 'user');
          dispatch(showAuthorizationWindow(false));
        })
        .catch((error) => console.error(error));
    } else {
      console.error('error');
    }
  }

  return (
    <Button className={cn(s.button, className)} onClick={onConnect}>
      {isConnected && <div className={s.connected}></div>}
    </Button>
  );
}
