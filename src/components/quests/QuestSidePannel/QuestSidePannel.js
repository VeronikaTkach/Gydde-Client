import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { guideRequest } from '../../../core/store/guide/thunk';
import { Status } from '../../../core/constants/Status';
import { guide } from '../../../core/store/guide/slice';
import { QuestChatCard } from '../QuestChatCard';
import { QuestSearch } from '../QuestSearch';
import s from './style.module.scss';

const firstItem = 0;

export function QuestSidePannel({ className, text }) {
  const dispatch = useDispatch();
  const { guidesPreview, statusGuidesPreview } = useSelector(guide);
  const [activeQuest, setActiveQuest] = useState(firstItem);

  useEffect(() => {
    // dispatch(guideRequest.guidesPreview());
  }, []);

  function handleClick(index) {
    setActiveQuest(index);
  }

  return (
    <div className={cn(s.questSidePannel, className)}>
      <div className={s.questSidePannel__search}>
        <QuestSearch text={text} cardsCount={guidesPreview?.length} />
      </div>
      <ul>
        {text &&
          statusGuidesPreview === Status.Resolved &&
          guidesPreview.map((item, index) => {
            return (
              <li key={item.id} onClick={() => handleClick(index)}>
                <QuestChatCard
                  isActive={activeQuest === index}
                  guideData={item}
                  text={text}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
