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

      <div className="controls">
        <Button
          text="teste"
          className="click"
          onClick={() => console.log('teste')}
        ></Button>
      </div>

      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          porro itaque? Doloremque corporis rem recusandae sit tenetur at
          temporibus nemo! Vitae doloribus repudiandae dignissimos eaque dolores
          sunt cupiditate sit accusantium!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          porro itaque? Doloremque corporis rem recusandae sit tenetur at
          temporibus nemo! Vitae doloribus repudiandae dignissimos eaque dolores
          sunt cupiditate sit accusantium!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          porro itaque? Doloremque corporis rem recusandae sit tenetur at
          temporibus nemo! Vitae doloribus repudiandae dignissimos eaque dolores
          sunt cupiditate sit accusantium!
        </p>
      </div>
    </div>
  );
}
