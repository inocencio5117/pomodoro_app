import React, { useState, useEffect } from 'react';
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
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (working) {
      document.body.classList.add('working');
    }
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button
          text="Work"
          className="click"
          onClick={() => configureWork()}
        ></Button>

        <Button
          text="teste"
          className="click"
          onClick={() => configureWork()}
        ></Button>

        <Button
          text={timeCounting ? 'Pause' : 'Play'}
          className="click"
          onClick={() => setTimeCounting(!timeCounting)}
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
