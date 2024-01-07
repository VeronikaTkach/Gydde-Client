import cn from 'classnames';
import { ButtonWithBorder } from '../ui/buttons/Button';
import { BaseSubtitle } from './Subtitle';
import s from './style.module.scss';

export function SubtitleRegular({ answerButtonText, answerButtonSticker, ...props }) {
  return (
    <BaseSubtitle
      {...props}
      answerToMascot={
        <div className={cn(s.subtitle__answer, s.answer)}>
          <ButtonWithBorder
            className={s.answer__button}
            children={answerButtonText}
            sticker={answerButtonSticker}
          />
          <div className={cn(s.answer__arrow, s.answer__arrow_sizeM)}></div>
        </div>
      }
    />
  );
}
