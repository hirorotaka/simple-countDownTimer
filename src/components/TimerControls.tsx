interface TimerControlsProps {
  handleStartTimer: () => void;
  handlePauseTimer: () => void;
  handleResetTimer: () => void;
  isRunning: boolean;
  checkBoxValues: {
    hour: number;
    minute: number;
    second: number;
  };
  isPaused: boolean;
}

export const TimerControls = ({
  handleStartTimer,
  handlePauseTimer,
  handleResetTimer,
  isRunning,
  checkBoxValues,
  isPaused,
}: TimerControlsProps) => {
  // checkBoxValuesの合計を計算
  const totalCheckBoxValues =
    checkBoxValues.hour + checkBoxValues.minute + checkBoxValues.second;
  return (
    <div className="mb-8 flex justify-center space-x-4">
      {isRunning ? (
        <button
          className="w-40 cursor-pointer rounded bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600 active:bg-yellow-700"
          onClick={handlePauseTimer}
        >
          一時停止
        </button>
      ) : (
        <button
          className={`w-40 cursor-pointer rounded  px-4 py-2 text-white  ${totalCheckBoxValues === 0 ? 'cursor-not-allowed bg-gray-400 opacity-50' : 'bg-green-500 transition duration-300 hover:bg-green-600 active:bg-green-700'} `}
          onClick={handleStartTimer}
          disabled={totalCheckBoxValues === 0}
        >
          {isPaused ? '再開' : '開始'}
        </button>
      )}
      <button
        className="cursor-pointer rounded bg-gray-500 px-4 py-2 text-white transition duration-300 hover:bg-gray-600 active:bg-gray-700"
        onClick={handleResetTimer}
      >
        リセット
      </button>
    </div>
  );
};
