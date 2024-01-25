import cn from 'classnames';
import s from './style.module.scss';
import { GuideCarousel } from '../../components/GuideCarousel';
import {
  SubtitleWithAccentButton,
  SubtitleWithBorderButton,
  SubtitleWithTwoButtons,
} from '../../components/Subtitle';
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
import { useColor } from 'color-thief-react';

export function GuidePage() {
  const dispatch = useDispatch();
  const { guidesGallery, statusGuidesGallery } = useSelector(guide);
  // const { staticTextGuidesGallery, staticTextStatusGuidesGallery } =
    // useSelector(staticText);

  useEffect(() => {
    dispatch(guideRequest.guidesGalery());
    // dispatch(getStaticText.basic(TEXT_KEYS.GUIDES_GALLERY));

    return () => {
      // dispatch(removeUnusedStaticText(PageName.GuidesGallery));
    };
  }, []);

  const {
    data: colorSecondImg,
    loading,
    error,
  } = useColor(guidesGallery[0]?.image, 'hex', { crossOrigin: 'anonymus' });

  const {
    data: colorSecondImg2,
    loading2,
    error2,
  } = useColor(guidesGallery[0]?.image, 'hex');
  console.log('res1', colorSecondImg, error, loading);
  console.log('res1', colorSecondImg2, error2, loading2);
  // const [load, setload] = useState(null);
  // console.log(loading);
  // useEffect(() => {
  //   if (!loading) {
  //     console.log(1);
  //   }
  // }, [loading]);

  // useEffect(() => {
  //   if (statusGuidesGallery) {
  //     console.log(colorSecondImg);
  //   }
  // }, [statusGuidesGallery]);

  // console.log(staticTextGuidesGallery);
  // console.log(guidesGallery, statusGuidesGallery);
  // console.log(statusGuidesGallery === Status.Resolved);

  // if (guidesGalery) {
  //   console.log([...guidesGalery, ...guidesGalery, ...guidesGalery]);
  // }
  // console.log(guidesGalery);
  // console.log(localStorage.getItem('AuthorizationToken'));
  // console.log(statusGuidesGalery)
  return (<></>
    // <main className={cn(s.content)}>
    //   {staticTextStatusGuidesGallery !== Status.Loading &&
    //     staticTextStatusGuidesGallery !== undefined && (
    //       <div className={cn(s.content__mainScreen, s.mainScreen)}>
    //         <div className={cn(s.content__carousel)}>
    //           {/* {statusGuidesGallery === Status.Resolved && (
    //             <GuideCarousel
    //               guidesGallery={[...guidesGallery, ...guidesGallery, ...guidesGallery]}
    //               staticText={staticTextGuidesGallery}
    //             />
    //           )} */}
    //         </div>
    //         <img
    //           className={s.content__mascotImg}
    //           src={mascotShows}
    //           alt={'mascot shows guides'}
    //         />
    //         <SubtitleWithBorderButton
    //           className={s.content__subtitle}
    //           sound={true}
    //           text={
    //             staticTextGuidesGallery.subtitle ||
    //             STATIC_TEXT[PageName.GuidesGallery].subtitle
    //           }
    //           buttonText={staticTextGuidesGallery.buttonText}
    //           buttonSticker={smileyEyesStar}
    //           buttonOnClick={() => dispatch(switchGuides(Position.Next))}
    //           size={Size.L}
    //         />
    //       </div>
    //     )}
    // </main>
  );
}
