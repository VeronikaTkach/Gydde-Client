import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';
import { QuestSearch } from '../QuestSearch';
import { QuestChatCard } from '../QuestChatCard';
import questImage from '../../../assets/images/questImage.png';

const card = [
  {
    title: 'The Great Battle',
    author: 'PancakeSwaper',
    progress: 'In progress',
    notification: 0,
    id: 0,
  },
  {
    title: 'The Great Battle',
    author: 'PancakeSwaper',
    progress: 'In progress',
    notification: 1,
    id: 1,
  },
  {
    title: 'The Great Battle',
    author: 'PancakeSwaper',
    progress: 'Completed',
    notification: 0,
    id: 2,
  },
  {
    title: 'The Great Battle',
    author: 'PancakeSwaper',
    progress: 'Completed',
    notification: 1,
    id: 3,
  },
  {
    title: 'The Great Battle',
    author: 'PancakeSwaper',
    progress: 'In progress',
    notification: 0,
    id: 0,
  },
  {
    title: 'The Great Battle',
    author: 'PancakeSwaper',
    progress: 'In progress',
    notification: 1,
    id: 1,
  },
  {
    title: 'The Great Battle',
    author: 'PancakeSwaper',
    progress: 'Completed',
    notification: 0,
    id: 2,
  },
  {
    title: 'The Great Battle',
    author: 'PancakeSwaper',
    progress: 'Completed',
    notification: 1,
    id: 3,
  },
];

const firstItem = 0;

export function QuestSidePannel({ className }) {
  const [activeQuest, setActiveQuest] = useState(firstItem);
  // useEffect(() => {

  // }, []);

  function handleClick(index) {
    setActiveQuest(index);
  }

  return (
    <div className={cn(s.questSidePannel, className)}>
      <QuestSearch numberOfCards={card.length} />
      <ul>
        {card.map((item, index) => {
          return (
            <li key={index} onClick={() => handleClick(index)}>
              <QuestChatCard
                isActive={activeQuest === index}
                text={item}
                img={questImage}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
