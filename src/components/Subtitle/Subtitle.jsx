import { Button } from '../ui/buttons/Button/Button';
import cn from 'classnames';
import s from './style.module.scss';
import speaker from '../../assets/images/speaker.svg';
import hand from '../../assets/images/hand.svg';
import arrow from '../../assets/images/subtitleArrow.svg';
import { SubtitleBlock } from '../ui/tags/SubtitleBlock';

export function Subtitle({ className }) {
  return (
    <SubtitleBlock className={cn(s.subtitles, className)}>
      <div className={cn(s.subtitles__text)}>
        <Button className={cn(s.subtitles__speaker)}>
          <img src={speaker} alt='speaker' />
        </Button>
        <h2 className={cn(s.subtitles__greeting)}>
          Hello! I’m <span>Gydde!</span>
        </h2>
        <h2 className={cn(s.subtitles__greeting_border)}>
          Hello! I’m <span>Gydde!</span>
        </h2>
      </div>
      <div className={cn(s.subtitles__action)}>
        <Button className={cn(s.subtitles__answer)}>
          Hi, Gydde!
          <img src={hand} alt='hand' />
        </Button>
        <img className={cn(s.subtitles__arrow)} src={arrow} alt='arrow' />
      </div>
    </SubtitleBlock>
  );
}
