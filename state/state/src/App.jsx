import React, { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);

  const handleClick = () => {
    setcount(count + 1);
  };
  return (
    <>
      <div className="flex  flex-col items-center justify-center">
        <div className="flex space-x-3 mt-10 items-center justify-center">
          <button
            // onClick={() => setcount(count + 1)}
            onClick={handleClick}
            className="border border-neutral-200 px-4 rounded hover:shadow shadow-sm focus:border-neutral-400"
          >
            count+
          </button>
          <button
            onClick={() => setcount(count - 1)}
            // onClick={handleClick}
            className="border border-neutral-200 px-4 rounded hover:shadow shadow-sm focus:border-neutral-400"
          >
            count-
          </button>
        </div>
        <p className="mt-10">Count is: {count}</p>
      </div>
    </>
  );
};

export default App;
