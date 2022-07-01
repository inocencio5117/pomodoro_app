import { useEffect, useRef } from 'react';

export function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null,
): void {
  const savedCallbeck = useRef<C>();

  useEffect(() => {
    savedCallbeck.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallbeck.current) savedCallbeck.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
