// components/ProgressBar.js
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-blue-500">
      <div className="h-2 bg-green-500" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
