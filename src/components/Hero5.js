import React from "react";
import nifty from "../assets/images/nifty.svg";
import txtr2 from "../assets/images/Texture 2.png";
const Hero5 = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-[150px]">
      <div className="flex justify-center items-center flex-col gap-6 h-[211px] w-[794px]">
        <div className="font-bold text-7xl text-center ">
          <span className="payless">Unlock</span> New Frontiers.
        </div>
        <div className=" font-medium text-2xl leading-8  text-center fFamilyLight">
          Are you a stock trader looking for new opportunities to make <br />{" "}
          money? We got you covered!
        </div>
      </div>
      <div className="flex justify-center items-center my-16  flex5Box h-[171px] w-[1140px] ">
        <div className="text-4xl font-bold  text-center grow ">
          Same <br /> Strategies
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
          Same <br /> Strategies
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
          Same <br /> Strategies
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
          Same <br /> Strategies
        </div>
      </div>
      <div className=" relative flex justify-center items-center h-[510px] w-[1130px] mb-[150px]">
        <img src={txtr2} alt="texture" className="absolute top-0" />
        <img src={nifty} alt="nifty" />
      </div>
    </div>
  );
};

export default Hero5;
