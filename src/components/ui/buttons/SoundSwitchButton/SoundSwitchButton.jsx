import cn from 'classnames';
import { SoundSwitchStatus } from '../../../../core/constants/SoundSwitchStatus';
import { Button } from '../Button';
import s from './style.module.scss';

export function SoundSwitchButton({
  className,
  switchStatus = SoundSwitchStatus.On,
  onClick,
  ...props
}) {
  const classes = cn(
    s.soundSwitch,
    { ['iconSoundOn']: switchStatus === SoundSwitchStatus.On },
    { ['iconSoundOff']: switchStatus === SoundSwitchStatus.Off },
    { [s.soundSwitch_off]: switchStatus === SoundSwitchStatus.Off },
    className
  );

  return <Button className={classes} onClick={onClick} {...props} />;
}
