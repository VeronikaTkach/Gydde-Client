import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import s from './style.module.scss';
import ModalWithClose from '../../../ui/modals/Modal/ModalWithClose';
import ModalWithBorderShadow from '../../../ui/modals/Modal/ModalWithBorder';
import { showClaimWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import { getStaticText } from '../../../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../../../core/constants/textKeys';
import {
  removeUnusedStaticText,
  staticText,
} from '../../../../core/store/staticText/slice';
import { Status } from '../../../../core/constants/Status';
import { PageName } from '../../../../core/constants/PageNames';
import mascot from '../../../../assets/images/mascot/mascotBucks.png';
import { AccentButton } from '../../../ui/buttons/Button';
import geo from '../../../../assets/images/menu/geo.png';

export function ClaimPopup() {
  const dispatch = useDispatch();

  const { staticTextClaim, staticTextStatusClaim } = useSelector(staticText);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.CLAIM));

    return () => {
      dispatch(removeUnusedStaticText(PageName.Claim));
    };
  }, []);

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
      {staticTextStatusClaim === Status.Resolved && (
        <div className={cn(s.claim)}>
          <img
            className={s.claim__img}
            src={mascot}
            alt='mascot is happy about earnings'
          />
          <div className={s.claim__container}>
            <div className={s.claim__text}>
              <h2 className={s.claim__title}>{staticTextClaim.title}</h2>
              <h3 className={s.claim__title_accent}>{staticTextClaim.titleAccent}</h3>
            </div>
            <div className={s.claim__desc}>
              <div className={s.claim__fee}>
                <div>
                  <p className={s.claim__transaction}>
                    {staticTextClaim.transactionText}
                  </p>
                  <div className={s.claim__faq}>
                    <img src={geo} alt='icon geo' />
                    <span className={s.claim__answer}>{staticTextClaim.geoText}</span>
                  </div>
                </div>
                <h4 className={s.claim__total}>{staticTextClaim.feeAmount}</h4>
              </div>
              <div className={s.claim__choice}>
                <p className={s.claim__from}>{staticTextClaim.payFeeFrom}</p>
                <div className={s.claim__toggle}>
                  <label>
                    <input type='checkbox' />
                    <span className={s.claim__slider}></span>
                  </label>
                </div>
              </div>
              <AccentButton className={s.claim__btn}>
                {staticTextClaim.btnText}
              </AccentButton>
            </div>
          </div>
        </div>
      )}
    </ModalWithClose>
  );
}
