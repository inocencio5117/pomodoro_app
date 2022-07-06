import React from 'react';
import { render, screen } from '@testing-library/react';
import { PomodoroTimer } from './pomodoro-timer';

describe('pomodoro-timer', () => {
  beforeAll(() => {
    render(
      <PomodoroTimer
        defaultPomodoroTime={1500}
        longRestTime={500}
        shortRestTime={300}
        cycles={4}
      />,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByText('Você está: descansando')).toBeInTheDocument();
  });

  it('should render the time correctly', () => {
    expect(screen.getByText('25:00')).toBeInTheDocument();
  });
});
