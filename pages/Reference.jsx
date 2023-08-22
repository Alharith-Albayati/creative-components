import React from "react";
import { useState, useRef, useEffect } from "react";

const Reference = () => {
  const [hello, setHello] = useState(0);
  const value = useRef(null);
  useEffect(() => {
    console.log(value);
    const high = value.current.style.height;

    value !== null ? setHello(high) : console.log(value);
  }, []);
  return (
    <div className="flex justify-between">
      <div className="bg-purple-400 p-12 h-[500px]" ref={value}>
        dfkl;oighdsoihsdfsd
      </div>
      <div className={`bg-purple-400 p-12 h-[${hello}px]`}>
        jsdjgijgijgirehj
      </div>
    </div>
  );
};

export default Reference;
