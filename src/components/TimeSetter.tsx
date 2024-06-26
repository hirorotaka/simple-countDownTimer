import { useState } from 'react';

interface TimeSetterProps {
  handleSetTimer: (unit: string, value: number) => void;
}

export const TimeSetter = ({
  handleSetTimer,
}: TimeSetterProps): JSX.Element => {
  const [checkBoxValues, setCheckBoxValues] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const handleSelectChange = (
    unit: 'hour' | 'minute' | 'second',
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = parseInt(e.target.value, 10);
    setCheckBoxValues((prev) => ({ ...prev, [unit]: value }));
    handleSetTimer(unit, value);
  };

  return (
    <div className="mb-8 flex justify-center">
      <div className="relative inline-block">
        <select
          className="block w-16 appearance-none rounded border border-gray-300 px-2 py-1 text-center"
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
          onChange={(e) => handleSelectChange('hour', e)}
          value={checkBoxValues.hour}
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
          className="block w-16 appearance-none rounded border border-gray-300 px-2 py-1 text-center"
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
          onChange={(e) => handleSelectChange('minute', e)}
          value={checkBoxValues.minute}
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
          className="block w-16 appearance-none rounded border border-gray-300 px-2 py-1 text-center"
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
          onChange={(e) => handleSelectChange('second', e)}
          value={checkBoxValues.second}
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
