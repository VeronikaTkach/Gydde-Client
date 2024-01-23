import cn from 'classnames';
import { SubtitleBlock } from '../ui/tags/SubtitleBlock';
import { TextWithBorder } from '../ui/tags/TextWithBorder';
import { PlayButton } from '../soundControls/PlayButton/PlayButton';
import s from './style.module.scss';
import { AudioRate } from '../soundControls/AudioRate';

export function BaseSubtitle({
  className,
  mascotVoice,
  mascotText,
  answerToMascot,
  sound,
  text,
}) {
  //console.log(sound) сюда приходит звук
  return (
    <Subtitle
      className={cn(s.baseSubtitle, className)}
      mascotVoice={
        mascotVoice || (
          <>
            {sound && (
              <div className={s.baseSubtitle__mascotVoice}>
                <PlayButton className={cn(s.baseSubtitle__mascotVoice_play)} />
                <AudioRate className={cn(s.baseSubtitle__mascotVoice_rate)} />
              </div>
            )}
          </>
        )
      }
      mascotText={
        mascotText || (
          <div className={s.baseSubtitle__mascotText}>
            <TextWithBorder text={text} />
          </div>
        )
      }
      answerToMascot={answerToMascot}
    />
  );
}

export function Subtitle({ className, mascotVoice, mascotText, answerToMascot }) {
  return (
    <SubtitleBlock className={className}>
      {mascotVoice}
      {mascotText}
      {answerToMascot}
    </SubtitleBlock>
  );
}
