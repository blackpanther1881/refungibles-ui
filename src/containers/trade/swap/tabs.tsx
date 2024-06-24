import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Market from "@/containers/trade/swap/market";
import Limit from "@/containers/trade/swap/limit";

interface Props {
  customHandler: (item: any) => void;
  activeStakeTab: string;
}
const SwapTabs = ({ customHandler, activeStakeTab }: Props) => {
  return (
    <Tabs.Root
      className="bg-[#FFFFFF1A] rounded-xl p-2 mt-[14px]"
      defaultValue="market"
      onValueChange={customHandler}
    >
      <Tabs.List className="TabsList flex " aria-label="swap-form">
        <Tabs.Trigger
          className={`TabsTrigger flex items-center justify-center text-white-600 px-[32px] py-[22px]
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
          className={`TabsTrigger flex items-center justify-center text-white-600 px-[32px] py-[22px]
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
      <div className={""}>
        <Tabs.Content className="TabsContent" value="market">
          <Market />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="limit">
          <Limit />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default SwapTabs;
