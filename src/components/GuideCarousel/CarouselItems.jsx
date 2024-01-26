import cn from 'classnames';
import { Position } from '../../core/constants/Position';
import { Carousel } from '../../core/constants/Guide';
import { Property } from '../../core/constants/Property';
import s from './style.module.scss';
import { GUIDE_STATUS } from '../../core/constants/backendEnums';

//TODO переработать и сократить повторяющийся код в свободное время
export function ItemInfo({ guide, idInfoClose, staticText }) {
  return (
    <div
      className={cn(s.card__info, s.info, {
        [s.info_close]: idInfoClose,
      })}>
      <div className={cn(s.info__status)}>
        {/* {staticText.guideStatus[GUIDE_STATUS[guide]]} */}
        in progress
      </div>
      <div className={cn(s.info__title)}>
        Web3 Jungle Challenge: Navigate for Riches or Bust!
      </div>
      <div className={cn(s.info__detail, s.detail)}>
        <div className={cn(s.detail__level)}>advanced</div>
        <div className={cn(s.detail__time)}>2 min</div>
      </div>
      <div className={cn(s.info__rewards, s.rewards)}>
        <div className={cn(s.rewards__title)}>Rewards</div>
        <div className={cn(s.rewards__sum)}>~ $5</div>
        <div className={cn(s.rewards__count)}>3000 left</div>
      </div>
    </div>
  );
}

export function CarouselPreviousItem({ isMove, guides, guideMove, colorImg }) {
  return (
    <>
      {!isMove ? (
        <div
          className={cn(s.card, s.carousel__prevCard, {
            [cn(s.carousel__prevCard_away)]: guideMove === Position.Current,
          })}>
          <div className={s.card__imageContainer}>
            <div
              className={cn(s.card__imgBg)}
              style={{
                boxShadow: `20px -20px 120px ${colorImg}`,
              }}></div>
            <img
              className={s.card__img}
              src={guides[guides.length - Carousel.LastGuide].image}
              alt=''
            />
          </div>
        </div>
      ) : (
        <div
          className={cn(s.card, s.carousel__prevCard, {
            [cn(s.carousel__prevCard_here)]: guideMove === Position.Next,
          })}>
          <div className={s.card__imageContainer}>
            <div
              className={cn(s.card__imgBg)}
              style={{
                boxShadow: `20px -20px 120px ${colorImg}`,
              }}></div>
            <img
              className={s.card__img}
              src={guides[guides.length - Carousel.LastGuide].image}
              alt=''
            />
          </div>
        </div>
      )}
    </>
  );
}

export function CarouselFirstItem({ isMove, guides, guideMove, colorImg, staticText }) {
  return (
    <>
      {!isMove ? (
        <div className={cn(s.card, s.carousel__prevCard)}>
          <div className={s.card__imageContainer}>
            <div
              className={cn(s.card__imgBg)}
              style={{
                opacity: guideMove === Position.Current ? Property.On : Property.Off,
                boxShadow:
                  guideMove === Position.Current ? `20px -20px 120px ${colorImg}` : '',
              }}></div>
            <img
              className={s.card__img}
              src={guides[Carousel.FirstGuide].image}
              alt={'guide image'}
            />
          </div>
        </div>
      ) : (
        <div
          className={cn(
            s.card,
            s.carousel__prevCard,
            { [cn(s.carousel__prevCard_moveRight)]: guideMove === Position.Next },
            { [cn(s.carousel__prevCard_moveLeft)]: guideMove === Position.Previous }
          )}
          style={{
            boxShadow: guideMove === Position.Next ? `0 0 40px ${colorImg}` : '',
          }}>
          <div className={s.card__imageContainer}>
            <div
              className={cn(s.card__imgBg)}
              style={{
                boxShadow:
                  guideMove === Position.Current ? `20px -20px 120px ${colorImg}` : '',
              }}></div>
            <img
              className={s.card__img}
              src={guides[Carousel.FirstGuide].image}
              alt={'guide image'}
            />
          </div>
          <ItemInfo
            guide={guides[Carousel.FirstGuide]}
            staticText={staticText}
            idInfoClose={
              guideMove === Position.Current || guideMove === Position.Previous
            }
          />
        </div>
      )}
    </>
  );
}

