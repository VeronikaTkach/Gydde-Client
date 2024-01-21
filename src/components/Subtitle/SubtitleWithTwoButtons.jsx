import cn from 'classnames';
import { ButtonWithBorder } from '../ui/buttons/Button';
import { BaseSubtitle } from './Subtitle';
import s from './style.module.scss';

export function SubtitleWithTwoButtons({
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
        (leftButtonText || leftButtonSticker) && (
          <div className={cn(s.subtitle__answer, s.answer, s.answer_size_m)}>
            <ButtonWithBorder
              className={s.answer__button}
              children={leftButtonText}
              sticker={leftButtonSticker}
              onClick={leftButtonOnClick}
            />
            <ButtonWithBorder
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
