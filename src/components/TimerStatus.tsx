export const TimerStatus = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="flex w-64 justify-between text-lg">
        <span>終了予定:</span> <span className="text-right">--:--:--</span>
      </div>
      <div className="flex w-64 justify-between text-lg">
        <span>終了:</span> <span className="text-right">--:--:--</span>
      </div>
      <div className="flex w-64 justify-between text-lg">
        <span>停止時間合計:</span> <span className="text-right">--:--:--</span>
      </div>
    </div>
  );
};
