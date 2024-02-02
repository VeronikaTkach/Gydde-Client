import cn from 'classnames';
import { useDispatch } from 'react-redux';
import mascot from '../../../../assets/images/mascot/mascotBucks.png';
import geo from '../../../../assets/images/menu/geo.png';
import { PageName } from '../../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../../core/constants/staticText';
import { useRequestStaticText } from '../../../../core/hooks/useRequestStaticText';
import { showClaimWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import { AccentButton } from '../../../ui/buttons/Button';
import { ModalWithClose, ModalWithBorderShadow } from '../../../ui/modals/windows';
import s from './style.module.scss';

export function ClaimPopup() {
  const dispatch = useDispatch();
  const { text } = useRequestStaticText(PageName.Claim);

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
      {text && (
        <div className={cn(s.claim)}>
          <img
            className={s.claim__img}
            src={mascot}
            alt='mascot is happy about earnings'
          />
          <div className={s.claim__container}>
            <div className={s.claim__text}>
              <h2 className={s.claim__title}>
                {text?.title || STATIC_TEXT[PageName.Claim].title}
              </h2>
              <h3 className={s.claim__title_accent}>
                {text?.titleAccent || STATIC_TEXT[PageName.Claim].titleAccent}
              </h3>
            </div>
            <div className={s.claim__desc}>
              <div className={s.claim__fee}>
                <div>
                  <p className={s.claim__transaction}>
                    {text?.transactionText || STATIC_TEXT[PageName.Claim].transactionText}
                  </p>
                  <div className={s.claim__faq}>
                    <img src={geo} alt='icon geo' />
                    <span className={s.claim__answer}>
                      {text?.geoText || STATIC_TEXT[PageName.Claim].geoText}
                    </span>
                  </div>
                </div>
                <h4 className={s.claim__total}>
                  {text?.feeAmount || STATIC_TEXT[PageName.Claim].feeAmount}
                </h4>
              </div>
              <div className={s.claim__choice}>
                <p className={s.claim__from}>
                  {text?.payFeeFrom || STATIC_TEXT[PageName.Claim].payFeeFrom}
                </p>
                <div className={s.claim__toggle}>
                  <label>
                    <input type='checkbox' />
                    <span className={s.claim__slider}></span>
                  </label>
                </div>
              </div>
              <AccentButton className={s.claim__btn}>
                {text?.btnText || STATIC_TEXT[PageName.Claim].btnText}
              </AccentButton>
            </div>
          </div>
        </div>
      )}
    </ModalWithClose>
  );
}
