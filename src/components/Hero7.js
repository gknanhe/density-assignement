import React from "react";
import linesBox from "../assets/images/linesBoxes.svg";
import eclipse from "../assets/images/eclipse.svg";
import prof from "../assets/images/profile.svg";
import graphup from "../assets/images/graphup.svg";
import one from "../assets/images/one.svg";

import iphone4 from "../assets/images/iPhone4.png";
import iphone5 from "../assets/images/iPhone5.png";
import iphone6 from "../assets/images/iPhone6.png";

import frame from "../assets/images/frame.png";
const Hero7 = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col gap-6 my-[120px]  w-[934px]">
        <div className="font-bold text-7xl text-center ">
          Derivates made simple <br />
          in <span className="payless">3 Easy</span> Steps
        </div>
      </div>
      <div className="w-[1442px] h-[646px] flex justify-center items-center mb-[120px]">
        <div className=" relative h-[646px] w-[646px] flex justify-center items-center">
          <img src={linesBox} alt="lines" className="absolute " />
          <img
            src={eclipse}
            alt="lines"
            className="absolute eclipseStyle w-[470px] h-[470px] shrink-0 "
          />

          <img src={iphone4} alt="iphone" className="z-20 w-[236px] " />
          <img src={frame} alt="lines" className="absolute z-[10] " />
        </div>
        <div className="h-[332px] w-[384px]">
          <img src={prof} alt="prof" className=" w-[70px] mb-3" />
          <div className="flex justify-center items-start flex-col gap-4">
            <div className="font-bold text-[40px] text-lg">Create Account</div>
            <div className="text-[#A9A9A9] text-2xl fFamilyLight">
              Register & Complete your Verification in less than 2 minutes
            </div>
          </div>
          <div className="mt-9 font-bold tradeNow px-12 py-3 w-fit text-black">
            TRADE NOW
          </div>
        </div>
      </div>
      <div className="my-4">
        <svg
          width="1134"
          height="2"
          viewBox="0 0 1134 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M0 1.08069H1134"
            stroke="url(#paint0_linear_1_1114)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1114"
              x1="1134"
              y1="1.08069"
              x2="0"
              y2="1.08069"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="0.53125" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="w-[1442px] h-[646px] flex justify-center items-center">
        <div className=" relative h-[646px] w-[646px] flex justify-center items-center">
          <img src={linesBox} alt="lines" className="absolute " />
          <img
            src={eclipse}
            alt="lines"
            className="absolute eclipseStyle w-[470px] h-[470px] shrink-0 "
          />

          <img src={iphone5} alt="iphone" className="z-20 w-[236px] " />
          <img src={frame} alt="lines" className="absolute z-[10] " />
        </div>
        <div className="h-[332px] w-[384px]">
          <img src={one} alt="prof" className=" w-[70px] mb-3" />
          <div className="flex justify-center items-start flex-col gap-4">
            <div className="font-bold text-[40px]">Deposit Funds</div>
            <div className="text-[#A9A9A9] text-2xl fFamilyLight">
              Add funds quiqly using a variety of payment methods{" "}
            </div>
          </div>
          <div className="mt-9 font-bold tradeNow px-12 py-3 w-fit text-black">
            TRADE NOW
          </div>
        </div>
      </div>
      <div className="my-4">
        <svg
          width="1134"
          height="2]"
          viewBox="0 0 1134 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M0 1.08069H1134"
            stroke="url(#paint0_linear_1_1114)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1114"
              x1="1134"
              y1="1.08069"
              x2="0"
              y2="1.08069"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="0.53125" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="w-[1442px] h-[646px] flex justify-center items-center mb-[120px]">
        <div className=" relative h-[646px] w-[646px] flex justify-center items-center">
          <img src={linesBox} alt="lines" className="absolute " />
          <img
            src={eclipse}
            alt="lines"
            className="absolute eclipseStyle w-[470px] h-[470px] shrink-0 "
          />

          <img src={iphone6} alt="iphone" className="z-20 w-[236px] " />
          <img src={frame} alt="lines" className="absolute z-[10] " />
        </div>
        <div className="h-[332px] w-[384px]">
          <img src={graphup} alt="prof" className=" w-[70px] mb-3" />
          <div className="flex justify-center items-start flex-col gap-4">
            <div className="font-bold text-[40px] text-lg">Brcome a Trader</div>
            <div className="text-[#A9A9A9] text-2xl fFamilyLight">
              Choose Your Trading Pair & Trade Seamlessly
            </div>
          </div>
          <div className="mt-9 font-bold tradeNow px-12 py-3 w-fit text-black">
            TRADE NOW
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero7;
