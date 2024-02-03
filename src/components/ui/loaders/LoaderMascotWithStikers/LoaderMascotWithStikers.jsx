import cn from 'classnames';
import ball from '../../../../assets/images/stickers/ball.png';
import bangOrange from '../../../../assets/images/stickers/bangOrange.png';
import bangWhite from '../../../../assets/images/stickers/bangWhite.png';
import metamaskSmiley from '../../../../assets/images/stickers/metamask.png';
import smiley from '../../../../assets/images/stickers/smiley.png';
import s from './style.module.scss';

const iconsDefault = [smiley, ball, bangOrange, metamaskSmiley, bangWhite];

export function LoaderMascotWithStikers({
  className,
  mascotImg,
  mascotSize,
  spinnerSize,
  spinnerTopPosition,
  icons = iconsDefault,
}) {
  return (
    <div className={cn(s.loader, className)}>
      <div className={cn(s.spinner)}>
        {icons.map((item, index) => (
          <div
            className={s.spinner__img}
            key={index}
            style={{
              transformOrigin: `0 ${spinnerSize}`,
              marginTop: spinnerTopPosition,
            }}>
            <img src={item} alt='sticker' />
          </div>
        ))}
      </div>
      <div className={s.loader__mascot} style={mascotSize}>
        {mascotImg && <img src={mascotImg} alt={'mascot'} />}
      </div>
    </div>
  );
}
