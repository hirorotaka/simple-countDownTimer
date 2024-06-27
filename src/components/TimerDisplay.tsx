interface TimerDisplayProps {
  timerState: {
    hour: number;
    minute: number;
    second: number;
  };
}

export const TimerDisplay = ({ timerState }: TimerDisplayProps) => {
  return (
    <div className="text-center">
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-lg bg-gray-200 p-4">
          <div
            className="font-mono text-6xl font-bold tabular-nums tracking-tight"
            style={{ minWidth: '240px' }}
          >
            {/* 文字列が２桁になるように前に0を追加 */}
            {String(timerState.hour).padStart(2, '0')}:
            {String(timerState.minute).padStart(2, '0')}:
            {String(timerState.second).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};
