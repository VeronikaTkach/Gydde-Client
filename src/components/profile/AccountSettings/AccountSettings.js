import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Button } from '../../ui/buttons/Button';

export function AccountSettings({ className }) {
  useEffect(() => {}, []);

  return (
    <>
      <div className={cn(s.settings)}>

      </div>
    </>
  );
}
