export const TimeSetter = () => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="relative inline-block">
        <select
          className="block w-16 appearance-none rounded border border-gray-300 px-2 py-1 text-center"
          size={5}
          style={{ maxHeight: '8rem', overflowY: 'auto' }}
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
