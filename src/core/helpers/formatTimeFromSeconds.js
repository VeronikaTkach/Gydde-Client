export function formatTimeFromSeconds(seconds) {
  const maxTimePart = 60;
  const padStart = 2;
  const roundedSeconds = Math.round(seconds);
  const minutes = Math.floor(roundedSeconds / maxTimePart);
  const remainingSeconds = roundedSeconds % maxTimePart;
  const formattedMinutes = String(minutes).padStart(padStart, '0');
  const formattedSeconds = String(remainingSeconds).padStart(padStart, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}
