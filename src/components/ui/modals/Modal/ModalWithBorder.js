import Modal from './Modal';
import s from './style.module.scss';

const ModalWithBorderShadow = ({ children, className, styles }) => {
  const padding = 16;
  const paddingCount = 2;
  const widthWithPaddings = padding * paddingCount + styles?.maxWidth;

  return (
    <Modal className={className}>
      <div className={s.modal}>
        <div
          className={s.modal__container}
          style={{ maxWidth: widthWithPaddings ? widthWithPaddings : '' }}>
          <div
            className={s.modal__wrapper}
            style={{ minHeight: styles?.minHeight, padding: styles?.padding }}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWithBorderShadow;
