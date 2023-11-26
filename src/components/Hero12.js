import React from "react";
import akashMittal from "../assets/images/akashMittal.png";
import Bhupendra from "../assets/images/Bhupendra.png";
import Deepak from "../assets/images/Deepak.png";

import textr from "../assets/images/Texture3.png";
import linkedIn from "../assets/images/linkedIn.svg";
import boxex from "../assets/images/blackBoxes.svg";

const Hero10 = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-[82px]">
      <div className=" relative flex justify-center items-center flex-col mt-[140px] ">
        {/* <div className="relative">
          <img src={speaker} alt="speaker" />
          <img src={txtr} alt="speaker" className="absolute top-0 " />
        </div> */}

        <div className="lex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col gap-4 h-[211px] w-auto">
            <div className="font-bold text-7xl text-center ">
              Meet the <span className="payless">Visionaries</span>
              <br /> behind Density.
            </div>
            {/* <div className=" font-medium text-2xl leading-8  text-center fFamilyLight">
              No Complexity of Trading Fee, generate volume and win
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className=" relative w-[323px] h-[364px] bg-[#19191D] flex justify-start gap-16 items-start flex-col">
          <img
            src={boxex}
            alt="boxes"
            className="absolute top-0 left-0 opacity-20  w-auto h-[222px] "
          />
          <img
            src={textr}
            alt="textr"
            className="absolute top-0 left-0 opacity-80 h-full w-full "
          />

          <img
            src={akashMittal}
            alt="akash"
            className="absolute bottom-0 right-0  h-[250px] w-auto "
          />

          <img
            src={linkedIn}
            alt="linkedin"
            className="absolute bottom-5 left-5  w-auto "
          />

          <div className="flex justify-center items-start flex-col mt-5 ml-5 gap-16  ">
            {/* <img src={ten1} alt="ten1" className=" " /> */}

            <div className=" flex justify-center items-start flex-col gap-4 w-auto z-10">
              <div className="text-[32px] font-bold w-auto ">
                Aakash Neeraj
                <br /> Mittal
                <div className="fFamilyLight text-xl text-[#BBBBC3]">
                  CEO, Density
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative w-[323px] h-[364px] bg-[#19191D] flex justify-start gap-16 items-start flex-col">
          <img
            src={boxex}
            alt="boxes"
            className="absolute top-0 left-0 opacity-20  w-auto h-[222px] "
          />
          <img
            src={textr}
            alt="textr"
            className="absolute top-0 left-0 opacity-80 h-full w-full "
          />

          <img
            src={Bhupendra}
            alt="Bhupendra"
            className="absolute bottom-0 right-0  h-[250px] w-auto "
          />

          <img
            src={linkedIn}
            alt="linkedin"
            className="absolute bottom-5 left-5  w-auto "
          />

          <div className="flex justify-center items-start flex-col mt-5 ml-5 gap-16  ">
            {/* <img src={ten1} alt="ten1" className=" " /> */}

            <div className=" flex justify-center items-start flex-col gap-4 w-auto z-10">
              <div className="text-[32px] font-bold w-auto ">
                Bhupendra
                <br /> Bule
                <div className="fFamilyLight text-xl text-[#BBBBC3]">
                  CTO, Density
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative w-[323px] h-[364px] bg-[#19191D] flex justify-start gap-16 items-start flex-col">
          <img
            src={boxex}
            alt="boxes"
            className="absolute top-0 left-0 opacity-20  w-auto h-[222px] "
          />
          <img
            src={textr}
            alt="textr"
            className="absolute top-0 left-0 opacity-80 h-full w-full "
          />

          <img
            src={Deepak}
            alt="Deepak"
            className="absolute bottom-0 right-0  h-[250px] w-auto "
          />

          <img
            src={linkedIn}
            alt="linkedin"
            className="absolute bottom-5 left-5  w-auto "
          />

          <div className="flex justify-center items-start flex-col mt-5 ml-5 gap-16  ">
            {/* <img src={ten1} alt="ten1" className=" " /> */}

            <div className=" flex justify-center items-start flex-col gap-4 w-auto z-10">
              <div className="text-[32px] font-bold w-auto ">
                Deepak <br /> Vasman
                <div className="fFamilyLight text-xl text-[#BBBBC3]">
                  CBO, Density
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="mt-9 font-bold tradeNow px-12 py-3 w-fit text-black mb-[140px]">
        START EARNING NOW
      </div>
    </div>
  );
};

export default Hero10;