export function CarouselSecondItem({ isMove, guides, guideMove, colorImg, staticText }) {
  return (
    <>
      {!isMove ? (
        <div
          className={cn(s.card, s.carousel__currentCard_center)}
          style={{
            boxShadow: `0 0 40px ${colorImg}`,
          }}>
          <div className={s.card__imageContainer}>
            <div className={cn(s.card__imgBg)}></div>
            <img
              className={s.card__img}
              src={guides[Carousel.SecondGuide].image}
              alt={'guide image'}
            />
          </div>
          <ItemInfo
            guide={guides[Carousel.SecondGuide]}
            staticText={staticText}
            idInfoClose={false}
          />
        </div>
      ) : (
        <div
          className={cn(
            s.card,
            s.carousel__currentCard,
            { [cn(s.carousel__currentCard_moveRight)]: guideMove === Position.Next },
            { [cn(s.carousel__currentCard_moveLeft)]: guideMove === Position.Previous }
          )}
          style={{
            boxShadow: guideMove === Position.Current ? `0 0 40px ${colorImg}` : '',
          }}>
          <div className={s.card__imageContainer}>
            <div
              className={cn(s.card__imgBg)}
              style={{
                boxShadow:
                  guideMove === Position.Next
                    ? `-20px -20px 120px ${colorImg}`
                    : guideMove === Position.Previous
                      ? `-20px -20px 120px ${colorImg}`
                      : '',
              }}></div>
            <img
              className={s.card__img}
              src={guides[Carousel.SecondGuide].image}
              alt={'guide image'}
            />
          </div>
          <ItemInfo
            guide={guides[Carousel.SecondGuide]}
            staticText={staticText}
            idInfoClose={guideMove === Position.Next || guideMove === Position.Previous}
          />
        </div>
      )}
    </>
  );
}

export function CarouselThirdItem({ isMove, guides, guideMove, colorImg, staticText }) {
  return (
    <>
      {!isMove ? (
        <div className={cn(s.card, s.carousel__nextCard)}>
          <div className={s.card__imageContainer}>
            <div
              className={cn(s.card__imgBg)}
              style={{
                opacity: guideMove === Position.Current ? Property.On : Property.Off,
                boxShadow:
                  guideMove === Position.Current ? `-20px -20px 120px ${colorImg}` : '',
              }}></div>
            <img
              className={s.card__img}
              src={guides[Carousel.ThirdGuide].image}
              alt={'guide image'}
            />
          </div>
        </div>
      ) : (
        <div
          className={cn(
            s.card,
            s.carousel__nextCard_rr,
            { [cn(s.carousel__nextCard_moveRight)]: guideMove === Position.Next },
            { [cn(s.carousel__nextCard_moveLeft)]: guideMove === Position.Previous }
          )}
          style={{
            boxShadow: guideMove === Position.Previous ? `0 0 40px ${colorImg}` : '',
          }}>
          <div className={s.card__imageContainer}>
            <div
              className={cn(s.card__imgBg)}
              style={{
                boxShadow:
                  guideMove === Position.Current ? `20px -20px 120px ${colorImg}` : '',
              }}></div>
            <img
              className={s.card__img}
              src={guides[Carousel.ThirdGuide].image}
              alt={'guide image'}
            />
          </div>
          <ItemInfo
            guide={guides[Carousel.ThirdGuide]}
            staticText={staticText}
            idInfoClose={guideMove === Position.Next || guideMove === Position.Current}
          />
        </div>
      )}
    </>
  );
}

export function CarouselNextItem({
  isMove,
  guides,
  guideMove,
  colorNextImg,
  colorFirstImg,
}) {
  return (
    <>
      {!isMove ? (
        <div
          className={cn(s.card, s.carousel__nextCard, {
            [cn(s.carousel__nextCard_away)]: guideMove === Position.Current,
          })}>
          <div className={s.card__imageContainer}>
            <div
              className={cn(s.card__imgBg)}
              style={{
                boxShadow:
                  guideMove === Position.Previous
                    ? `-20px -20px 120px ${
                        Carousel.NextGuide ? colorNextImg : colorFirstImg
                      }`
                    : '',
              }}></div>
            <img
              className={s.card__img}
              src={guides[Carousel.ThirdGuide].image}
              alt={'guide image'}
            />
          </div>
        </div>
      ) : (
        <div
          className={cn(s.card, s.carousel__nextCard, {
            [cn(s.carousel__nextCard_here)]: guideMove === Position.Previous,
          })}>
          <div className={s.card__imageContainer}>
            <div
              className={cn(s.card__imgBg)}
              style={{
                opacity: 1,
                boxShadow: `-20px -20px 120px ${
                  Carousel.NextGuide ? colorNextImg : colorFirstImg
                }`,
              }}></div>
            <img
              className={s.card__img}
              src={guides[Carousel.NextGuide || Carousel.FirstGuide].image}
              alt=''
            />
          </div>
        </div>
      )}
    </>
  );
}
