import React from "react";

const Hero11 = () => {
  return (
    <div className=" bg flex justify-center items-center flex-col ">
      <div className="flex justify-center items-center flex-col gap-6 h-[211px] w-auto mt-[150px]">
        <div className="font-bold text-7xl text-center ">
          Trade Together. <span className="payless">Thrive Together.</span>
        </div>
        <div className=" font-medium text-2xl leading-8  text-center fFamilyLight">
          Are you a stock trader looking for new opportunities to make <br />{" "}
          money? We got you covered!
        </div>
      </div>
      <div className="flex justify-center items-center my-16  flex5Box h-[171px] w-[1140px] ">
        <div className="text-4xl font-bold  text-center grow ">
          10,000+ <div className="text-sm mt-3 text-[#A9A9A9]">Traders</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="89"
          viewBox="0 0 1 89"
          fill="none"
        >
          <path d="M1 0.803711L1 88.8037" stroke="#A9A9A9" />
        </svg>
        <div className="text-4xl font-bold  text-center  grow">
          100Mn{" "}
          <div className="text-sm mt-3 text-[#A9A9A9] ">
            Daily Volume Traded
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="89"
          viewBox="0 0 1 89"
          fill="none"
        >
          <path d="M1 0.803711L1 88.8037" stroke="#A9A9A9" />
        </svg>
        <div className="text-4xl font-bold  text-center grow ">
          Daily{" "}
          <div className="text-sm mt-3 text-[#A9A9A9]">Trade Analysis</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="89"
          viewBox="0 0 1 89"
          fill="none"
        >
          <path d="M1 0.803711L1 88.8037" stroke="#A9A9A9" />
        </svg>
        <div className=" text-3xl font-bold  text-center  grow text">
          Live{" "}
          <div className="text-sm text-gray-300 mt-3 text-[#A9A9A9]">
            Signals
          </div>
        </div>
      </div>
      <div className="mt-9 font-bold tradeNow px-12 py-3 w-fit text-black mb-[140px]">
        START EARNING NOW
      </div>
    </div>
  );
};

export default Hero11;
