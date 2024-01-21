import cn from 'classnames';
import s from './style.module.scss';
import { GuideCarousel } from '../../components/GuideCarousel';
import { SubtitleWithTwoButtons } from '../../components/Subtitle';
import { useDispatch } from 'react-redux';
import { switchGuides } from '../../core/store/slices/guidesCarouselSlice';
import { Position } from '../../core/constants/Position';
import mascotShows from '../../assets/images/mascot/mascotShows.png';

export function GuidePage() {
  const dispath = useDispatch();

  return (
    <main className={cn(s.content)}>
      <div className={cn(s.content__mainScreen, s.mainScreen)}>
        <div className={cn(s.content__carousel)}>
          <GuideCarousel />
        </div>
        <img
          className={s.content__mascotImg}
          src={mascotShows}
          alt={'mascot shows guides'}
        />
        <SubtitleWithTwoButtons
          className={s.content__subtitle}
          sound={true}
          text={'some text'}
          leftButtonText={'Back'}
          rightButtonText={'Next'}
          leftButtonOnClick={() => dispath(switchGuides(Position.Next))}
          rightButtonOnClick={() => dispath(switchGuides(Position.Previous))}
        />
      </div>
    </main>
  );
}
