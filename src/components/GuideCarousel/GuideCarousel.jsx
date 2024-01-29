import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useColor } from 'color-thief-react';
import cn from 'classnames';
import img from '../../assets/images/temp/img.png';
import img1 from '../../assets/images/temp/pic.png';
import img2 from '../../assets/images/temp/pic1.png';
import img3 from '../../assets/images/mascot/mascotBored.png';
import img4 from '../../assets/images/mascot/mascotFriend.png';
import img5 from '../../assets/images/mascot/mascotGood.png';
import { Position } from '../../core/constants/Position';
import { Carousel } from '../../core/constants/Guide';
import {
  guidesCarousel,
  switchGuides,
} from '../../core/store/slices/guidesCarouselSlice';
import {
  CarouselFirstItem,
  CarouselNextItem,
  CarouselPreviousItem,
  CarouselSecondItem,
  CarouselThirdItem,
} from './CarouselItems';
import s from './style.module.scss';

const guidesArray = [
  {
    image: img1,
    title: 'Web3 Jungle Challenge: Navigate for Riches or Bust!',
    level: 'advanced',
    time: '2 min',
    reward: '~ $5',
    count: '3000 left',
  },
  {
    image: img,
    title: 'Web3 Jungle Challenge: Navigate for Riches or Bust!',
    level: 'advanced',
    time: '2 min',
    reward: '~ $5',
    count: '3000 left',
  },
  {
    image: img2,
    title: 'Web3 Jungle Challenge: Navigate for Riches or Bust!',
    level: 'advanced',
    time: '2 min',
    reward: '~ $5',
    count: '3000 left',
  },
  {
    image: img3,
    title: 'Web3 Jungle Challenge: Navigate for Riches or Bust!',
    level: 'advanced',
    time: '2 min',
    reward: '~ $5',
    count: '3000 left',
  },
  {
    image: img4,
    title: 'Web3 Jungle Challenge: Navigate for Riches or Bust!',
    level: 'advanced',
    time: '2 min',
    reward: '~ $5',
    count: '3000 left',
  },
  {
    image: img5,
    title: 'Web3 Jungle Challenge: Navigate for Riches or Bust!',
    level: 'advanced',
    time: '2 min',
    reward: '~ $5',
    count: '3000 left',
  },
];

//TODO переработать и сократить повторяющийся код в свободное время,
//TODO написать функцию по перемещению цветов по массиву
const blockClickTime = 300;

export function GuideCarousel({ className, staticText, guidesGallery }) {
  const dispatch = useDispatch();
  const { carouselGuidePosition } = useSelector(guidesCarousel);

  const moveOffId = useRef(null);
  const [isMove, setIsMove] = useState(false);
  const [colorsImages, setColorsImages] = useState([]);
  const [guides, setGuides] = useState(guidesArray);

  const { data: colorPreviousImg } = useColor(
    guides[guides.length - Carousel.LastGuide].image,
    'hex'
  );
  const { data: colorFirstImg } = useColor(
    guides[Carousel.FirstGuide].image,
    'jpg',
    'hex'
  );
  const { data: colorSecondImg } = useColor(guides[Carousel.SecondGuide].image, 'hex');
  const { data: colorThirdImg } = useColor(guides[Carousel.ThirdGuide].image, 'hex');
  const { data: colorNextImg } = useColor(guides[Carousel.NextGuide]?.image, 'hex');

  useEffect(() => {
    setColorsImages([
      colorFirstImg,
      colorSecondImg,
      colorThirdImg,
      colorNextImg,
      colorPreviousImg,
    ]);
  }, [colorPreviousImg, colorFirstImg, colorSecondImg, colorThirdImg, colorNextImg]);

  useEffect(() => {
    if (carouselGuidePosition !== Position.Current) {
      setIsMove(true);
    }
  }, [carouselGuidePosition]);

  useEffect(() => {
    if (isMove && carouselGuidePosition === Position.Next) {
      moveOffId.current = setTimeout(() => {
        setIsMove(false);
        dispatch(switchGuides(Position.Current));
        setGuides((prev) => {
          return [
            prev[prev.length - Carousel.LastGuide],
            ...prev.slice(Carousel.FirstGuide, prev.length - Carousel.LastGuide),
          ];
        });
        setColorsImages((prev) => {
          return [colorPreviousImg, ...prev.slice(Carousel.SecondGuide)];
        });
      }, blockClickTime);
    } else if (isMove && carouselGuidePosition === Position.Previous) {
      moveOffId.current = setTimeout(() => {
        setIsMove(false);
        dispatch(switchGuides(Position.Current));
        setGuides((prev) => {
          return [...prev.slice(Carousel.SecondGuide), prev[Carousel.FirstGuide]];
        });

        setColorsImages((prev) => {
          return [
            ...prev.slice(Carousel.SecondGuide),
            prev[Carousel.NextGuide || Carousel.FirstGuide],
          ];
        });
      }, blockClickTime);
    }
  }, [isMove]);

  return (
    <div className={cn(s.gallery__carousel, s.carousel, className)}>
      <CarouselPreviousItem
        isMove={isMove}
        guides={guides}
        guideMove={carouselGuidePosition}
        colorImg={colorsImages[colorsImages.length - Carousel.LastGuide]}
      />
      <CarouselFirstItem
        isMove={isMove}
        guides={guides}
        guideMove={carouselGuidePosition}
        colorImg={colorsImages[Carousel.FirstGuide]}
        staticText={staticText}
      />
      <CarouselSecondItem
        isMove={isMove}
        guides={guides}
        guideMove={carouselGuidePosition}
        colorImg={colorsImages[Carousel.SecondGuide]}
        staticText={staticText}
      />
      <CarouselThirdItem
        isMove={isMove}
        guides={guides}
        guideMove={carouselGuidePosition}
        colorImg={colorsImages[Carousel.ThirdGuide]}
        staticText={staticText}
      />
      <CarouselNextItem
        isMove={isMove}
        guides={guides}
        guideMove={carouselGuidePosition}
        colorNextImg={colorsImages[Carousel.NextGuide]}
        colorFirstImg={colorsImages[Carousel.FirstGuide]}
      />
    </div>
  );
}
