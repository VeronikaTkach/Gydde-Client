import cn from 'classnames';
import { Button } from '../../buttons/Button';
import s from './style.module.scss';
import Modal from '../Modal/Modal';
import { withClose } from './hoc/withClose';

function ModalWithClose({ children, onClose }) {
  return (
    <>
      <Modal className={s.modal}>
        <div className={s.modal__container}>
          <div className={s.modal__wrapper}>
            <div className={s.modal__header}>
              <Button
                className={cn(s.modal__close, 'iconClose')}
                onClick={onClose}></Button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default withClose(ModalWithClose);
