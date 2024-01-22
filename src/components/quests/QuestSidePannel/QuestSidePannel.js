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
];

const firstItem = 0;
const numberOfCards = card.length;

export function QuestSidePannel({ className }) {
  const [activeQuest, setActiveQuest] = useState(firstItem);
  const [hoverQuest, setHoverQuest] = useState(null);
  // useEffect(() => {

  // }, []);

  function handleClick(index) {
    setActiveQuest(index);
  }

  function handleHover(e) {
    if (e === false) return;
    setHoverQuest(e);
  }

  return (
    <div className={cn(s.questSidePannel, className)}>
      <QuestSearch numberOfCards={numberOfCards} />
      <ul>
        {card.map((item, index) => {
          return (
            <li
              key={item.id} 
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(false)}>
              <QuestChatCard
                isHover={hoverQuest === index}
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
