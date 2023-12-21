import cn from 'classnames';
import s from './style.module.scss';
import { QuestDifficulty } from '../../../../core/constants/Quest';

export function Difficulty({ className, level, ...props }) {
  const children =
    level === QuestDifficulty.Beginner
      ? 'beginner'
      : level === QuestDifficulty.Medium
        ? 'medium'
        : level === QuestDifficulty.Expert
          ? 'expert'
          : '';

  return (
    <div
      className={cn(
        s.level,
        { [s.level_beginner]: level === QuestDifficulty.Beginner },
        { [s.level_medium]: level === QuestDifficulty.Medium },
        { [s.level_expert]: level === QuestDifficulty.Expert },
        className
      )}
      {...props}>
      {children}
    </div>
  );
}
