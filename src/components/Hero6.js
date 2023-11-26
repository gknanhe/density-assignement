import React from "react";
import boxex from "../assets/images/Boxes.svg";
import per25 from "../assets/images/per25.svg";
import textr from "../assets/images/Texture3.png";
import manager from "../assets/images/manager.svg";
const Hero6 = () => {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className=" text-black flex justify-center items-center flex-col gap-[91px]">
        <div className="flex justify-center items-center flex-col gap-6 mt-[117px] h-[211px] w-[794px]">
          <div className="font-bold text-7xl text-center ">
            Start Small, Earn Big.
          </div>
          <div className=" font-medium text-2xl leading-8  text-center fFamilyLight">
            Deposity a minimum of 1000 and get a Deposit bonus + <br />{" "}
            dedicagted relationship manager
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center mb-[117px] w-[1126px] h-[450px] gap-10 ">
            <div className=" relative w-[553px] h-[450px] bg-[#F3F3F3] flex justify-start gap-20 items-start flex-col">
              <img
                src={boxex}
                alt="boxes"
                className="absolute top-0 right-0 opacity-30"
              />
              <img
                src={textr}
                alt="boxes"
                className="absolute top-0 left-0 opacity-10"
              />

              <img src={per25} alt="per" className="w-[200px] mt-8 ml-9" />

              <div className="ml-8 flex justify-center items-start flex-col gap-4 w-[424px]">
                <div className="text-4xl font-bold w-[175px]">
                  Despite Bonus
                </div>
                <div className=" text-l fFamilyLight text-black">
                  Our assets' liquidity is unmatched in the market, with a small
                  bid-ask spread and a well-balanced order book.
                </div>
              </div>
            </div>
            <div className=" relative w-[553px] h-[450px]  bg-[#F3F3F3] flex justify-start gap-20 items-start flex-col">
              <img
                src={boxex}
                alt="boxes"
                className="absolute top-0 right-0 opacity-30"
              />
              <img
                src={textr}
                alt="boxes"
                className="absolute top-0 left-0 opacity-10"
              />

              <img src={manager} alt="per" className="w-[150px] mt-8 ml-9" />

              <div className="ml-8 flex justify-center items-start flex-col gap-4 w-[424px]">
                <div className="text-4xl font-bold w-auto">
                  Dedidcated <br />
                  Relationship Manager
                </div>
                <div className=" text-l fFamilyLight text-black">
                  Our assets' liquidity is unmatched in the market, with a small
                  bid-ask spread and a well-balanced order book.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
