import { useEffect, useState, useCallback } from 'react';
import './App.css';
import { TimeSetter } from './components/TimeSetter';
import { TimerControls } from './components/TimerControls';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerStatus } from './components/TimerStatus';
import { TimerTitle } from './components/TimerTitle';

interface TimerState {
  hour: number;
  minute: number;
  second: number;
  startTime: number | null;
  pauseTime: number | null;
  duration: number;
  isRunning: boolean;
  isPaused: boolean;
}

function App() {
  const [timerState, setTimerState] = useState<TimerState>({
    hour: 0,
    minute: 0,
    second: 0,
    startTime: null,
    pauseTime: null,
    duration: 0,
    isRunning: false,
    isPaused: false,
  });

  const [checkBoxValues, setCheckBoxValues] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [scheduledEnd, setScheduledEnd] = useState<Date | null>(null);
  const [stayDuration, setstayDuration] = useState(0);

  useEffect(() => {
    let timerId: number | undefined;

    const updateTimer = () => {
      if (
        timerState.isRunning &&
        !timerState.isPaused &&
        timerState.startTime !== null
      ) {
        const now = Date.now();
        const elapsed = now - timerState.startTime;
        const remaining = timerState.duration - elapsed;

        if (remaining <= 0) {
          clearTimeout(timerId);
          setTimerState((prev) => ({
            ...prev,
            isRunning: false,
            isPaused: false,
            startTime: null,
            pauseTime: null,
            hour: checkBoxValues.hour,
            minute: checkBoxValues.minute,
            second: checkBoxValues.second,
            duration: 0,
          }));
        } else {
          const remainingSeconds = Math.floor(remaining / 1000);
          setTimerState((prev) => ({
            ...prev,
            hour: Math.floor(remainingSeconds / 3600),
            minute: Math.floor((remainingSeconds % 3600) / 60),
            second: remainingSeconds % 60,
          }));
        }
        timerId = setTimeout(updateTimer, 1000); // 1秒ごとに更新
      }
    };

    if (timerState.isRunning && !timerState.isPaused) {
      updateTimer();
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [
    timerState.isRunning,
    timerState.isPaused,
    timerState.startTime,
    timerState.duration,
    checkBoxValues,
  ]);

  const handleSetTimer = useCallback(
    (unit: 'hour' | 'minute' | 'second', value: number) => {
      setTimerState((prev) => {
        const newDuration =
          (unit === 'hour' ? value : prev.hour) * 3600000 +
          (unit === 'minute' ? value : prev.minute) * 60000 +
          (unit === 'second' ? value : prev.second) * 1000;
        return {
          ...prev,
          [unit]: value,
          duration: newDuration,
        };
      });
      setCheckBoxValues((prev) => ({
        ...prev,
        [unit]: value,
      }));
    },
    []
  );

  const handleStartTimer = () => {
    const newTimeState = {
      ...timerState,
      isRunning: true,
      isPaused: false,
      startTime: Date.now(),
    };
    setTimerState(newTimeState);

    if (currentTime === null) {
      setCurrentTime(new Date());
    }

    if (scheduledEnd === null) {
      const newScheduledEnd = new Date(
        newTimeState.startTime + newTimeState.duration
      );
      setScheduledEnd(newScheduledEnd);
    }
  };

  const handlePauseTimer = useCallback(() => {
    setTimerState((prev) => ({
      ...prev,
      isPaused: true,
      pauseTime: Date.now(),
    }));
  }, []);

  const handleResumeTimer = useCallback(() => {
    setTimerState((prev) => {
      if (prev.startTime !== null && prev.pauseTime !== null) {
        const pausedDuration = Date.now() - prev.pauseTime;
        const newStartTime = prev.startTime + pausedDuration;

        // scheduledEnd を更新
        setScheduledEnd((prevScheduledEnd) => {
          if (prevScheduledEnd) {
            return new Date(prevScheduledEnd.getTime() + pausedDuration);
          }
          return prevScheduledEnd;
        });

        setstayDuration((prev) => prev + pausedDuration);

        return {
          ...prev,
          isPaused: false,
          startTime: newStartTime,
          pauseTime: null,
        };
      }
      return prev;
    });
  }, [stayDuration]);

  const handleResetTimer = useCallback(() => {
    setTimerState((prev) => ({
      ...prev,
      hour: checkBoxValues.hour,
      minute: checkBoxValues.minute,
      second: checkBoxValues.second,
      startTime: null,
      pauseTime: null,
      duration:
        checkBoxValues.hour * 3600000 +
        checkBoxValues.minute * 60000 +
        checkBoxValues.second * 1000,
      isRunning: false,
      isPaused: false,
    }));

    setCurrentTime(null);
    setScheduledEnd(null);
  }, [checkBoxValues]);

  return (
    <div className="container mx-auto px-4 py-8">
      <TimerTitle />
      <TimerStatus
        scheduledEnd={scheduledEnd}
        currentTime={currentTime}
        stayDuration={stayDuration}
      />
      <TimerDisplay timerState={timerState} />
      <TimerControls
        handleStartTimer={handleStartTimer}
        handlePauseTimer={handlePauseTimer}
        handleResumeTimer={handleResumeTimer}
        handleResetTimer={handleResetTimer}
        isRunning={timerState.isRunning}
        isPaused={timerState.isPaused}
        duration={timerState.duration}
      />
      <TimeSetter
        handleSetTimer={handleSetTimer}
        checkBoxValues={checkBoxValues}
        setCheckBoxValues={setCheckBoxValues}
        timerState={timerState}
      />
    </div>
  );
}

export default App;
