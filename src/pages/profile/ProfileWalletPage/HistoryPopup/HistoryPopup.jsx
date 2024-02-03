import cn from 'classnames';
import { useDispatch } from 'react-redux';
import eth from '../../../../assets/images/Ethereum.svg';
import geo from '../../../../assets/images/menu/geo.svg';
import people from '../../../../assets/images/menu/people.svg';
import metamaskIcon from '../../../../assets/images/metamask.svg';
import {
  ModalWithClose,
  ModalWithBorderShadow,
} from '../../../../components/ui/modals/windows';
import { PageName } from '../../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../../core/constants/staticText';
import { useRequestStaticText } from '../../../../core/hooks/useRequestStaticText';
import { showHistoryWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import s from './style.module.scss';

const transactions = [
  {
    iconType: geo,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
  {
    iconType: people,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
  {
    iconType: people,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
  {
    iconType: people,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
  {
    iconType: people,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
  {
    iconType: people,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
  {
    iconType: people,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
  {
    iconType: people,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
  {
    iconType: people,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
  {
    iconType: people,
    currency: 'USDT',
    value: '4.43 ETH/$2.24',
    date: '2024/01/18 10:35:42',
    walletIcon: eth,
    walletName: 'Ethereum',
    metamask: metamaskIcon,
  },
];

export function HistoryPopup() {
  const dispatch = useDispatch();
  const { text } = useRequestStaticText(PageName.History);

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showHistoryWindow(false))}
      className={s.modal}>
      {text || (
        <div className={cn(s.modal__history, s.history)}>
          <h2 className={s.history__title}>
            {text?.title || STATIC_TEXT[PageName.History].title}
          </h2>
          <div className={s.history__scroll}>
            {transactions.map((item, index) => {
              return <TransactionItem key={index} text={item} />;
            })}
          </div>
        </div>
      )}
    </ModalWithClose>
  );
}

function TransactionItem({ text }) {
  return (
    <div className={s.transaction}>
      <div className={s.transaction__container}>
        <img
          className={s.transaction__type}
          src={text.iconType}
          alt='type of transaction'
        />
      </div>
      <div className={s.transaction__container}>
        <div className={s.transaction__circle}></div>
        <p className={s.transaction__title}>{text.currency}</p>
      </div>
      <div className={s.transaction__container}>
        <p className={s.transaction__text}>{text.value}</p>
      </div>
      <div className={s.transaction__container}>
        <p className={s.transaction__text}>{text.date}</p>
      </div>
      <div className={s.transaction__info}>
        <div className={s.transaction__crypto}>
          <img className={s.transaction__wallet} src={text.walletIcon} alt='' />
          <p className={s.transaction__text}>{text.walletName}</p>
        </div>
        <div className={s.transaction__share}>
          <button className={cn(s.transaction__btn, 'iconLink')}></button>
          <div>
            <p className={s.transaction__plus}>+</p>
            <img className={s.transaction__metamask} src={text.metamask} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
