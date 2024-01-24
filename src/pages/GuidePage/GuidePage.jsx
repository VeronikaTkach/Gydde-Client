import cn from 'classnames';
import s from './style.module.scss';
import { GuideCarousel } from '../../components/GuideCarousel';
import { SubtitleWithTwoButtons } from '../../components/Subtitle';
import { useDispatch, useSelector } from 'react-redux';
import { switchGuides } from '../../core/store/slices/guidesCarouselSlice';
import { Position } from '../../core/constants/Position';
import mascotShows from '../../assets/images/mascot/mascotShows.png';
import { useEffect } from 'react';
import { guideRequest } from '../../core/store/guide/thunk';
import { guide } from '../../core/store/guide/slice';

export function GuidePage() {
  const dispatch = useDispatch();
  const { guidesGalery } = useSelector(guide);

  useEffect(() => {
    dispatch(guideRequest.guidesGalery());
  }, []);

  // console.log(guidesGalery);
  // console.log(localStorage.getItem('AuthorizationToken'),)
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
          leftButtonOnClick={() => dispatch(switchGuides(Position.Next))}
          rightButtonOnClick={() => dispatch(switchGuides(Position.Previous))}
        />
      </div>
    </main>
  );
}
