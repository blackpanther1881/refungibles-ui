import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Market from "@/containers/trade/swap/market";
import Limit from "@/containers/trade/swap/limit";
import ExchangeRateInfo from "@/containers/trade/swap/exchangerate-info";
import PriceChart from "@/containers/trade/swap/price-chart";
import SwapTabs from "@/containers/trade/swap/tabs";
import { useAppStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

interface Props {
  sourcePath: string;
}
const Swap = ({ sourcePath }: Props) => {
  const { swapInToken, swapOutToken } = useAppStore(
    useShallow((state) => ({
      swapInToken: state.swapTransaction.swapInToken,
      swapOutToken: state.swapTransaction.swapOutToken
    }))
  );
  const [activeStakeTab, setActiveStakeTab] = useState<any>("market");
  const customHandler = (value: any) => {
    setActiveStakeTab(value);
  };
  return (
    <div className={"w-[502px] mx-auto"}>
      {sourcePath === "home" ? (
        <div
          className={
            "rounded-xl py-[23px] px-[35px] bg-[#FFFFFF1A] text-white-700 mt-4 hidden"
          }
        >
          <h1 className={"text-[26px] mb-2"}>Welcome to Refungibles</h1>
          <p className={"text-[14px]"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      ) : null}
      <SwapTabs customHandler={customHandler} activeStakeTab={activeStakeTab} />
      <ExchangeRateInfo activeStakeTab={activeStakeTab} />
      <div className={"px-5 py-4 bg-[#FFFFFF1A] rounded-md mt-4"}>
        <div className={"flex items-center justify-between mb-4"}>
          <div className={""}>
            <p className={"text-xl text-white-600"}>{swapInToken.name}</p>
            <p className={"text-xsm text-white-200"}>
              {swapInToken.identifier}
            </p>
          </div>
          <PriceChart />
        </div>
        <div className={"flex items-center justify-between"}>
          <div className={""}>
            <p className={"text-xl text-white-600"}>{swapOutToken.name}</p>
            <p className={"text-xsm text-white-200"}>
              {swapOutToken.identifier}
            </p>
          </div>
          <PriceChart />
        </div>
      </div>
    </div>
  );
};

export default Swap;
