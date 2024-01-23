import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { NavigationLink } from '../../../components/ui/Navlink';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';
import { RefferalAndGuides } from '../../../components/profile/RefferalAndGuides/RefferalAndGuides';
import { TEXT_KEYS } from '../../../core/constants/textKeys';
import { PageName } from '../../../core/constants/PageNames';
import { Status } from '../../../core/constants/Status';
import { getStaticText } from '../../../core/store/staticText/thunk';
import { removeUnusedStaticText, staticText } from '../../../core/store/staticText/slice';

export function ProfileRefferalPage({ children }) {
  const dispatch = useDispatch();
  const { staticTextProfileReferals, staticTextStatusProfileReferals } = useSelector(staticText);

  useEffect(() => {
    dispatch(getStaticText.basic(TEXT_KEYS.PROFILE_REFERALS));

    return () => {
      dispatch(removeUnusedStaticText(PageName.ProfileReferals));
    };
  }, []);
  console.log(staticTextProfileReferals);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__container)}>
          <ProfileFolder>
            <RefferalAndGuides text={staticTextProfileReferals}/>
          </ProfileFolder>
        </div>
      </main>
    </>
  );
}
