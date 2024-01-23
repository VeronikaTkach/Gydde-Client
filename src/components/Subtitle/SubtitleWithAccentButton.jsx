import cn from 'classnames';
import { AccentButton } from '../ui/buttons/Button';
import s from './style.module.scss';
import { BaseSubtitle } from './BaseSubtitle';

export function SubtitleWithAccentButton({
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
          <div className={cn(s.baseSubtitle__answer, s.answer)}>
            <AccentButton
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
