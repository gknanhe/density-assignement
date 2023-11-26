import React from "react";

import img1 from "../assets/images/iPhone1.png";
import img2 from "../assets/images/iPhone2.png";
import img3 from "../assets/images/iPhone3.png";

const Hero1 = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col mt-[80px] gap-10">
        <div className="font-bold  heroOneTextContainer h-[202px] w-[709px] text-7xl text-center  ">
          It’s time to trade, the <span className="future">future.</span>
        </div>
        <div className="text-2xl fFamilyLight">
          Trade BTC, ETH Futures with 125x leverage and earn rewards.
        </div>
      </div>
      {/* <div className="w-[669px] h-[789px] mt-[76px] flex justify-center items-center">
        <div className="frame flex items-start justify-center pt-3  shrink-[1]">
          <img className="h-[510px] w-[235px]" src={img1} alt="img1" />
        </div>
        <div className="frame flex items-start justify-center pt-3 shrink-[0] ">
          <img className="h-[670px] w-[330px]" src={img2} alt="img1" />
        </div>
        <div className="frame flex items-start justify-center pt-3 shrink-[1]">
          <img className="h-[510px] w-[235px]" src={img3} alt="img1" />
        </div>
      </div> */}

      <div className="relative w-[669px] h-[789px] mt-[76px] flex items-center justify-center  ">
        <div className="absolute  h-[700px] w-[900px] glow-circle"></div>
        {/* Left Image */}
        <div className="frame absolute left-[128px] transform -translate-x-1/2 flex items-start pt-[8px] justify-center">
          <img className="h-[510px] w-[235px]" src={img1} alt="img1" />
        </div>

        {/* Middle Image */}
        <div className="frameMiddel relative z-10 flex items-center  justify-center">
          <img className="h-[638px] w-[299px]" src={img2} alt="img2" />
        </div>

        {/* Right Image */}
        <div className=" frame absolute right-[132px] transform translate-x-1/2 flex items-start pt-[8px] justify-center">
          <img className="h-[510px] w-[235px]" src={img3} alt="img3" />
        </div>
      </div>
      <div className="h-[171px] w-[1014px] flex justify-center items-center heroBottomText mt-[120px]">
        <div className="w-[254px] h-[78px] flex justify-center items-center flex-col gap-2">
          <div className="text-[#EBFF25] font-bold text-3xl">00%</div>
          <div className="text-[#A9A9A9] leading-6 font-medium">
            Conversion Fee
          </div>
        </div>
        <div className="w-[254px] h-[78px] flex justify-center items-center flex-col gap-2 gradient-border">
          <div className="text-[#EBFF25] font-bold text-3xl">500 Mn+</div>
          <div className="text-[#A9A9A9] leading-6 font-medium">
            Lifetime Volume Traded
          </div>
        </div>
        <div className="w-[254px] h-[78px] flex justify-center items-center flex-col gap-2 gradient-border">
          <div className="text-[#EBFF25] font-bold text-3xl">250+</div>
          <div className="text-[#A9A9A9] leading-6 font-medium">
            {" "}
            Total Tradable Pairs
          </div>
        </div>
        <div className="w-[254px] h-[78px] flex justify-center items-center flex-col gap-2 gradient-border">
          <div className="text-[#EBFF25] font-bold text-3xl">15,000+</div>
          <div className="text-[#A9A9A9] leading-6  font-medium">Traders</div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
