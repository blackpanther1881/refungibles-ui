import { Button } from "@/components/base/buttons";
import { Spinner } from "@/components/base/spinner";
import React from "react";

const PoolsContainer = () => {
  return (
    <div className={"max-w-[700px] mx-auto mt-[50px]"}>
      <div className={"flex items-center justify-between mb-4"}>
        <p className={"text-[18px] text-white-700 font-normal"}>Positions</p>
        <Button
          className={`w-auto md:py-2 md:text-sm flex items-center justify-center`}
          type="primary"
          size="large"
          disabled={false}
          content={"Add Liquidity"}
          onClick={() => {}}
        />
      </div>
      <div className={"mb-[22px]"}>
        <div className={"border border-[#9D9D9D66] rounded-[10px]"}>
          <div
            className={
              "flex justify-between px-[27px] py-[20px] border-b border-[#9D9D9D66]"
            }
          >
            <p className={"text-white-700 text-sm"}>Your positions (1)</p>
            <p className={"text-xsm text-white-200"}>Hide closed position</p>
          </div>
          <div className={"px-[27px] py-[20px] "}>
            <div className={"flex items-center mb-4"}>
              <p className={"text-white-700 text-[18px]"}>USDC/ETH</p>
              <p className={"text-white-200 text-sm ml-2"}>0.05%</p>
            </div>
            <div>
              <div className={"flex items-center"}>
                <p className={"text-white-700 text-[18px]"}>
                  <span className={"text-white-200"}>Min:&nbsp;</span>
                  3,804.69 USDC per ETH
                </p>
                <p className={"text-white-700 text-[18px] ml-2"}>
                  <span className={"text-white-200"}>Max:&nbsp;</span>
                  3,804.69 USDC per ETH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex gap-[26px]"}>
        <div
          className={
            "border border-[#9D9D9D66] rounded-[10px] px-[17px] py-[15px] flex-1"
          }
        >
          <p className={"text-sm text-white-700 mb-1"}>
            Learn about providing liquidity
          </p>
          <p className={"text-xsm text-white-200"}>
            Check out our v3 LP walkthrough and migration guides.
          </p>
        </div>
        <div
          className={
            "border border-[#9D9D9D66] rounded-[10px] px-[17px] py-[15px] flex-1"
          }
        >
          <p className={"text-sm text-white-700 mb-1"}>Top pools</p>
          <p className={"text-xsm text-white-200"}>
            Explore Refungibles Analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoolsContainer;
