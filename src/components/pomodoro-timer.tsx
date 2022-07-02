import React, { useState } from 'react';
import { useInterval } from '../hooks/userInterval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <Button
        text="teste"
        className="click"
        onClick={() => console.log('teste')}
      ></Button>
    </div>
  );
}
