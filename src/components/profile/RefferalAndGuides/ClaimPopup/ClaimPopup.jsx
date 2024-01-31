import { useDispatch } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import ModalWithClose from '../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../ui/modals/Modal/ModalWithBorder';
import { showClaimWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import mascot from '../../../../assets/images/mascot/mascotBucks.png';
import { AccentButton } from '../../../ui/buttons/Button';
import geo from '../../../../assets/images/menu/geo.png';

export function ClaimPopup({ staticText }) {
  const dispatch = useDispatch();

  const styles = {
    minHeight: 452,
    padding: '36px 40px 0 0',
    top: 0,
  };

  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={() => dispatch(showClaimWindow(false))}
      styles={styles}>
      <div className={cn(s.claim)}>
        <img className={s.claim__img} src={mascot} alt='mascot is happy about earnings' />
        <div className={s.claim__container}>
          <div className={s.claim__text}>
            <h2 className={s.claim__title}>Claim amount</h2>
            <h3 className={s.claim__title_accent}>~ $100</h3>
          </div>
          <div className={s.claim__desc}>
            <div className={s.claim__fee}>
              <div>
                <p className={s.claim__transaction}>Transaction fee compensation</p>
                <div className={s.claim__faq}>
                  <img src={geo} alt='icon geo' />
                  <span className={s.claim__answer}>What is commission paid for?</span>
                </div>
              </div>
              <h4 className={s.claim__total}>$0</h4>
            </div>
            <div className={s.claim__choice}>
              <p className={s.claim__from}>Pay transaction fee from my wallet</p>
              <div className={s.claim__toggle}>
                <label>
                  <input type='checkbox' />
                  <span className={s.claim__slider}></span>
                </label>
              </div>
            </div>
            <AccentButton className={s.claim__btn}>Claim</AccentButton>
          </div>
        </div>
      </div>
    </ModalWithClose>
  );
}
