import { useEffect, useState } from 'react';
import './App.css';
import { TimeSetter } from './components/TimeSetter';
import { TimerControls } from './components/TimerControls';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerStatus } from './components/TimerStatus';
import { TimerTitle } from './components/TimerTitle';

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

  //開始した時間
  const [firstClicktime, setFirstClickTime] = useState<number | null>(null);

  //終了する時間
  const [endTime, setEndTime] = useState<number | null>(null);

  // 起動・停止の状態
  const [isRunning, setIsRunning] = useState(false);

  //  一時停止の状態
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // 時間を設定していなかったら終了
    if (endTime === null) {
      setIsRunning(false);
      return;
    }

    // 時間を設定していたらタイマーを開始
    let timerId: number | undefined;

    const intervalTimer = () => {
      // 終了時刻と現在時刻の差を計算
      const now = Date.now();
      const diff = endTime - now;

      // 残り時間が0になったら終了
      if (diff <= 0) {
        setIsRunning(false);
        setIsPaused(false);
        setEndTime(null);
        clearTimeout(timerId);
        setDisplayTimer({
          hour: checkBoxValues.hour,
          minute: checkBoxValues.minute,
          second: checkBoxValues.second,
        });
        return;
      } else {
        // 経過時間を表示用に変換
        setDisplayTimer({
          hour: Math.floor(diff / 3600000),
          minute: Math.floor((diff % 3600000) / 60000),
          second: Math.floor((diff % 60000) / 1000),
        });
      }

      if (isRunning) {
        // カウントダウンの間だけ再帰的に呼び出す
        timerId = setTimeout(intervalTimer, 1000);
      } else {
        clearTimeout(timerId);
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
    setEndTime(newEndTime);
    setIsRunning(true);

    // 最初のクリック時刻をミリ秒で設定
    if (firstClicktime === null) {
      setFirstClickTime(newStartTime);
    }
  };

  const handlePauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setEndTime(null);
    setFirstClickTime(null);
    setDisplayTimer({
      hour: checkBoxValues.hour,
      minute: checkBoxValues.minute,
      second: checkBoxValues.second,
    });
  };

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
