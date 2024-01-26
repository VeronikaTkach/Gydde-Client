import { Howl } from 'howler';
import cn from 'classnames';
import { SubtitleBlock } from '../ui/tags/SubtitleBlock';
import { TextWithBorder } from '../ui/tags/TextWithBorder';
import { PlayButton } from '../soundControls/PlayButton/PlayButton';
import s from './style.module.scss';
import { AudioRate } from '../soundControls/AudioRate';
import { usePlayer } from '../../core/hooks/player';
import voice from '../../assets/images/temp/descriptionText.mp3';

// export
const audio = new Howl({
  src: voice, //sound из пропсов, так как это создаётся обьект, наверно его не стоит пихать в компонент, иначе он будет пересоздаваться при ререндере, может аудио генерировать в юзеффекте конкретного компонента сохранять в стор ссылку на него, а тут только контроль оставить уже. Можно также попробовать в хук вынести ( не помню перерендериваются ли кастомные хуки, вроде не должны)
  html5: true,
  autoplay: true, //из стора должно браться состояние (отдельно для квестов, отдельно для страниц)
});

export function BaseSubtitle({
  className,
  mascotVoice,
  mascotText,
  answerToMascot,
  sound,
  text,
}) {
  const { soundSwitch, switchAudio } = usePlayer(audio);

  return (
    <Subtitle
      className={cn(s.baseSubtitle, { [s.baseSubtitle_noAudio]: !sound }, className)}
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
