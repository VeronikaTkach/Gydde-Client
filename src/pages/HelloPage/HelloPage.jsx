import cn from 'classnames';
import { LanguageList } from '../../components/LanguageList';
import { BaseSubtitle } from '../../components/Subtitle';
import helper from '../../assets/images/gydde_picture.png';
import helloSticker from '../../assets/images/stickers/helloHand.png';
import s from './style.module.scss';

const mascotText = [
  { part: 'Hello! I’m', isHighlighted: false },
  { part: 'Gydde', isHighlighted: true },
];
const answerButtonText = 'Hi, Gydde!';

export function HelloPage() {
  return (
    <main className={cn(s.content)}>
      <div className={cn(s.content__main)}>
        <div className={cn(s.content__img)}>
          <img src={helper} alt='helper picture' />
        </div>
        <LanguageList />
      </div>
      <BaseSubtitle
        className={s.content__subtitle}
        sound={true}
        text={mascotText}
        answerButtonText={answerButtonText}
        answerButtonSticker={helloSticker}
      />
    </main>
  );
}
