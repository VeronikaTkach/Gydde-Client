import { useDispatch } from 'react-redux';
import cn from 'classnames';
import Web3 from 'web3';
import { showAuthorizationWindow } from '../../../core/store/slices/windowStateSlice';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';

// const web3 = new Web3(Web3.givenProvider);

export function Metamask({ className }) {
  const dispatch = useDispatch();

  //обсудить путь с беком, не совсем ясно что по итогу ему нужно
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

  async function requestEthereumAddress() {
    const web3 = new Web3(window.ethereum);
    try {
      const accounts = await web3.eth.requestAccounts();

      const code = Math.floor(Math.random() * 1000000).toString();

      const signature = await web3.eth.personal.sign(code, accounts[0], '');

      console.log(accounts, code, signature);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Button className={cn(s.button, className)} onClick={requestEthereumAddress}></Button>
  );
}
