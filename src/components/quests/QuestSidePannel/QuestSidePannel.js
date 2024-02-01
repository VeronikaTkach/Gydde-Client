import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { guideRequest } from '../../../core/store/guide/thunk';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { useStaticText } from '../../../core/hooks/useStaticText';
import { guide } from '../../../core/store/guide/slice';
import { removeUnusedStaticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { QuestChatCard } from '../QuestChatCard';
import { QuestSearch } from '../QuestSearch';
import s from './style.module.scss';

const firstItem = 0;

export function QuestSidePannel({ className }) {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.GuidesChat);
  const { guidesPreview, statusGuidesPreview } = useSelector(guide);
  const [activeQuest, setActiveQuest] = useState(firstItem);

  useEffect(() => {
    // dispatch(guideRequest.guidesPreview());
    dispatch(getStaticText.basic(TEXT_KEYS.GUIDES_CHAT));

    return () => {
      dispatch(removeUnusedStaticText(PageName.GuidesChat));
    };
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
