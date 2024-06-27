import { useEffect, useState } from 'react';
import './App.css';
import { TimeSetter } from './components/TimeSetter';
import { TimerControls } from './components/TimerControls';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerStatus } from './components/TimerStatus';

function App() {
  //タイマー表示用
  const [displayTimer, setDisplayTimer] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  // チェックボックスの値を設定
  const [checkBoxValues, setCheckBoxValues] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  //開始時刻表示用
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId: number | undefined;

    const intervalTimer = () => {
      if (endTime === null) return;

      // 終了時刻と現在時刻の差を計算
      const now = Date.now();
      const diff = endTime - now;

      // 0になったら終了
      if (diff <= 0) {
        setIsRunning(false);
        clearTimeout(timerId);
        setDisplayTimer({
          hour: checkBoxValues.hour,
          minute: checkBoxValues.minute,
          second: checkBoxValues.second,
        });
        return;
      }

      console.log(diff);

      // 経過時間を表示用に変換
      setDisplayTimer({
        hour: Math.floor(diff / 3600000),
        minute: Math.floor((diff % 3600000) / 60000),
        second: Math.floor((diff % 60000) / 1000),
      });

      if (isRunning) {
        // isRunning が true の間だけ再帰的に呼び出す
        timerId = setTimeout(intervalTimer, 1000);
      }
    };

    // 最初の呼び出し
    if (isRunning) {
      intervalTimer();
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isRunning]);

  const handleStartTimer = () => {
    //開始時刻をミリ秒で設定
    const newStartTime = Date.now();

    //終了時刻をミリ秒で設定
    const newEndTime =
      newStartTime +
      displayTimer.hour * 3600000 +
      displayTimer.minute * 60000 +
      displayTimer.second * 1000;
    setStartTime(newStartTime);
    setEndTime(newEndTime);
    setIsRunning(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <TimerDisplay displayTimer={displayTimer} />
      <TimeSetter
        checkBoxValues={checkBoxValues}
        setCheckBoxValues={setCheckBoxValues}
        setDisplayTimer={setDisplayTimer}
        isRunning={isRunning}
      />
      <TimerControls handleStartTimer={handleStartTimer} />
      <TimerStatus />
    </div>
  );
}

export default App;
