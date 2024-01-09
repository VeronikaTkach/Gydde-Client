import cn from 'classnames';
import { Button } from '../../ui/buttons/Button';
import { SubtitleBlock } from '../../ui/tags/SubtitleBlock';
import { MetamaskConnection } from '../../Auth/Metamask';
import s from './style.module.scss';

//временные компоненты-заглушки, по мере добавления выносить в отдельные файлы
export const Binance = ({ isConnected }) => (
  <Button className={cn(s.account, s.account_binance)} type={'button'}>
    {isConnected && <div className={s.account__connected}></div>}
  </Button>
);
export const Trust = ({ isConnected }) => (
  <Button className={cn(s.account, s.account_trust)} type={'button'}>
    {isConnected && <div className={s.account__connected}></div>}
  </Button>
);
export const Phantom = ({ isConnected }) => (
  <Button className={cn(s.account, s.account_phantom)} type={'button'}>
    {isConnected && <div className={s.account__connected}></div>}
  </Button>
);
export const Google = ({ isConnected }) => (
  <Button className={cn(s.account, s.account_discord)} type={'button'}>
    {isConnected && <div className={s.account__connected}></div>}
  </Button>
);
export const Twitter = ({ isConnected }) => (
  <Button className={cn(s.account, s.account_twitter)} type={'button'}>
    {isConnected && <div className={s.account__connected}></div>}
  </Button>
);
export const Telegram = ({ isConnected }) => (
  <Button className={cn(s.account, s.account_telegram)} type={'button'}>
    {isConnected && <div className={s.account__connected}></div>}
  </Button>
);

export function Accounts({ className }) {
  return (
    <SubtitleBlock className={cn(s.accounts, className)}>
      <div className={s.accounts__connects}>
        <div className={s.accounts__title}>Connect Wallet</div>
        <div className={s.accounts__list}>
          <Binance isConnected={false} />
          <MetamaskConnection isConnected={true} />
          <Trust isConnected={false} />
          <Phantom isConnected={false} />
        </div>
      </div>
      <div className={s.accounts__connects}>
        <div className={s.accounts__title}>Connect social media</div>
        <div className={s.accounts__list}>
          <Google isConnected={false} />
          <Twitter isConnected={false} />
          <Telegram isConnected={false} />
        </div>
      </div>
    </SubtitleBlock>
  );
}
