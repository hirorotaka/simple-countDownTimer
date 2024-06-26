export const TimerControls = () => {
  return (
    <div className="mb-8 flex justify-center space-x-4">
      <button
        className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600 active:bg-green-700" // cursor-pointer を追加
      >
        開始
      </button>
      <button className="cursor-pointer rounded bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600 active:bg-yellow-700">
        一時停止
      </button>
      <button className="cursor-pointer rounded bg-gray-500 px-4 py-2 text-white transition duration-300 hover:bg-gray-600 active:bg-gray-700">
        リセット
      </button>
      <button className="cursor-pointer rounded bg-sky-500 px-4 py-2 text-white transition duration-300 hover:bg-sky-600 active:bg-sky-700">
        終了
      </button>
    </div>
  );
};
