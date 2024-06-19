import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import TableDummy from "@/components/base/table/table-dummy";
import CollectionsTable from "@/containers/explore/collections";

const ExploreTabs = () => {
  const [activeStakeTab, setActiveStakeTab] = useState<any>("collections");
  const customHandler = (value: any) => {
    setActiveStakeTab(value);
  };
  return (
    <Tabs.Root
      defaultValue="collections"
      onValueChange={customHandler}
    >
      <div className={"bg-[#D9D9D91A] mb-4"}>
        <div className={"max-w-[1440px] mx-auto"}>
          <Tabs.List
            className="TabsList flex justify-center items-center border-b-[2px] border-transparent"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className={`TabsTrigger flex items-center justify-center text-white-600 py-[24px] px-6
          font-medium text-[18px] leading-[21.8px] ${
                activeStakeTab === "collections"
                  ? "border-b-[2px] border-[#FD9C3D] -mb-[2px]"
                  : ""
              }`}
              value="collections"
            >
              Collections
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`TabsTrigger flex items-center justify-center text-white-600 py-[24px] px-6
          font-medium text-[18px] leading-[21.8px] ${
                activeStakeTab === "pools"
                  ? "border-b-[2px] border-[#FD9C3D] -mb-[2px]"
                  : ""
              }`}
              value="pools"
            >
              Pools
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`TabsTrigger flex items-center justify-center text-white-600 py-[24px] px-6
          font-medium text-[18px] leading-[21.8px] ${
                activeStakeTab === "transactions"
                  ? "border-b-[2px] border-[#FD9C3D] -mb-[2px]"
                  : ""
              }`}
              value="transactions"
            >
              Transactions
            </Tabs.Trigger>
          </Tabs.List>
        </div>
      </div>
      <div className={"max-w-[1240px] mx-auto"}>
        <Tabs.Content className="TabsContent" value="collections">
          <CollectionsTable />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="pools">
          <p>Pools</p>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="transactions">
          <p>Transactions</p>
        </Tabs.Content>
      </div>
    </Tabs.Root>
);
};

export default ExploreTabs;
