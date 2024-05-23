import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Swap from "@/containers/trade/swap";
const Trade = () => {
  const [activeStakeTab, setActiveStakeTab] = useState<any>("swap");
  const customHandler = (value: any) => {
    setActiveStakeTab(value);
  };
  return (
    <Tabs.Root className="" defaultValue="swap" onValueChange={customHandler}>
      <div className={"bg-[#D9D9D91A]"}>
        <div className={"max-w-[1440px] mx-auto"}>
          <Tabs.List
            className="TabsList flex justify-center items-center border-b-[2px] border-transparent"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className={`TabsTrigger flex items-center justify-center text-white-600 text-base py-[24px] px-6
          font-medium text-[18px] leading-[21.8px] ${
            activeStakeTab === "swap"
              ? "border-b-[2px] border-[#FD9C3D] -mb-[2px]"
              : ""
          }`}
              value="swap"
            >
              Swap
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`TabsTrigger flex items-center justify-center text-white-600 text-base py-[24px] px-6
          font-medium text-[18px] leading-[21.8px] pointer-events-none ${
            activeStakeTab === "perps"
              ? "border-b-[2px] border-[#FD9C3D] -mb-[2px]"
              : ""
          }`}
              value="perps"
            >
              Perps Coming Soon
            </Tabs.Trigger>
          </Tabs.List>
        </div>
      </div>
      <div className={"max-w-[1440px] mx-auto"}>
        <Tabs.Content className="TabsContent" value="swap">
          <Swap />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="perps">
          <p>un-stake</p>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default Trade;
