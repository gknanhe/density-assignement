import React from "react";
import speaker from "../assets/images/speaker.svg";
import txtr from "../assets/images/Texture4.png";
import boxex from "../assets/images/blackBoxes.svg";
import textr from "../assets/images/Texture3.png";
import ten1 from "../assets/images/ten1.svg";

import ten2 from "../assets/images/ten2.svg";
import ten3 from "../assets/images/ten3.svg";

const Hero10 = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-[82px]">
      <div className=" relative flex justify-center items-center flex-col mt-[140px] ">
        <div className="relative">
          <img src={speaker} alt="speaker" />
          <img src={txtr} alt="speaker" className="absolute top-0 " />
        </div>

        <div className="lex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col gap-4 h-[211px] w-auto">
            <div className="font-bold text-7xl text-center ">
              Earn Money. <span className="payless">The Easy Way.</span>
            </div>
            <div className=" font-medium text-2xl leading-8  text-center fFamilyLight">
              No Complexity of Trading Fee, generate volume and win
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className=" relative w-[323px] h-[323px] bg-[#19191D] flex justify-start gap-16 items-start flex-col">
          <img
            src={boxex}
            alt="boxes"
            className="absolute top-0 left-0 opacity-20  w-auto h-[222px] "
          />
          <img
            src={textr}
            alt="textr"
            className="absolute top-0 left-0 opacity-30 h-full w-full "
          />
          <div className="flex justify-center items-start flex-col mt-5 ml-5 gap-16  ">
            <img src={ten1} alt="ten1" className=" " />

            <div className=" flex justify-center items-start flex-col gap-4 w-auto">
              <div className="text-3xl font-bold w-auto ">
                Share your referral link
              </div>
            </div>
          </div>
        </div>
        <div className=" relative w-[323px] h-[323px] bg-[#19191D] flex justify-start gap-16 items-start flex-col">
          <img
            src={boxex}
            alt="boxes"
            className="absolute top-0 left-0 opacity-20  w-auto h-[222px] "
          />
          <img
            src={textr}
            alt="textr"
            className="absolute top-0 left-0 opacity-30 h-full w-full "
          />
          <div className="flex justify-center items-start flex-col mt-5 ml-5 gap-16  ">
            <img src={ten2} alt="ten1" className=" " />

            <div className=" flex justify-center items-start flex-col gap-4 w-auto">
              <div className="text-3xl font-bold w-auto ">
                Invite Friends to Trade on Density
              </div>
            </div>
          </div>
        </div>
        <div className=" relative w-[323px] h-[323px] bg-[#19191D] flex justify-start gap-16 items-start flex-col">
          <img
            src={boxex}
            alt="boxes"
            className="absolute top-0 left-0 opacity-20  w-auto h-[222px] "
          />
          <img
            src={textr}
            alt="textr"
            className="absolute top-0 left-0 opacity-30 h-full w-full "
          />
          <div className="flex justify-center items-start flex-col mt-5 ml-5 gap-16  ">
            <img src={ten3} alt="ten1" className=" " />

            <div className=" flex justify-center items-start flex-col gap-4 w-auto">
              <div className="text-3xl font-bold w-auto ">
                Trade <br /> and Earn
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 font-bold tradeNow px-12 py-3 w-fit text-black">
        START EARNING NOW
      </div>
    </div>
  );
};

export default Hero10;
