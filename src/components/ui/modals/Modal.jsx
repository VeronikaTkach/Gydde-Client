import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function Modal({ children, className }) {
  const modalRef = useRef(null);

  if (!modalRef.current) {
    modalRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('app');
    modalRoot.appendChild(modalRef.current);

    return () => modalRoot.removeChild(modalRef.current);
  }, []);

  return createPortal(<div className={className}>{children}</div>, modalRef.current);
}
