import { useState, useEffect } from 'react';

interface TimerProps {
  // Initial time in seconds.
  startTime: number;
  setTimeRemaining: (time: number) => void;
}

const Timer: React.FC<TimerProps> = (props: TimerProps) => {
  const { startTime, setTimeRemaining } = props;
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    setTime(startTime);
  }, [startTime]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (time > 0) {
      interval = setInterval(() => {
        const newTime = time - 1;

        setTime(newTime);
        setTimeRemaining(newTime);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <strong>Timer:</strong> {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
};

export default Timer;
