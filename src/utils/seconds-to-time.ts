export function secondsToTime(intervalInSeconds: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const minutes = zeroLeft((intervalInSeconds / 60) % 60);
  const seconds = zeroLeft((intervalInSeconds % 60) % 60);

  return `${minutes}:${seconds}`;
}
