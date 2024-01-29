import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { guideRequest } from '../../../core/store/guide/thunk';
import { guide } from '../../../core/store/guide/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { QuestSearch } from '../QuestSearch';
import { QuestChatCard } from '../QuestChatCard';
import s from './style.module.scss';

const firstItem = 0;

export function QuestSidePannel({ className }) {
  const dispatch = useDispatch();
  const { guidesPreview, statusGuidesPreview } = useSelector(guide);
  const { staticTextGuidesChat, staticTextStatusGuidesChat } = useSelector(staticText);
  const [activeQuest, setActiveQuest] = useState(firstItem);

  useEffect(() => {
    dispatch(guideRequest.guidesPreview());
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
        <QuestSearch cardsCount={guidesPreview?.length} />
      </div>
      <ul>
        {staticTextStatusGuidesChat === Status.Resolved &&
          statusGuidesPreview === Status.Resolved &&
          guidesPreview.map((item, index) => {
            return (
              <li key={item.id} onClick={() => handleClick(index)}>
                <QuestChatCard
                  isActive={activeQuest === index}
                  guideData={item}
                  staticText={staticTextGuidesChat}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
