import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { SubtitleWithAccentButton } from '../../../components/Subtitle';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { Wallet } from '../../../components/profile/Wallet';
import { PageName } from '../../../core/constants/PageNames';
import { STATIC_TEXT } from '../../../core/constants/staticText';
import { useRequestStaticText } from '../../../core/hooks/useRequestStaticText';
import {
  modalWindowState,
  showHistoryWindow,
} from '../../../core/store/slices/modalWindowStateSlice';
import { HistoryPopup } from './HistoryPopup/HistoryPopup';
import s from './style.module.scss';

export function ProfileWalletPage() {
  const dispatch = useDispatch();
  const { text } = useRequestStaticText(PageName.ProfileWallet);
  const { modalHistory } = useSelector(modalWindowState);

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
