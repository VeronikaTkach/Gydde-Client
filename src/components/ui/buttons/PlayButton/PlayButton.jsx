import cn from 'classnames';
import { SoundSwitchStatus } from '../../../../core/constants/SoundSwitchStatus';
import { Button } from '../Button';
import s from './style.module.scss';

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

  return <Button className={classes} onClick={onClick} {...props} />;
}
