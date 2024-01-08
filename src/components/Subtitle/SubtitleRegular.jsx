import cn from 'classnames';
import { ButtonWithBorder } from '../ui/buttons/Button';
import { BaseSubtitle } from './Subtitle';
import s from './style.module.scss';

export function SubtitleRegular({
  answerButtonText,
  answerButtonSticker,
  answerButtonOnClick,
  ...props
}) {
  return (
    <BaseSubtitle
      {...props}
      answerToMascot={
        (answerButtonText || answerButtonSticker) && (
          <div className={cn(s.subtitle__answer, s.answer, s.answer_size_m)}>
            <ButtonWithBorder
              className={s.answer__button}
              children={answerButtonText}
              sticker={answerButtonSticker}
              onClick={answerButtonOnClick}
            />
            <div
              className={cn(
                s.answer__arrow,
                'iconArrowMessage',
                s.answer__arrow_size_m
              )}></div>
          </div>
        )
      }
    />
  );
}
