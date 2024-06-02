import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Market from "@/containers/trade/swap/market";
import Limit from "@/containers/trade/swap/limit";
import ExchangeRateInfo from "@/containers/trade/swap/exchangerate-info";
import PriceChart from "@/containers/trade/swap/price-chart";

interface Props {
  sourcePath: string;
}
const Swap = ({ sourcePath }: Props) => {
  const [activeStakeTab, setActiveStakeTab] = useState<any>("market");
  const customHandler = (value: any) => {
    setActiveStakeTab(value);
  };
  return (
    <div className={"w-[502px] mx-auto"}>
      {sourcePath === "home" ? (
        <div
          className={
            "rounded-xl py-[23px] px-[35px] bg-[#FFFFFF1A] text-white-700 mt-4"
          }
        >
          <h1 className={"text-[26px] mb-2"}>Welcome to Refungibles</h1>
          <p className={"text-[14px]"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      ) : null}
      <Tabs.Root
        className="bg-[#FFFFFF1A] rounded-xl p-2 mt-[10px]"
        defaultValue="market"
        onValueChange={customHandler}
      >
        <div className={""}>
          <div className={""}>
            <Tabs.List className="TabsList flex " aria-label="swap-form">
              <Tabs.Trigger
                className={`TabsTrigger flex items-center justify-center text-white-600 text-base px-[32px] py-[22px]
          font-medium text-[18px] leading-[21.8px] ${
            activeStakeTab === "market"
              ? "bg-[#E3E3E31A] rounded-tr-xl rounded-tl-xl"
              : ""
          }`}
                value="market"
              >
                Market
              </Tabs.Trigger>
              <Tabs.Trigger
                className={`TabsTrigger flex items-center justify-center text-white-600 text-base px-[32px] py-[22px]
          font-medium text-[18px] leading-[21.8px] ${
            activeStakeTab === "limit"
              ? "bg-[#E3E3E31A] rounded-tr-xl rounded-tl-xl"
              : ""
          }`}
                value="limit"
              >
                Limit
              </Tabs.Trigger>
            </Tabs.List>
          </div>
        </div>
        <div className={""}>
          <Tabs.Content className="TabsContent" value="market">
            <Market />
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="limit">
            <Limit />
          </Tabs.Content>
        </div>
      </Tabs.Root>
      <ExchangeRateInfo />
      <div className={"px-5 py-4 bg-[#FFFFFF1A] rounded-md mt-4"}>
        <div className={"flex items-center justify-between mb-4"}>
          <div className={""}>
            <p className={"text-xl text-white-600"}>Doodle</p>
            <p className={"text-xsm text-white-200"}>Doodle</p>
          </div>
          <PriceChart />
        </div>
        <div className={"flex items-center justify-between"}>
          <div className={""}>
            <p className={"text-xl text-white-600"}>Doodle</p>
            <p className={"text-xsm text-white-200"}>Doodle</p>
          </div>
          <PriceChart />
        </div>
      </div>
    </div>
  );
};

export default Swap;
