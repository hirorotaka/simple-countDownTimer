interface TimeSetterProps {
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
  setDisplayTimer: React.Dispatch<
    React.SetStateAction<{
      hour: number;
      minute: number;
      second: number;
    }>
  >;
  isRunning: boolean;
}

export const TimeSetter = ({
  checkBoxValues,
  setCheckBoxValues,
  setDisplayTimer,
  isRunning,
}: TimeSetterProps) => {
  const handleSelectChange = (
    unit: 'hour' | 'minute' | 'second',
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = parseInt(e.target.value, 10);
    setCheckBoxValues((prev) => ({ ...prev, [unit]: value }));
    setDisplayTimer((prev) => ({ ...prev, [unit]: value }));
  };

  return (
    <div className="mb-8 flex justify-center">
      <div className="relative inline-block">
        <select
          className={`block w-16 appearance-none rounded border border-gray-300 px-2 py-1 text-center ${isRunning ? 'cursor-not-allowed' : ''}`}
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
          value={checkBoxValues.hour}
          onChange={(e) => handleSelectChange('hour', e)}
          disabled={isRunning}
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
          className={`block w-16 appearance-none rounded border border-gray-300 px-2 py-1 text-center ${isRunning ? 'cursor-not-allowed' : ''}`}
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
          value={checkBoxValues.minute}
          onChange={(e) => handleSelectChange('minute', e)}
          disabled={isRunning}
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
          className={`block w-16 appearance-none rounded border border-gray-300 px-2 py-1 text-center ${isRunning ? 'cursor-not-allowed' : ''}`}
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
          value={checkBoxValues.second}
          onChange={(e) => handleSelectChange('second', e)}
          disabled={isRunning}
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
