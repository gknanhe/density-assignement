import React from "react";
import frame from "../assets/images/framephone.svg";
const Hero13 = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className=" mt-[160px] getStarted">Get started now.</div>
      <img src={frame} alt="frame" className="mobiFrame" />
      <div className="startNow mb-[160px]"> Start Trading!</div>
    </div>
  );
};

export default Hero13;
