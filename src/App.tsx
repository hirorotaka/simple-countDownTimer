import { useState } from 'react';
import './App.css';
import { TimeSetter } from './components/TimeSetter';
import { TimerControls } from './components/TimerControls';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerStatus } from './components/TimerStatus';

function App() {
  const [displayTimer, setDisplayTimer] = useState({
    hour: 1,
    minute: 2,
    second: 3,
  });
  return (
    <div className="container mx-auto px-4 py-8">
      <TimerDisplay displayTimer={displayTimer} />
      <TimeSetter />
      <TimerControls />
      <TimerStatus />
    </div>
  );
}

export default App;
