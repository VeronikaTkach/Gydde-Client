import { Howl } from 'howler';
import cn from 'classnames';
import audio from '../../../assets/images/temp/descriptionText.mp3';
import { SoundSwitchStatus } from '../../../core/constants/SoundSwitchStatus';
import { usePlayer } from '../../../core/hooks/player';
import { PlayButton } from '../PlayButton/PlayButton';
import s from './style.module.scss';

export const sound = new Howl({
  src: audio,
  html5: true,
  preload: 'metadata',
});

export const AudioPlayerWithProgressBar = () => {
  const { soundSwitch, progress, duration, switchAudio } = usePlayer(sound);

  const classes = cn(s.audio__btn, {
    [s.audio__off]: soundSwitch === SoundSwitchStatus.Off,
  });

  return (
    <div className={cn(s.audio)}>
      <PlayButton className={classes} onClick={switchAudio} switchStatus={soundSwitch} />
      <div className={cn(s.audio__right)}>
        <div className={cn(s.audio__progressBar)}>
          <div className={cn(s.audio__progress)} style={{ width: progress + '%' }}></div>
        </div>
        <div className={cn(s.audio__duration)}>{duration}</div>
      </div>
    </div>
  );
};
