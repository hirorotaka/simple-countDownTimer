interface TimerControlsProps {
  handleStartTimer: () => void;
  handlePauseTimer: () => void;
  handleResumeTimer: () => void;
  handleResetTimer: () => void;
  isRunning: boolean;
  isPaused: boolean;
  duration: number;
}

export const TimerControls = ({
  handleStartTimer,
  handlePauseTimer,
  handleResumeTimer,
  handleResetTimer,
  isRunning,
  isPaused,
  duration,
}: TimerControlsProps) => {
  const isTimerSet = duration > 0;

  return (
    <div className="mb-8 flex justify-center space-x-4">
      {!isRunning && !isPaused && (
        <button
          onClick={handleStartTimer}
          disabled={!isTimerSet}
          className={`w-40 rounded px-4 py-2 font-bold text-white ${
            isTimerSet
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'cursor-not-allowed bg-blue-300'
          }`}
        >
          開始
        </button>
      )}
      {isRunning && !isPaused && (
        <button
          onClick={handlePauseTimer}
          className="w-40 rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-600"
        >
          一時停止
        </button>
      )}
      {isPaused && (
        <button
          onClick={handleResumeTimer}
          className="w-40 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600"
        >
          再開
        </button>
      )}
      <button
        onClick={handleResetTimer}
        disabled={!isTimerSet && !isRunning && !isPaused}
        className={`rounded px-4 py-2 text-white transition duration-300 ${
          isTimerSet || isRunning || isPaused
            ? 'cursor-pointer bg-gray-500 hover:bg-gray-600 active:bg-gray-700'
            : 'cursor-not-allowed bg-gray-300'
        }`}
      >
        リセット
      </button>
      <button className="cursor-pointer rounded bg-sky-500 px-4 py-2 text-white transition duration-300 hover:bg-sky-600 active:bg-sky-700">
        終了
      </button>
    </div>
  );
};
