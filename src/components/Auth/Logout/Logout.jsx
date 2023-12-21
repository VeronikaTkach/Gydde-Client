import cn from 'classnames';
import { Button } from '../../ui/buttons/Button';
import s from './style.module.scss';

export function Logout() {
  function handleckick(e) {
    e.preventDefault();
  }

  return (
    <>
      <Button className={cn(s.logout, 'icon_exit')} onClick={handleckick}>
        Log out
      </Button>
    </>
  );
}
