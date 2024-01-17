import Modal from './Modal';
import s from './style.module.scss';

const ModalWithBorderShadow = ({ children, className }) => {
  return (
    <Modal className={className}>
      <div className={s.modal}>
        <div className={s.modal__container}>
          <div className={s.modal__wrapper}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWithBorderShadow;
