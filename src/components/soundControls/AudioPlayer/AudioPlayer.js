import cn from 'classnames';
import { Button } from '../../ui/buttons/Button';
import { PlayButton } from '../PlayButton/PlayButton';
import audio from '../../../assets/images/temp/descriptionText.mp3';
import s from './style.module.scss';
import { usePlayer } from '../../../core/hooks/player';
import { sound } from './AudioPlayerWithProgressBar';
import { useSelector } from 'react-redux';
import { soundSettings } from '../../../core/store/slices/soundSettingsSlice';

export function AudioPlayer({ className }) {
  const { soundId } = useSelector(soundSettings);
  const { soundSwitch, switchRemoteAudio, switchToPrev, switchToNext } = usePlayer(
    sound,
    soundId
  );

  return (
    <div className={cn(s.audioPlayer, className)}>
      <Button
        className={cn(s.audioPlayer__prev, 'iconRewind')}
        onClick={switchToPrev}></Button>
      <PlayButton
        className={cn(s.audioPlayer__play)}
        onClick={switchRemoteAudio}
        switchStatus={soundSwitch}></PlayButton>
      <Button
        className={cn(s.audioPlayer__next, 'iconRewind')}
        onClick={switchToNext}></Button>
    </div>
  );
}
