//タイマー表示
export const TimerDisplay = () => {
  return (
    <div className="text-center">
      <h1 className="mb-8 text-4xl font-bold">カウントダウンタイマー</h1>
      <div className="mb-2">
        <span>開始:</span> <span className="text-right">--:--:--</span>
      </div>
      <div className=" mb-8 text-6xl font-bold">00:00:00</div>
    </div>
  );
};
