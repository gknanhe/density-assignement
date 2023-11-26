import React from "react";
import boxes from "../assets/images/Boxes.svg";
import cDcx from "../assets/images/coindcx.png";
import density from "../assets/images/densityLogo.svg";
import dExchange from "../assets/images/dExchange.png";
const Hero3 = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-[280px]">
      <div className="flex justify-center items-center flex-col gap-6">
        <div className="font-bold text-7xl">
          Trade More. <span className="payless">Pay Less.</span>
        </div>
        <div className="px-28 font-normal text-2xl fFamilyLight">
          Our low Fees Supercharge Your Profits
        </div>
      </div>
      <div className="flex justify-center items-center  mt-[82px] gap-5 ">
        <div className="relative h-[438px] w-[369px] bg-[#19191D] flex justify-center items-center flex-col gap-14">
          <img className="absolute top-0  left-0" src={boxes} />
          <img src={cDcx} />
          <div className="flex justify-center items-center flex-col gap-2">
            <div className="text-3xl font-bold">0.025</div>
            <div className="text-base text-gray-400">Maker Fees</div>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <div className="text-3xl font-bold">0.07</div>
            <div className="text-base text-gray-400">Taker Fees</div>
          </div>
        </div>
        <div className=" relative h-[438px] w-[369px] hero3Box flex justify-center items-center flex-col gap-14">
          <img className="absolute top-0  left-0" src={boxes} />
          <img src={density} />
          <div className="flex justify-center items-center flex-col gap-2">
            <div className="text-4xl text-black font-bold">0.02</div>
            <div className="text-lg text-black">Maker Fees</div>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <div className="text-3xl text-black font-bold">0.04</div>
            <div className="text-lg text-black ">Taker Fees</div>
          </div>
        </div>
        <div className="relative h-[438px] w-[369px] bg-[#19191D] flex justify-center items-center flex-col gap-14">
          <img className="absolute top-0  left-0" src={boxes} />
          <img src={dExchange} />
          <div className="flex justify-center items-center flex-col gap-2">
            <div className="text-3xl font-bold">0.025</div>
            <div className="text-base text-gray-400">Maker Fees</div>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <div className="text-3xl font-bold">0.07</div>
            <div className="text-base text-gray-400">Taker Fees</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
