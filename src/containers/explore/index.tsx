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
      className="mt-[36px]"
      defaultValue="collections"
      onValueChange={customHandler}
    >
      <div className={"max-w-[1440px] mx-auto"}>
        <Tabs.List
          className="TabsList flex justify-start items-center mb-[22px]"
          aria-label="Manage your account"
        >
          <Tabs.Trigger
            className={`TabsTrigger flex items-center justify-center text-white-200 px-6
           text-[26px] ${
             activeStakeTab === "collections" ? "text-white-700" : ""
           }`}
            value="collections"
          >
            Collections
          </Tabs.Trigger>
          <Tabs.Trigger
            className={`TabsTrigger flex items-center justify-center text-white-200 px-6
           text-[26px]  ${activeStakeTab === "pools" ? "text-white-700" : ""}`}
            value="pools"
          >
            Pools
          </Tabs.Trigger>
          <Tabs.Trigger
            className={`TabsTrigger flex items-center justify-center text-white-200 px-6
           text-[26px]  ${
             activeStakeTab === "transactions" ? "text-white-700" : ""
           }`}
            value="transactions"
          >
            Transactions
          </Tabs.Trigger>
        </Tabs.List>
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
