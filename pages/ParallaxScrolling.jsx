import React from "react";

const ParallaxScrolling = () => {
  return (
    <>
      <div className="min-h-screen bg-no-repeat bg-center bg-fixed bg-cover w-full bg-[url('../public/Nazi.png')]"></div>
      <div className="min-h-screen bg-no-repeat bg-center bg-fixed bg-cover w-full bg-[url('../public/USA.png')]"></div>
      <div className="min-h-screen bg-no-repeat bg-center bg-fixed bg-cover w-full bg-[url('../public/UK.png')]"></div>
      <div className="min-h-screen bg-no-repeat bg-center bg-fixed bg-cover w-full bg-[url('../public/USSR.png')]"></div>
    </>
  );
};

export default ParallaxScrolling;
