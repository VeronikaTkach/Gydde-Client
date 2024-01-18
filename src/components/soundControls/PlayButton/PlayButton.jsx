import cn from 'classnames';
import { SoundSwitchStatus } from '../../../core/constants/SoundSwitchStatus';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';
import { useRef } from 'react';

export function PlayButton({
  className,
  switchStatus = SoundSwitchStatus.On,
  onClick,
  ...props
}) {
  const classes = cn(
    s.soundSwitch,
    { ['iconPlay']: switchStatus === SoundSwitchStatus.On },
    { ['iconPause']: switchStatus === SoundSwitchStatus.Off },
    { [s.soundSwitch_off]: switchStatus === SoundSwitchStatus.Off },
    className
  );
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  return (
    <>
      {/* <audio ref={audioRef} controls>
        <source src='../../../../assets/audio/olivia-russian.mp3' type='audio/mp3' />
        Your browser does not support the audio element.
      </audio>
      <Button className={classes} onClick={playAudio} {...props} />
      <Button className={classes} onClick={pauseAudio} {...props} /> */}
      <Button className={classes} onClick={onClick} {...props} />
    </>
  );
}
