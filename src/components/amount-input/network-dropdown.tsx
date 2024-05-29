import Dropdown from "@/components/base/dropdown";
import React from "react";
import { dummyNetworkList } from "@/utils/config";
import Image from "next/image";
import Icon from "@/components/Icon";
import { AssetProps, TokenList } from "@/utils/types";
interface Props {
  networkKey: string;
  selectedItem: any;
  onSelectHandler: (network: any) => void;
}
const NetworkDropdown = ({
  networkKey,
  onSelectHandler,
  selectedItem
}: Props) => {
  return (
    <Dropdown
      content={
        <div className={"rounded-md "}>
          {dummyNetworkList.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onSelectHandler(item);
              }}
              className={
                "flex items-center py-2 px-4 hover:bg-black-200 hover:rounded-md cursor-pointer"
              }
            >
              <Image
                src={item.logoUrl}
                alt={item.name}
                className={"mr-2"}
                width={20}
                height={20}
              />
              <p className={"text-[14px] text-white-500"}>{item.label}</p>
            </div>
          ))}
        </div>
      }
      label={
        selectedItem ? (
          <div className={"flex items-center py-2 px-2 rounded-md"}>
            <Image
              src={selectedItem.logoUrl}
              alt={selectedItem.name}
              className={"mr-2"}
              width={20}
              height={20}
            />
            <div>
              <Icon viewClass={` !w-[14px] `} iconName="chevron" />
            </div>
          </div>
        ) : null
      }
      labelClass={"border border-white-200 rounded-md"}
      className={"!bg-black-500 !p-2"}
      position={"end"}
    />
  );
};

export default NetworkDropdown;
