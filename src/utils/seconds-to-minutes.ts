import { zeroLeft } from './zero-left';

export function secondsToMinutes(intervalInSeconds: number): string {
  const minutes = zeroLeft((intervalInSeconds / 60) % 60);
  const seconds = zeroLeft((intervalInSeconds % 60) % 60);

  return `${minutes}:${seconds}`;
}
