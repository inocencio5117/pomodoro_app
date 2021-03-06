import { zeroLeft } from './zero-left';

export function secondsToTime(intervalInSeconds: number): string {
  const hours = zeroLeft(intervalInSeconds / 3600);
  const minutes = zeroLeft((intervalInSeconds / 60) % 60);
  const seconds = zeroLeft((intervalInSeconds % 60) % 60);

  return `${hours}:${minutes}:${seconds}`;
}
