import cn from 'classnames';
import { Prev } from '../../../assets/images/js/Prev'; // TODO добавить через иконочный шрифт
import { usePlayer } from '../../../core/hooks/player';
import { Button } from '../../ui/buttons/Button';
import { PlayButton } from '../PlayButton/PlayButton';
import { sound } from './AudioPlayerWithProgressBar';
import s from './style.module.scss';

export function AudioPlayer({ className }) {
  const { soundSwitch, switchAudio } = usePlayer(sound);

  return (
    <div className={cn(s.audioPlayer, className)}>
      <Button className={cn(s.audioPlayer__prev)}>
        <Prev />
      </Button>
      <PlayButton
        className={cn(s.audioPlayer__play)}
        onClick={switchAudio}
        switchStatus={soundSwitch}></PlayButton>
      <Button className={cn(s.audioPlayer__next, 'iconRewind')}></Button>
    </div>
  );
}
