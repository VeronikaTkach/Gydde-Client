import cn from 'classnames';
import s from './style.module.scss';
import { GuideCarousel } from '../../components/GuideCarousel';
import { SubtitleWithBorderButton } from '../../components/Subtitle';
import { useDispatch, useSelector } from 'react-redux';
import { switchGuides } from '../../core/store/slices/guidesCarouselSlice';
import { Position } from '../../core/constants/Position';
import mascotShows from '../../assets/images/mascot/mascotShows.png';
import { useEffect } from 'react';
import { guideRequest } from '../../core/store/guide/thunk';
import { guide } from '../../core/store/guide/slice';
import { getStaticText } from '../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { removeUnusedStaticText, staticText } from '../../core/store/staticText/slice';
import { PageName } from '../../core/constants/PageNames';
import { Size } from '../../core/constants/Size';
import { Status } from '../../core/constants/Status';
import smileyEyesStar from '../../assets/images/stickers/smileyEyesStar.png';
import { STATIC_TEXT } from '../../core/constants/staticText';
import { Button } from '../../components/ui/buttons/Button';

export function GuidePage() {
  const dispatch = useDispatch();
  const { guidesGallery, statusGuidesGallery } = useSelector(guide);
  const { staticTextGuidesGallery, staticTextStatusGuidesGallery } =
    useSelector(staticText);

  useEffect(() => {
    dispatch(guideRequest.guidesGalery());
    dispatch(getStaticText.basic(TEXT_KEYS.GUIDES_GALLERY));

    return () => {
      dispatch(removeUnusedStaticText(PageName.GuidesGallery));
    };
  }, []);

  return (
    <main className={cn(s.content)}>
      {staticTextGuidesGallery && (
        <div className={cn(s.content__mainScreen, s.mainScreen)}>
          <div className={cn(s.content__carousel)}>
            {/* {statusGuidesGallery === Status.Resolved && ( */}
            <GuideCarousel
              guidesGallery={[...guidesGallery, ...guidesGallery, ...guidesGallery]}
              staticText={staticTextGuidesGallery}
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
            text={
              staticTextGuidesGallery.subtitle ||
              STATIC_TEXT[PageName.GuidesGallery].subtitle
            }
            buttonText={staticTextGuidesGallery.buttonText}
            buttonSticker={smileyEyesStar}
            buttonOnClick={() => dispatch(switchGuides(Position.Next))}
            size={Size.L}
          />
        </div>
      )}
    </main>
  );
}
