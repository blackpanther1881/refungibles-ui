import * as Tabs from "@radix-ui/react-tabs";
import CollectionAnalytics from "@/containers/explore/collections/analytics";
import CollectionItems from "@/containers/explore/collections/item";
import { useState } from "react";
import { dummyCollections } from "@/utils/config";

interface Props {
  nftID: any;
}
const CollectionInfo = ({ nftID }: Props) => {
  const [activeStakeTab, setActiveStakeTab] = useState<any>("analytics");
  const customHandler = (value: any) => {
    setActiveStakeTab(value);
  };

  const collection = dummyCollections.find((item) => item.nftID === nftID);

  return (
    <div className={"max-w-[1440px] mx-auto"}>
      <Tabs.Root
        className="p-2 mt-[10px]"
        defaultValue="analytics"
        onValueChange={customHandler}
      >
        <div className={""}>
          <div className={"mb-6"}>
            <Tabs.List className="TabsList flex " aria-label="swap-form">
              <Tabs.Trigger
                className={`TabsTrigger flex items-center justify-center text-white-600 text-base py-2 px-4
          font-medium text-[18px] leading-[21.8px] ${
            activeStakeTab === "analytics"
              ? "border border-[#E3E3E31A] rounded-md "
              : ""
          }`}
                value="analytics"
              >
                Analytics
              </Tabs.Trigger>
              <Tabs.Trigger
                className={`TabsTrigger flex items-center justify-center text-white-600 text-base py-2 px-4
          font-medium text-[18px] leading-[21.8px] ${
            activeStakeTab === "items"
              ? "border border-[#E3E3E31A] rounded-md"
              : ""
          }`}
                value="items"
              >
                Items
              </Tabs.Trigger>
            </Tabs.List>
          </div>
        </div>
        <div className={""}>
          <Tabs.Content className="TabsContent" value="analytics">
            <CollectionAnalytics collection={collection} />
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="items">
            <CollectionItems collection={collection} />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
};

export default CollectionInfo;
