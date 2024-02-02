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
      className={className}>
      <div className={s.modal__img}>
        {contentData.image ? (
          contentData.image
        ) : (
          <img src={contentData.imgSrc} alt='mascot' />
        )}
      </div>
      <div className={cn(s.modal__info, s.info)}>
        {contentData.title && <h3 className={s.info__title}>{contentData.title}</h3>}
        {contentData.children ? (
          contentData.children
        ) : (
          <div className={s.info__text}>{contentData.text}</div>
        )}
        {isAccentBtn ? (
          <AccentButton {...buttonProps} />
        ) : (
          <ButtonWithBorder {...buttonProps} />
        )}
      </div>
    </ModalWithClose>
  );
}
