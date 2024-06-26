import { useState } from 'react';
import './App.css';
import { TimeSetter } from './components/TimeSetter';
import { TimerControls } from './components/TimerControls';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerStatus } from './components/TimerStatus';

function App() {
  // タイマー表示
  const [countDownTimes, setcountDownTimes] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const handleSetTimer = (unit: string, value: number) => {
    setcountDownTimes((prevTimes) => ({
      ...prevTimes,
      [unit]: value,
    }));
  };
  // タイマー設定
  // タイマー制御
  // タイマー状況
  return (
    <div className="container mx-auto px-4 py-8">
      <TimerDisplay countDownTimes={countDownTimes} />
      <TimeSetter handleSetTimer={handleSetTimer} />
      <TimerControls />
      <TimerStatus />
    </div>
  );
}

export default App;
