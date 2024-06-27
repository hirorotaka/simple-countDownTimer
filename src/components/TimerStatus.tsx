interface TimerStatusProps {
  scheduledEnd: Date | null;
  currentTime: Date | null;
  stayDuration: number;
}

export const TimerStatus = ({
  scheduledEnd,
  currentTime,
  stayDuration,
}: TimerStatusProps) => {
  let [hours, minutes] = ['--', '--'];
  if (currentTime !== null) {
    hours = String(currentTime.getHours()).padStart(2, '0');
    minutes = String(currentTime.getMinutes()).padStart(2, '0');
  }

  let [hour, minute] = ['--', '--'];
  if (scheduledEnd !== null) {
    hour = String(scheduledEnd.getHours()).padStart(2, '0');
    minute = String(scheduledEnd.getMinutes()).padStart(2, '0');
  }

  let [stayHour, stayMinute] = ['--', '--'];
  const totalPauseSeconds = stayDuration / 1000;
  const h = Math.floor(totalPauseSeconds / 3600);
  const m = Math.floor((totalPauseSeconds % 3600) / 60);

  stayHour = h.toString().padStart(2, '0');
  stayMinute = m.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="flex w-36 justify-between font-mono font-bold tabular-nums tracking-tight">
        <span>開始:</span>{' '}
        <span className="text-right">
          {' '}
          {hours}:{minutes}
        </span>
      </div>
      <div className="flex w-36 justify-between font-mono font-bold tabular-nums tracking-tight">
        <span>停止時間:</span>{' '}
        <span className="text-right">
          {' '}
          {stayHour}:{stayMinute}
        </span>
      </div>
      <div className="flex w-36 justify-between font-mono font-bold tabular-nums tracking-tight">
        <span>終了予定:</span>{' '}
        <span className="text-right">
          {' '}
          {hour}:{minute}
        </span>
      </div>
    </div>
  );
};
