import React from "react";
import tribe from "../assets/images/tribe.png";
import oris from "../assets/images/oris.png";
import polygon from "../assets/images/polygon.png";
import iseed from "../assets/images/iseed.png";
import inflection from "../assets/images/inflection.png";
import ijs from "../assets/images/ijs.png";
import rise from "../assets/images/rise.png";
import heads from "../assets/images/heads";

const Hero8 = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex justify-center items-center flex-col gap-6 mt-[120px]  mb-[82px] w-[934px]">
        <div className="font-bold text-7xl text-center ">
          Backed by the Best.
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-[1014px] h-[830px] gap-20 mb-[140px]">
        <div className="flex justify-center items-center w-[954px] h-[301px] flex-col gap-20">
          <div className="flex justify-center items-center flex-wrap w-[954px] h-[301px] gap-20">
            <img src={oris} alt="oris" />
            <img src={inflection} alt="inflection" />
            <img src={iseed} alt="iseed" />
            <img src={ijs} alt="ijs" />
            <img src={rise} alt="rise" />
            <img src={tribe} alt="tribe" />
            <img src={polygon} alt="polygon" />
          </div>
        </div>
        <div className="w-[1000px] h-[456px] flex  justify-center items-start gap-10 flex-wrap ">
          {heads.map((head) => (
            <div className="flex justify-start items-center flex-col w-[135px] h-[205px] gap-4">
              <img
                src={head.image}
                alt={head.name}
                className="w-[120px] h-[138px]"
              />
              <div className="flex justify-center items-center flex-col">
                <div className="text-xl font-bold text-center">{head.name}</div>
                {head.post ? (
                  <div className="text-[10px] text-gray-500"> {head.post}</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero8;
