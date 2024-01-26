import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { Wallet } from '../../../components/profile/Wallet';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { SubtitleWithAccentButton } from '../../../components/Subtitle';

export function ProfileWalletPage() {
  const dispatch = useDispatch();
  const { staticTextProfileWallet, staticTextStatusProfileWallet } =
    useSelector(staticText);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE_WALLET));

    return () => {
      dispatch(removeUnusedStaticText(PageName.ProfileWallet));
    };
  }, []);
  console.log(staticTextProfileWallet);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__container)}>
          {staticTextStatusProfileWallet !== Status.Loading && (
            <ProfileFolder>
              <Wallet staticText={staticTextProfileWallet} />
            </ProfileFolder>
          )}
        </div>
        {/* {(staticTextStatusProfileWallet === Status.Resolved ||
          staticTextStatusProfileWallet === Status.Rejected) && (
          <SubtitleWithAccentButton
            className={s.content__subtitle}
            text={staticTextProfileWallet.subtitle}
            leftButtonText={staticTextProfileWallet.leftButtonText}
            rightButtonText={staticTextProfileWallet.rightButtonText}
            sound={true}
          />
        )} */}
      </main>
    </>
  );
}
