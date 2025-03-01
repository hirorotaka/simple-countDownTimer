import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type TimeSetterProps = {
  checkBoxValues: {
    hour: number;
    minute: number;
    second: number;
  };
  setCheckBoxValues: Dispatch<
    SetStateAction<{
      hour: number;
      minute: number;
      second: number;
    }>
  >;
  setDisplayTimer: Dispatch<
    SetStateAction<{
      hour: number;
      minute: number;
      second: number;
    }>
  >;
  isRunning: boolean;
  isPaused: boolean;
};

export const TimeSetter = ({
  checkBoxValues,
  setCheckBoxValues,
  setDisplayTimer,
  isRunning,
  isPaused,
}: TimeSetterProps) => {
  const handleSelectChange = (
    unit: 'hour' | 'minute' | 'second',
    e: ChangeEvent<HTMLSelectElement>
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
          disabled={isRunning || isPaused}
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
          disabled={isRunning || isPaused}
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
          disabled={isRunning || isPaused}
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
