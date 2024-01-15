import s from './style.module.scss';

export function withBorderShadow(Component) {
  const ModalWithClose = (props) => {
    return (
      <Component
        {...props}
        children={
          <div className={s.modal}>
            <div className={s.modal__container}>
              <div className={s.modal__wrapper}>
                <div>{props.children}</div>
              </div>
            </div>
          </div>
        }></Component>
    );
  };

  return ModalWithClose;
}
