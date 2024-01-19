import { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';

const steps = [
  { questions: 10, currentStep: 10 },
  { questions: 10, currentStep: 10 },
  { questions: 10, currentStep: 10 },
  { questions: 10, currentStep: 6 },
  { questions: 10, currentStep: 0 },
  { questions: 10, currentStep: 0 },
  { questions: 10, currentStep: 0 },
  { questions: 10, currentStep: 0 },
  { questions: 10, currentStep: 0 },
  { questions: 10, currentStep: 0 },
];

const completedStep = 1;
const converToPercent = 100;
const notStartedStep = 0;

export function QuestProgressBar({ className }) {
  return (
    <div className={cn(s.questProgressBar, className)}>
      {steps.map((item, index) => {
        return (
          <QuestProgressBarStep
            key={index}
            steps={item.questions}
            currentStep={item.currentStep}
          />
        );
      })}
    </div>
  );
}

function QuestProgressBarStep({ steps, currentStep }) {
  const [width, setWidth] = useState((currentStep / steps) * converToPercent + '%');

  useEffect(() => {
    if (width === '0%') setWidth('100%');
    else setWidth((currentStep / steps) * converToPercent + '%');
  }, [width]);

  return (
    <div
      className={cn(
        currentStep / steps === completedStep
          ? s.step__completed
          : currentStep / steps === notStartedStep
            ? s.step
            : s.step__progress
      )}>
      <div style={{ width: width }}></div>
      <div style={{ width: width }}></div>
      <div style={{ width: width }}></div>
    </div>
  );
}
