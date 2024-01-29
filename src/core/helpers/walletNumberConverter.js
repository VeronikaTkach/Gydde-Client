const firstItem = 0;
const fourthItem = 4;

export default function walletNumberConverter(str) {
  const strPart1 = str.substring(firstItem, fourthItem);
  const strPart2 = str.substring(str.length - fourthItem, str.length);
  const newStr = strPart1 + '...' + strPart2;

  return newStr;
}
