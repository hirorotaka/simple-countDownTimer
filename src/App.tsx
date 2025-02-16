import { TimeSetter } from './components/TimeSetter';
import { TimerControls } from './components/TimerControls';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerStatus } from './components/TimerStatus';
import { TimerTitle } from './components/TimerTitle';
import { useTimer } from './hooks/useTimer';
import './App.css';

function App() {
  const {
    firstClicktime,
    endTime,
    displayTimer,
    handleStartTimer,
    handlePauseTimer,
    handleResetTimer,
    isRunning,
    checkBoxValues,
    setCheckBoxValues,
    setDisplayTimer,
    isPaused,
  } = useTimer();
  return (
    <div className="container mx-auto px-4 py-8">
      <TimerTitle />
      <TimerStatus firstClicktime={firstClicktime} endTime={endTime} />
      <TimerDisplay displayTimer={displayTimer} />
      <TimerControls
        handleStartTimer={handleStartTimer}
        handlePauseTimer={handlePauseTimer}
        handleResetTimer={handleResetTimer}
        isRunning={isRunning}
        checkBoxValues={checkBoxValues}
        isPaused={isPaused}
      />
      <TimeSetter
        checkBoxValues={checkBoxValues}
        setCheckBoxValues={setCheckBoxValues}
        setDisplayTimer={setDisplayTimer}
        isRunning={isRunning}
        isPaused={isPaused}
      />
    </div>
  );
}

export default App;
