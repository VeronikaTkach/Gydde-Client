import cn from 'classnames';
import { ButtonWithBorder } from '../ui/buttons/Button';
import { BaseSubtitle } from './BaseSubtitle';
import s from './style.module.scss';

export function SubtitleWithBorderButton({
  buttonText,
  buttonSticker,
  buttonOnClick,
  ...props
}) {
  return (
    <BaseSubtitle
      {...props}
      answerToMascot={
        (buttonText || buttonSticker) && (
          <div className={cn(s.subtitle__answer, s.answer)}>
            <ButtonWithBorder
              className={s.answer__button}
              children={buttonText}
              sticker={buttonSticker}
              onClick={buttonOnClick}
            />
          </div>
        )
      }
    />
  );
}
