import { Howl } from 'howler';
import cn from 'classnames';
import voice from '../../assets/audio/olivia-russian.mp3';
import { SubtitleBlock } from '../ui/tags/SubtitleBlock';
import { TextWithBorder } from '../ui/tags/TextWithBorder';
import { PlayButton } from '../soundControls/PlayButton/PlayButton';
import s from './style.module.scss';
import { AudioRate } from '../soundControls/AudioRate';
import { usePlayer } from '../../core/hooks/player';

export const audio = new Howl({
  src: voice,
  html5: true,
  autoplay: true,
});

export function BaseSubtitle({
  className,
  mascotVoice,
  mascotText,
  answerToMascot,
  sound,
  text,
}) {
  //console.log(sound) сюда приходит звук
  const { soundSwitch, switchAudio } = usePlayer(audio);

  return (
    <Subtitle
      className={cn(s.baseSubtitle, className)}
      mascotVoice={
        mascotVoice || (
          <>
            {sound && (
              <div className={s.baseSubtitle__mascotVoice}>
                <PlayButton
                  className={cn(s.baseSubtitle__mascotVoice_play)}
                  onClick={switchAudio}
                  switchStatus={soundSwitch}
                />
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
