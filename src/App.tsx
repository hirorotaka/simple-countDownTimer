import './App.css';
import { TimeSetter } from './components/TimeSetter';
import { TimerControls } from './components/TimerControls';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerStatus } from './components/TimerStatus';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TimerDisplay />
      <TimeSetter />
      <TimerControls />
      <TimerStatus />
    </div>
  );
}

export default App;
