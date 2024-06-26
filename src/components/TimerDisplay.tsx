interface TimerDisplayProps {
  countDownTimes: {
    hour: number;
    minute: number;
    second: number;
  };
}

//タイマー表示
export const TimerDisplay = ({
  countDownTimes,
}: TimerDisplayProps): JSX.Element => {
  return (
    <div className="text-center">
      <h1 className="mb-8 text-4xl font-bold">カウントダウンタイマー</h1>
      <div className="mb-2">
        <span>開始:</span> <span className="text-right">--:--:--</span>
      </div>
      <div className=" mb-8 text-6xl font-bold">
        {/* 文字列が２桁になるように前に0を追加 */}
        {String(countDownTimes.hour).padStart(2, '0')}:
        {String(countDownTimes.minute).padStart(2, '0')}:
        {String(countDownTimes.second).padStart(2, '0')}
      </div>
    </div>
  );
};
