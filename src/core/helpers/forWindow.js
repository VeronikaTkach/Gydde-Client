export function setWindowOptions(width, height, left, top) {
  const widthDefault = 400;
  const heightDefault = 600;
  const widthWindow = width || widthDefault;
  const heightWindow = height || heightDefault;
  const leftPosition = left || window.innerWidth - widthDefault;
  const topPosition = top || window.innerHeight - heightDefault;

  const options = `width=${widthWindow}, height=${heightWindow}, left=${leftPosition}, top=${topPosition}`;

  return options;
}
