// import cn from 'classnames';
import { useDispatch } from 'react-redux';
import mascot from '../../../../assets/images/mascot/mascotBucks.png';
import geo from '../../../../assets/images/menu/geo.png';
import { PageName } from '../../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../../core/constants/staticText';
import { useRequestStaticText } from '../../../../core/hooks/useRequestStaticText';
import { showClaimWindow } from '../../../../core/store/slices/modalWindowStateSlice';
import { ModalTransaction } from '../../../ui/modals/windows';
import s from './style.module.scss';

export function ClaimPopup() {
  const dispatch = useDispatch();
  const { text } = useRequestStaticText(PageName.Claim);

  // const styles = {
  //   minHeight: 452,
  //   padding: '36px 40px 0 0',
  //   top: 0,
  // };

  return (
    <ModalTransaction
      className={s.claim}
      onClose={() => dispatch(showClaimWindow(false))}
      buttonProps={{
        children: text?.btnText || STATIC_TEXT[PageName.Claim].btnText,
        className: s.claim__btn,
      }}
      isAccentBtn={true}
      contentData={{
        title: text?.title || STATIC_TEXT[PageName.Claim].title,
        imgSrc: mascot,
        children: (
          <div className={s.claim__container}>
            <h3 className={s.claim__title_accent}>{`~ ${'5'}$`}</h3>
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
          </div>
        ),
      }}
    />
  );
}
