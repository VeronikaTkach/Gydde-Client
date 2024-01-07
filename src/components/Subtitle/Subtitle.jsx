import cn from 'classnames';
import { SubtitleBlock } from '../ui/tags/SubtitleBlock';
import { TextWithBorder } from '../ui/tags/TextWithBorder';
import { AccentButton } from '../ui/buttons/Button';
import { SoundSwitchButton } from '../ui/buttons/SoundSwitchButton';
import s from './style.module.scss';

export function BaseSubtitle({
  className,
  mascotVoice,
  mascotText,
  answerToMascot,
  sound,
  text,
  answerButtonText,
  answerButtonSticker,
}) {
  return (
    <Subtitle
      className={className}
      mascotVoice={
        mascotVoice || (
          <>
            {sound && (
              <SoundSwitchButton
                className={cn(s.subtitle__mascotVoice, s.subtitle__mascotVoice_size_l)}
              />
            )}
          </>
        )
      }
      mascotText={
        mascotText || (
          <div className={s.subtitle__mascotText}>
            <TextWithBorder text={text} />
          </div>
        )
      }
      answerToMascot={
        answerToMascot || (
          <>
            {(answerButtonText || answerButtonSticker) && (
              <div className={cn(s.subtitle__answer, s.answer)}>
                <AccentButton
                  className={s.answer__button}
                  children={answerButtonText}
                  sticker={answerButtonSticker}
                />
                <div
                  className={cn(
                    s.answer__arrow,
                    s.answer__arrow_size_l,
                    'iconArrowMessage'
                  )}
                />
              </div>
            )}
          </>
        )
      }
    />
  );
}

export function Subtitle({ className, mascotVoice, mascotText, answerToMascot }) {
  return (
    <SubtitleBlock className={cn(s.subtitle, className)}>
      {mascotVoice}
      {mascotText}
      {answerToMascot}
    </SubtitleBlock>
  );
}
