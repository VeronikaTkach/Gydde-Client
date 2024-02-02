import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mascotShows from '../../assets/images/mascot/mascotShows.png';
import smileyEyesStar from '../../assets/images/stickers/smileyEyesStar.png';
import { GuideCarousel } from '../../components/GuideCarousel';
import { SubtitleWithBorderButton } from '../../components/Subtitle';
import { Button } from '../../components/ui/buttons/Button';
import { PageName } from '../../core/constants/PageNames';
import { Position } from '../../core/constants/Position';
import { Size } from '../../core/constants/Size';
import { STATIC_TEXT } from '../../core/constants/staticText';
import { useRequestStaticText } from '../../core/hooks/useRequestStaticText';
import { guide } from '../../core/store/guide/slice';
import { switchGuides } from '../../core/store/slices/guidesCarouselSlice';
import s from './style.module.scss';

export function GuidePage() {
  const dispatch = useDispatch();
  const { text } = useRequestStaticText(PageName.GuidesGallery);
  const { guidesGallery, statusGuidesGallery } = useSelector(guide);

  useEffect(() => {
    // dispatch(guideRequest.guidesGalery());
    // dispatch(getStaticText.hello())
  }, []);

  return (
    <main className={cn(s.content)}>
      {text && (
        <div className={cn(s.content__mainScreen, s.mainScreen)}>
          <div className={cn(s.content__carousel)}>
            {/* {statusGuidesGallery === Status.Resolved && ( */}
            <GuideCarousel
              guidesGallery={[...guidesGallery, ...guidesGallery, ...guidesGallery]}
              staticText={text}
            />
            {/* )} */}
            <Button
              className={cn(
                s.content__button,
                s.content__button_prev,
                'iconArrowMessage'
              )}
              onClick={() => dispatch(switchGuides(Position.Next))}
            />
            <Button
              className={cn(
                s.content__button,
                s.content__button_next,
                'iconArrowMessage'
              )}
              onClick={() => dispatch(switchGuides(Position.Previous))}
            />
          </div>
          <div className={s.content__mascotImg}>
            <img src={mascotShows} alt={'mascot shows guides'} />
          </div>
          <SubtitleWithBorderButton
            className={s.content__subtitle}
            sound={true}
            text={text?.subtitle || STATIC_TEXT[PageName.GuidesGallery].subtitle}
            buttonText={
              text?.buttonText || STATIC_TEXT[PageName.GuidesGallery].buttonText
            }
            buttonSticker={smileyEyesStar}
            buttonOnClick={() => dispatch(switchGuides(Position.Next))}
            size={Size.L}
          />
        </div>
      )}
    </main>
  );
}
