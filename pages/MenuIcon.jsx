import React, { useState } from "react";

const MenuIcon = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div
      className="cursor-pointer inline-block p-0 absolute top-[50%] left-[50%]"
      onClick={() => {
        setIsOpen(!open);
      }}
    >
      <div
        className={
          open
            ? `w-[35px] h-[5px] -rotate-45 translate-y-[11px] transition duration-300 ease-in bg-black my-[6px] mx-0`
            : `w-[35px] h-[5px] bg-black my-[6px] mx-0 transition duration-300 ease-in`
        }
      ></div>
      <div
        className={
          open
            ? `w-[35px] transition duration-300 ease-in opacity-0 h-[5px] bg-black my-[6px] mx-0`
            : `w-[35px] h-[5px] bg-black my-[6px] mx-0 opacity-1 transition duration-300 ease-in`
        }
      ></div>
      <div
        className={
          open
            ? `w-[35px] h-[5px] translate-y-[-11px] transition duration-300 ease-in rotate-45 bg-black my-[6px] mx-0`
            : `w-[35px] h-[5px] bg-black my-[6px] mx-0  transition duration-300 ease-in`
        }
      ></div>
    </div>
  );
};

export default MenuIcon;
