import cn from 'classnames';
import { SubtitleBlock } from '../ui/tags/SubtitleBlock';
import { TextWithBorder } from '../ui/tags/TextWithBorder';
import { AccentButton } from '../ui/buttons/Button';
import { PlayButton } from '../ui/buttons/PlayButton';
import s from './style.module.scss';
import { AudioPlayerWithProgressBar } from '../soundControls/AudioPlayer/AudioPlayerWithProgressBar';

export function BaseSubtitle({
  className,
  mascotVoice,
  mascotText,
  answerToMascot,
  sound,
  text,
  answerButtonText,
  answerButtonSticker,
  answerButtonOnClick,
}) {
  return (
    <Subtitle
      className={className}
      mascotVoice={
        mascotVoice || (
          <>
              {/* <AudioPlayerWithProgressBar /> */}
            {sound && (
              <PlayButton
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
              <div className={cn(s.subtitle__answer, s.answer, s.answer_size_l)}>
                <AccentButton
                  className={s.answer__button}
                  children={answerButtonText}
                  sticker={answerButtonSticker}
                  onClick={answerButtonOnClick}
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
