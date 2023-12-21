import cn from 'classnames';
import s from './style.module.scss';
import { QuestStatus } from '../../../../core/constants/Quest';

export function StatusQuest({ className, status, ...props }) {
  const children =
    status === QuestStatus.Inactive
      ? 'inactive'
      : status === QuestStatus.Active
        ? 'active'
        : status === QuestStatus.Finished
          ? 'finished'
          : '';

  return (
    <div
      className={cn(
        s.status,
        { [s.status_inactive]: status === QuestStatus.Inactive },
        { [s.status_active]: status === QuestStatus.Active },
        { [s.status_finished]: status === QuestStatus.Finished },
        className
      )}
      {...props}>
      {children}
    </div>
  );
}
