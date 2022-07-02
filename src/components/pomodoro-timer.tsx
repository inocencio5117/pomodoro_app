/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect } from 'react';
import { useInterval } from '../hooks/userInterval';
import { Button } from './button';
import { Timer } from './timer';
const bellStart = require('../sounds/bell-start.mp3');
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

audioStopWorking.volume = 0.3;
audioStartWorking.volume = 0.3;

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
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');

    if (resting) document.body.classList.remove('working');
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
    setResting(false);
    setMainTime(props.defaultPomodoroTime);
    audioStartWorking.play();
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }

    audioStopWorking.play();
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>

        <Button text="Rest" onClick={() => configureRest(false)}></Button>

        <Button
          text={timeCounting ? 'Pause' : 'Play'}
          className={!working && !resting ? 'hidden' : ''}
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
