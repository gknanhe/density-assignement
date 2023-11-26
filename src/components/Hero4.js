import React from "react";
import chart from "../assets/images/Chart.svg";
import v1 from "../assets/images/vector1.svg";
import v2 from "../assets/images/vector2.svg";

import txtr from "../assets/images/Texture.png";
import rtgl from "../assets/images/Rectangle.png";
import btcoin from "../assets/images/bitcoin.svg";
import etherium from "../assets/images/etherium.svg";
import solana from "../assets/images/solana.svg";

import btgraph from "../assets/images/btGraph.svg";
import graph2 from "../assets/images/graph2.svg";
import graph3 from "../assets/images/graph3.svg";

const Hero4 = () => {
  return (
    <div className="mt-32 flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col gap-6 h-[211px] w-[794px]">
        <div className="font-bold text-7xl text-center ">
          Explore the Markets like it is your
          <span className="payless">Playground.</span>
        </div>
        <div className=" font-normal text-2xl fFamilyLight">
          Search for your favorite coins and stay ahead of the market{" "}
        </div>
      </div>
      <div className="relative mt-16 h-[671px] w-[1135px] flex justify-center items-center flex-col">
        <img
          src={chart}
          className="absolute top-3 h-auto w-[888px]  py-5"
          alt="chart"
        />

        <div className="absolute top-[234px] h-[126px] w-[850px] flex justify-center items-center gap-5 z-10">
          <div className=" w-[287px] box-border p-4 flex justify-center items-center gap-2 boxFrame flex-col">
            <div className=" w-full flex justify-between items-center  ">
              <div className="flex justify-center items-center gap-4">
                <img src={btcoin} alt="btcoin" />

                <div className="flex justify-center items-center flex-col">
                  <div className="text-sm">Bitcoin</div>
                  <div className="text-xs text-gray-500">BTC/USDT</div>
                </div>
              </div>
              <img src={btgraph} alt="btcoin" />
            </div>
            <div className=" flex justify-between w-full items-center gap-3">
              <div className=" flex justify-center items-center gap-1 flex-col text-sm">
                <div className="text-[12px] text-gray-400 text-left w-full">
                  Price
                </div>
                <div className="font-bold text-base">$25,776.80</div>
              </div>
              <div className="flex justify-center items-center flex-col gap-2 text-sm">
                <div className="text-gray-400 text-xs flex justify-center items-center  gap-3">
                  VOL <span className="font-bold text-white">$8.8B</span>
                </div>
                <div className="text-gray-400 text-xs flex justify-center items-center  gap-3">
                  CGHG{" "}
                  <span className="text-green-700 font-bold text-sm">
                    23.1%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[287px] box-border p-4 flex justify-center items-center gap-2 boxFrame flex-col">
            <div className=" w-full flex justify-between items-center  ">
              <div className="flex justify-center items-center gap-4">
                <img src={solana} alt="btcoin" />

                <div className="flex justify-center items-center flex-col">
                  <div className="text-sm">Solana</div>
                  <div className="text-xs text-gray-500">SOL/USDT</div>
                </div>
              </div>
              <img src={graph2} alt="btcoin" />
            </div>
            <div className=" flex justify-between w-full items-center gap-3">
              <div className=" flex justify-center items-center gap-1 flex-col text-sm">
                <div className="text-[12px] text-gray-400 text-left w-full">
                  Price
                </div>
                <div className="font-bold text-base">$18.07</div>
              </div>
              <div className="flex justify-center items-center flex-col gap-2 text-sm">
                <div className="text-gray-400 text-xs flex justify-center items-center  gap-3">
                  VOL <span className="font-bold text-white">$372.8M</span>
                </div>
                <div className="text-gray-400 text-xs flex justify-center items-center  gap-3">
                  CGHG
                  <span className="text-green-700 font-bold text-sm">
                    02.1%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[287px] box-border p-4 flex justify-center items-center gap-2 boxFrame flex-col">
            <div className=" w-full flex justify-between items-center  ">
              <div className="flex justify-center items-center gap-4">
                <img src={etherium} alt="btcoin" />

                <div className="flex justify-center items-center flex-col">
                  <div className="text-sm">Etherium</div>
                  <div className="text-xs text-gray-500">ETH/USDT</div>
                </div>
              </div>
              <img src={graph3} alt="btcoin" />
            </div>
            <div className=" flex justify-between w-full items-center gap-3">
              <div className=" flex justify-center items-center gap-1 flex-col text-sm">
                <div className="text-[12px] text-gray-400 text-left w-full">
                  Price
                </div>
                <div className="font-bold text-base">$1,607.11</div>
              </div>
              <div className="flex justify-center items-center flex-col gap-2 text-sm">
                <div className="text-gray-400 text-xs flex justify-center items-center  gap-3">
                  VOL <span className="font-bold text-white">$4.6B</span>
                </div>
                <div className="text-gray-400 text-xs flex justify-center items-center  gap-3">
                  CGHG{" "}
                  <span className="text-green-700 font-bold text-sm">
                    12.1%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={v1}
          className="absolute  h-[390px] w-[762px]   top-40"
          alt="vector"
        />
        <img
          src={v2}
          className="absolute  h-[442px] w-[828px]   top-40"
          alt="vector"
        />

        <div className=" absolute bottom-0 texture h-[671px] w-[1135px] opacity-50 z-30">
          <img src={txtr} alt="texture" />
        </div>
        <div className="absolute h-[303px] w-[1031px] bottom-[-65px] ">
          <img src={rtgl} alt="texture" />
        </div>
      </div>
      <div className="mt-16 mb-[140px] flex justify-center items-center">
        <div className="px-14 py-4 rounded-lg text-black font-bold text-lg exploreMarket">
          EXPLORE MARKETS
        </div>
      </div>
    </div>
  );
};

export default Hero4;
