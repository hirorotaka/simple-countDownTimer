type TimerStatusProps = {
  firstClicktime: number | null;
  endTime: number | null;
};

export const TimerStatus = ({ firstClicktime, endTime }: TimerStatusProps) => {
  let firstHours = '--';
  let firstMinutes = '--';

  if (firstClicktime !== null) {
    const date = new Date(firstClicktime);
    firstHours = date.getHours().toString().padStart(2, '0');
    firstMinutes = date.getMinutes().toString().padStart(2, '0');
  }

  let endHours = '--';
  let endMinutes = '--';

  if (endTime !== null) {
    const date = new Date(Math.floor(endTime / 1000) * 1000);
    endHours = date.getHours().toString().padStart(2, '0');
    endMinutes = date.getMinutes().toString().padStart(2, '0');
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="flex w-36 justify-between font-mono font-bold tabular-nums tracking-tight">
        <span>開始:</span>{' '}
        <span className="text-right">
          {firstHours}:{firstMinutes}
        </span>
      </div>
      <div className="flex w-36 justify-between font-mono font-bold tabular-nums tracking-tight">
        <span>終了:</span>{' '}
        <span className="text-right">
          {endHours}:{endMinutes}
        </span>
      </div>
    </div>
  );
};
