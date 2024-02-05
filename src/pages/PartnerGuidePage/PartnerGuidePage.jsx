import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import mascotForPartner from '../../assets/images/mascot/mascotShows.png';
import smileyEyesStar from '../../assets/images/stickers/smileyEyesStar.png';
import { LanguageList } from '../../components/LanguageList';
import { SubtitleWithBorderButton } from '../../components/Subtitle';
import { PageName } from '../../core/constants/PageNames';
import { Position } from '../../core/constants/Position';
import { Size } from '../../core/constants/Size';
import { STATIC_TEXT } from '../../core/constants/staticText';
import { TEXT_KEYS } from '../../core/constants/textKeys';
import { useStaticText } from '../../core/hooks/useStaticText';
import { switchGuides } from '../../core/store/slices/guidesCarouselSlice';
import { removeUnusedStaticText } from '../../core/store/staticText/slice';
import { getStaticText } from '../../core/store/staticText/thunk';
import s from '../PartnerGuidePage/style.module.scss';

export function PartnerGuidePage() {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.PartnerGuide);

  useEffect(() => {
    // dispatch(guideRequest.guidesGalery());
    dispatch(getStaticText.basic(TEXT_KEYS.PartnerGuide));

    // dispatch(getStaticText.hello())
    return () => {
      dispatch(removeUnusedStaticText(PageName.PartnerGuide));
    };
  }, []);

  return (
    <main className={s.partnersGuide}>
      <div className={cn(s.partnersGuide__main)}>
        <div className={s.partnersGuide__card}>CARD</div>
        <LanguageList className={s.partnersGuide__languages} />
      </div>
      <div className={s.partnersGuide__mascotImg}>
        <img src={mascotForPartner} alt='mascot shows' />
      </div>
      {text && (
        <SubtitleWithBorderButton
          className={s.partnersGuide__subtitle}
          sound={true}
          text={text?.subtitle || STATIC_TEXT[PageName.PartnerGuide].subtitle}
          buttonText={text?.buttonText || STATIC_TEXT[PageName.PartnerGuide].buttonText}
          buttonSticker={smileyEyesStar}
          buttonOnClick={() => dispatch(switchGuides(Position.Next))}
          size={Size.L}
        />
      )}
    </main>
  );
}
