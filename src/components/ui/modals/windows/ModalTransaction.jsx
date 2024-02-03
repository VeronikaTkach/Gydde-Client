import cn from 'classnames';
import { AccentButton, ButtonWithBorder } from '../../buttons/Button';
import { ModalWithBorderShadow } from './ModalWithBorderShadow';
import { ModalWithClose } from './ModalWithClose';
import s from './style.module.scss';

export function ModalTransaction({
  className,
  onClose,
  contentData,
  buttonProps,
  isAccentBtn,
}) {
  return (
    <ModalWithClose
      Component={ModalWithBorderShadow}
      onClose={onClose}
      className={cn(s.modalTransaction, className)}>
      <div className={cn(s.modalTransaction__container, className)}>
        <div className={s.modalTransaction__img}>
          {contentData.image ? (
            contentData.image
          ) : (
            <img src={contentData.imgSrc} alt='mascot' />
          )}
        </div>
        <div className={cn(s.modalTransaction__info)}>
          {contentData.title && (
            <h3 className={s.modalTransaction__title}>{contentData.title}</h3>
          )}
          {contentData.children ? (
            contentData.children
          ) : (
            <div className={s.modalTransaction__text}>{contentData.text}</div>
          )}
          {isAccentBtn ? (
            <AccentButton {...buttonProps} />
          ) : (
            <ButtonWithBorder {...buttonProps} />
          )}
        </div>
      </div>
    </ModalWithClose>
  );
}
