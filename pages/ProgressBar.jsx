import React, { useState } from "react";

const ProgressBar = () => {
  // starting at 1% of the width of the progress bar
  let [progress, setProgress] = useState(1);
  function handleClick() {
    let i = setInterval(() => {
      setProgress(progress++);
    }, 100);
    if (progress == 100) {
      clearInterval(i);
    }
  }
  return (
    <>
      <div className={`bg-gray-300 w-full`}>
        <div className={`h-[30px] w-[${progress}%] bg-green-500`}></div>
      </div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default ProgressBar;
