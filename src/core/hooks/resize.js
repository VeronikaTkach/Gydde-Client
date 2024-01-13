import { useState, useEffect } from 'react';

export function useResize(staticWidth, staticHeight) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [zoomValue, setZoomValue] = useState(height / staticHeight);
  const maxAvailableWidth =
    width / zoomValue > staticWidth ? staticWidth : width / zoomValue;

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  function resize() {
    if (window.innerHeight !== height) {
      setHeight(window.innerHeight);
      if (!(window.innerWidth / (window.innerHeight / staticHeight) < staticWidth)) {
        setZoomValue(window.innerHeight / staticHeight);
      }
    }
    if (window.innerWidth !== width) {
      setWidth(window.innerWidth);
      if (window.innerWidth / (window.innerHeight / staticHeight) < staticWidth) {
        setZoomValue(window.innerWidth / staticWidth);
      }
    }
  }

  return { width, height, zoomValue, maxAvailableWidth };
}
