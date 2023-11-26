import React from "react";
import boxex from "../assets/images/Boxes.svg";
import textr from "../assets/images/Texture3.png";
import prakash from "../assets/images/prakash.png";
import sambhavi from "../assets/images/sambhavi.png";
import arjunNaik from "../assets/images/arjunNaik.png";

const Hero9 = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-white text-black">
      <div className="flex justify-center items-center flex-col gap-6 mt-[117px] h-[211px] w-[899px] mb-[64px]">
        <div className="font-bold text-7xl text-center ">
          Don’t take our word for it.{" "}
        </div>
        <div className=" font-medium text-2xl leading-8  text-center fFamilyLight">
          Hear it from our expert community of traders who have made <br />
          insane amounts in a short amount of time
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mb-[117px] w-[1126px] h-[450px] gap-10 ">
          <div className=" relative w-[365px] h-[450px] bg-[#F3F3F3] flex justify-start gap-10 items-start flex-col">
            <img
              src={boxex}
              alt="boxes"
              className="absolute top-5 right-5 opacity-90 w-auto h-[238px]"
            />
            <img
              src={textr}
              alt="boxes"
              className="absolute top-0 left-0 opacity-10 h-full w-full"
            />

            <img
              src={prakash}
              alt="prakash"
              className="absolute bottom-0  right-0  h-[218px] w-[206px]"
            />

            <div className="mt-5 ml-7 text-xl w-[303px] text-[#666673] fFamilyLight">
              As someone who's always looking for the next big thing, I was
              really excited to try out Density’s crypto futures trading
              platform. And I have to say, it definitely lived up to my
              expectations.
            </div>
            <div className="ml-8 flex justify-center items-start flex-col gap-4 w-auto">
              <div className="text-3xl font-bold w-[175px]">
                Prakash Jamatia.
              </div>
              <div className=" text-l fFamilyLight text-[#666673]">
                Founder, Tradeshala.
              </div>
            </div>
          </div>

          <div className=" relative w-[365px] h-[450px] bg-[#F3F3F3] flex justify-start gap-14 items-start flex-col">
            <img
              src={boxex}
              alt="boxes"
              className="absolute top-5 right-5 opacity-90 w-auto h-[238px]"
            />
            <img
              src={textr}
              alt="boxes"
              className="absolute top-0 left-0 opacity-10 h-full w-full"
            />

            <img
              src={sambhavi}
              alt="Sambhavi"
              className="absolute bottom-0  right-0  h-[218px] w-[206px]"
            />

            <div className="mt-5 ml-7 text-xl w-[303px] text-[#666673] fFamilyLight">
              I'm not a seasoned trader, but this website has made it easy for
              me to get started with crypto futures trading. Their KYC was very
              fast and the educational resources were really helpful.
            </div>
            <div className="ml-8 flex justify-center items-start flex-col gap-4 w-auto">
              <div className="text-3xl font-bold w-[175px]">
                Shambhavi Nayak.
              </div>
              <div className=" text-l fFamilyLight text-[#666673]">
                Commodity Trader.
              </div>
            </div>
          </div>

          <div className=" relative w-[365px] h-[450px] bg-[#F3F3F3] flex justify-start gap-16 items-start flex-col">
            <img
              src={boxex}
              alt="boxes"
              className="absolute top-5 right-5 opacity-90 w-auto h-[238px]"
            />
            <img
              src={textr}
              alt="boxes"
              className="absolute top-0 left-0 opacity-10 h-full w-full"
            />

            <img
              src={arjunNaik}
              alt="arjun"
              className="absolute bottom-0  right-0  h-[218px] w-[206px]"
            />

            <div className="mt-5 ml-7 text-xl w-[303px] text-[#666673] fFamilyLight">
              I've been using this platform for a few months now and it's been a
              great experience. I was delighted to see all the major crypto
              coins listed on Density Exchange.
            </div>
            <div className="ml-8 flex justify-center items-start flex-col gap-4 w-auto">
              <div className="text-3xl font-bold w-[175px]">
                Arjun
                <br /> Naik.
              </div>
              <div className=" text-l fFamilyLight text-[#666673]">
                Equity Trader.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero9;
