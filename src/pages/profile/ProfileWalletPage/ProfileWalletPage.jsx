import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubtitleWithAccentButton } from '../../../components/Subtitle';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { Wallet } from '../../../components/profile/Wallet';
import { PageName } from '../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { useStaticText } from '../../../core/hooks/useStaticText';
import {
  modalWindowState,
  showHistoryWindow,
} from '../../../core/store/slices/modalWindowStateSlice';
import { removeUnusedStaticText } from '../../../core/store/staticText/slice';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { HistoryPopup } from './HistoryPopup/HistoryPopup';
import s from './style.module.scss';

export function ProfileWalletPage() {
  const dispatch = useDispatch();
  const { text } = useStaticText(PageName.ProfileWallet);
  const { modalHistory } = useSelector(modalWindowState);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE_WALLET));

    return () => {
      dispatch(removeUnusedStaticText(PageName.ProfileWallet));
    };
  }, []);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__container)}>
          <ProfileFolder>{text && <Wallet text={text} />}</ProfileFolder>
        </div>
        {text && (
          <>
            <SubtitleWithAccentButton
              className={s.content__subtitle}
              text={text.subtitle || STATIC_TEXT[PageName.ProfileWallet].buttonText}
              buttonText={
                text.buttonText || STATIC_TEXT[PageName.ProfileWallet].buttonText
              }
              sound={true}
              buttonOnClick={() => dispatch(showHistoryWindow(true))}
            />
            {modalHistory && <HistoryPopup text={text} />}
          </>
        )}
      </main>
    </>
  );
}
