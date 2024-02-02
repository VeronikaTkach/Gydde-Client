import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import s from './style.module.scss';

export function PartnerGuidePage() {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.PartnerGuide);

  useEffect(() => {
    // dispatch(guideRequest.guidesGalery());
    dispatch(getStaticText.basic(TEXT_KEYS.GUIDES_GALLERY));

    // dispatch(getStaticText.hello())
    return () => {
      dispatch(removeUnusedStaticText(PageName.GuidesGallery));
    };
  }, []);

  return (
    <main className={cn(s.content)}>
      <LanguageList />
      {text && (
        <SubtitleWithBorderButton
          className={s.content__subtitle}
          sound={true}
          text={text?.subtitle || STATIC_TEXT[PageName.GuidesGallery].subtitle}
          buttonText={text?.buttonText || STATIC_TEXT[PageName.GuidesGallery].buttonText}
          buttonSticker={smileyEyesStar}
          buttonOnClick={() => dispatch(switchGuides(Position.Next))}
          size={Size.L}
        />
      )}
    </main>
  );
}
