import React from "react";
import bar1 from "../assets/images/bar1.svg";
import group2 from "../assets/images/group2.svg";
import group3 from "../assets/images/group3.svg";
const Hero2 = () => {
  return (
    <div className=" h-auto flex justify-center items-center flex-col mt-[120px]  mb-[240px] gap-32">
      <div className="h-[576px] w-[283px] hero2 flex justify-center items-center flex-col gap-5">
        <div>
          <img className="h-[186px] w-[130px] shrink-0" src={bar1} alt="bar" />
        </div>
        <div className=" w-[170px] h-[131px] h2InsideText">
          One App. Endless Possibilities
        </div>
      </div>
      <div className="h-[576px] w-[283px] hero2 flex justify-center items-center flex-col gap-5">
        <div>
          <img className="h-[60px] w-[80px] shrink-0" src={group2} alt="bar" />
        </div>
        <div className=" w-[170px] h-[131px] h2InsideText">
          Future of Derivative Trading.
        </div>
      </div>
      <div className="h-[576px] w-[283px] hero2 flex justify-center items-center flex-col gap-5">
        <div>
          <img className="h-[76px] w-[68px]" src={group3} alt="bar" />
        </div>
        <div className=" w-[170px] h-[131px] h2InsideText">
          Is now here, for you.
        </div>
      </div>
    </div>
  );
};

export default Hero2;
