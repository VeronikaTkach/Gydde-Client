import cn from 'classnames';
import s from './style.module.scss';
import { QuestStatus, QuestStep } from '../../../../core/constants/Quest';
import BorderTag from '../BorderTag/BorderTag';

export function QuestSteps({ className, step, status, ...props }) {
  return (
    <div className={cn(s.path, className)} {...props}>
      <BorderTag
        className={cn(s.path__step, {
          [s.path__step_done]:
            step > QuestStep.NotStarted || status === QuestStatus.Active,
        })}>
        Choose task
      </BorderTag>
      <div className={cn(s.path__arrow, 'icon_arrow_towards')} />
      <BorderTag
        className={cn(s.path__step, {
          [s.path__step_done]: step > QuestStep.NotStarted,
        })}>
        Jump
      </BorderTag>
      <div className={cn(s.path__arrow, 'icon_arrow_towards')} />
      <BorderTag
        className={cn(s.path__step, {
          [s.path__step_done]: step === QuestStep.Rewarded,
        })}>
        Reward
      </BorderTag>
    </div>
  );
}
