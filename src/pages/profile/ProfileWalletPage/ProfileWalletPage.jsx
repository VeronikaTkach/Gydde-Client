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

export function ProfileWalletPage({ children }) {
  const dispatch = useDispatch();
  const { staticTextWallet, staticTextStatusWallet } = useSelector(staticText);

  useEffect(() => {
    dispatch(getStaticText.basic([...TEXT_KEYS.PROFILE_WALLET, ...TEXT_KEYS.PROFILE]));

    return () => {
      dispatch(removeUnusedStaticText(PageName.ProfileWallet));
    };
  }, []);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__container)}>
          {staticTextStatusWallet !== Status.Loading && (
            <ProfileFolder staticTextProfile={staticTextWallet}>
              <Wallet staticTextWallet={staticTextWallet} />
            </ProfileFolder>
          )}
        </div>
      </main>
    </>
  );
}
