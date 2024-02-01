import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { Howl, Howler } from 'howler';
import audio from '../../../assets/images/temp/descriptionText.mp3';
import { SoundSwitchStatus } from '../../../core/constants/SoundSwitchStatus';
import { usePlayer } from '../../../core/hooks/player';
import { PlayButton } from '../PlayButton/PlayButton';
import s from './style.module.scss';
import {
  addSoundIds,
  clearSoundIds,
  setSoundId,
} from '../../../core/store/slices/soundSettingsSlice';

export const sound = new Howl({
  src: audio, //sound из пропсов, так как это создаётся обьект, наверно его не стоит пихать в компонент, иначе он будет пересоздаваться при ререндере, может аудио генерировать в юзеффекте конкретного компонента сохранять в стор ссылку на него, а тут только контроль оставить уже. Можно также попробовать в хук вынести ( не помню перерендериваются ли кастомные хуки, вроде не должны)
  html5: true,
  autoplay: true, //из стора должно браться состояние (отдельно для квестов, отдельно для страниц)
});

export const AudioPlayerWithProgressBar = () => {
  const dispatch = useDispatch();
  const soundIdRef = useRef(null);
  const { switchStatus, progress, duration, switchAudio } = usePlayer(
    sound,
    soundIdRef.current
  );

  useEffect(() => {
    soundIdRef.current = sound.play();
    sound.stop(soundIdRef.current);
    // dispatch(setSoundId(soundIdRef.current));
    dispatch(addSoundIds(soundIdRef.current));

    return () => {
      Howler.unload();
      dispatch(setSoundId(null));
      dispatch(clearSoundIds());
    };
  }, []);

  const classes = cn(s.audio__btn, {
    [s.audio__off]: switchStatus === SoundSwitchStatus.Off,
  });

  return (
    <div className={cn(s.audio)}>
      <PlayButton className={classes} onClick={switchAudio} switchStatus={switchStatus} />
      <div className={cn(s.audio__right)}>
        <div className={cn(s.audio__progressBar)}>
          <div className={cn(s.audio__progress)} style={{ width: progress + '%' }}></div>
        </div>
        <div className={cn(s.audio__duration)}>{duration}</div>
      </div>
    </div>
  );
};
