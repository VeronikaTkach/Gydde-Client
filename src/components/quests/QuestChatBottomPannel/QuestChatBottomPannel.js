import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';

const placeholder = 'Enter a text';
const guideAnswers = {
  userAnswer: false,
  selector: true,
  text: 'Select an option',
  isActive: false,
};

export function QuestChatBottomPannel({ className }) {
  const [isInputNeed, setIsInputNeed] = useState(guideAnswers.userAnswer);
  const [isButtonActive, setIsButtonActive] = useState(guideAnswers.isActive);
  const [isTyping, setIsTyping] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const value = useRef(null);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else if (isInputNeed) {
      if (value.current.value !== '') {
        setIsButtonActive(true);
      } else {
        setIsButtonActive(false);
      }
    }
  }, [isTyping, isInputNeed]);

  function handleTyping(e) {
    if (e) setIsTyping((prev) => !prev);
  }

  function sendMessageOnKeyDown(e) {
    if (e.key === 'Enter') {
      setIsButtonActive(false);
      setIsInputNeed(false);
    }
  }

  function sendMessage() {
    setIsButtonActive(false);
    setIsInputNeed(false);
  }

  return (
    <div className={cn(s.chatBottomPannel, className)}>
      <div className={cn(s.chatBottomPannel__answer, s.chatBottomPannel__answer_general)}>
        {isInputNeed === true ? (
          <input
            ref={value}
            className={cn(s.chatBottomPannel__input)}
            placeholder={placeholder}
            onChange={() => handleTyping(isInputNeed)}
            onKeyDown={(e) => sendMessageOnKeyDown(e)}
          />
        ) : (
          <div
            className={cn(
              guideAnswers.selector === true
                ? s.chatBottomPannel__text_gray
                : s.chatBottomPannel__text_white
            )}>
            <p>{guideAnswers.text}</p>
          </div>
        )}
        <Button
          className={cn(
            isButtonActive === true
              ? s.chatBottomPannel__send
              : s.chatBottomPannel__send_disabled,
            'iconArrowSend'
          )}
          onClick={() => sendMessage()}
        />
      </div>
      {/* <div
        className={cn(
          s.chatBottomPannel__answer,
          s.chatBottomPannel__answer_buttons
        )}></div> */}
    </div>
  );
}
