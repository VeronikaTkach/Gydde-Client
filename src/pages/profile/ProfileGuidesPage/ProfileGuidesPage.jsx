import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { ProfileFolder } from '../../../components/profile/ProfileFolder';

export function ProfileGuidesPage({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <main className={cn(s.content)}>
        <div className={cn(s.content__container)}>
          <ProfileFolder>тут писать компонент как в обычном диве</ProfileFolder>
        </div>
      </main>
    </>
  );
}
