import cn from 'classnames';
import { AccentButton, ButtonWithBorder } from '../ui/buttons/Button';
import s from './style.module.scss';
import { BaseSubtitle } from './BaseSubtitle';

export function SubtitleWithDifferentButton({
  leftButtonText,
  leftButtonSticker,
  leftButtonOnClick,
  rightButtonText,
  rightButtonSticker,
  rightButtonOnClick,
  ...props
}) {
  return (
    <BaseSubtitle
      {...props}
      answerToMascot={
        leftButtonText &&
        rightButtonText && (
          <div className={cn(s.subtitle__answer, s.answer)}>
            <ButtonWithBorder
              className={s.answer__button}
              children={leftButtonText}
              sticker={leftButtonSticker}
              onClick={leftButtonOnClick}
            />
            <AccentButton
              className={s.answer__button}
              children={rightButtonText}
              sticker={rightButtonSticker}
              onClick={rightButtonOnClick}
            />
          </div>
        )
      }
    />
  );
}
