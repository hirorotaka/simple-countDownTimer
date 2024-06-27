interface TimeSetterProps {
  handleSetTimer: (unit: 'hour' | 'minute' | 'second', value: number) => void;
  checkBoxValues: {
    hour: number;
    minute: number;
    second: number;
  };
  setCheckBoxValues: React.Dispatch<
    React.SetStateAction<{
      hour: number;
      minute: number;
      second: number;
    }>
  >;
  timerState: {
    hour: number;
    minute: number;
    second: number;
    isRunning: boolean;
    isPaused: boolean;
  };
}

export const TimeSetter = ({
  handleSetTimer,
  checkBoxValues,
  setCheckBoxValues,
  timerState,
}: TimeSetterProps): JSX.Element => {
  const handleSelectChange = (
    unit: 'hour' | 'minute' | 'second',
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = parseInt(e.target.value, 10);
    setCheckBoxValues((prev) => ({ ...prev, [unit]: value }));
    handleSetTimer(unit, value);
  };

  const isDisabled = timerState.isRunning || timerState.isPaused;

  const selectClass = `block w-16 appearance-none rounded border px-2 py-1 text-center ${
    isDisabled
      ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
      : 'border-gray-300 bg-white text-gray-700 cursor-pointer'
  }`;

  return (
    <div className="mb-8 flex justify-center">
      <div className="relative inline-block">
        <select
          className={selectClass}
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
          onChange={(e) => handleSelectChange('hour', e)}
          value={checkBoxValues.hour}
          disabled={isDisabled}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <span className="mx-2">時間</span>
      <div className="relative inline-block">
        <select
          className={selectClass}
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
          onChange={(e) => handleSelectChange('minute', e)}
          value={checkBoxValues.minute}
          disabled={isDisabled}
        >
          {Array.from({ length: 60 }, (_, i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <span className="mx-2">分</span>
      <div className="relative inline-block">
        <select
          className={selectClass}
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
          onChange={(e) => handleSelectChange('second', e)}
          value={checkBoxValues.second}
          disabled={isDisabled}
        >
          {Array.from({ length: 60 }, (_, i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <span className="mx-2">秒</span>
    </div>
  );
};
