import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export function NavigationLink({ children, to, className, activeClassName, ...props }) {
  const activeClass = ({ isActive }) =>
    isActive ? cn(activeClassName, className) : className;

  function handleClick(e) {
    if (props.disabled) e.preventDefault();
  }

  return (
    <NavLink className={activeClass} to={to} onClick={handleClick} {...props}>
      {children}
    </NavLink>
  );
}
