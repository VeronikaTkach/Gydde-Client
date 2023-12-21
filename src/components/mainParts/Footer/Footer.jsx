import cn from 'classnames';
import s from './style.module.scss';

export default function Footer({ className }) {
  return <footer className={cn(s.footer, className)}></footer>;
}
