import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import * as Dialog from "@radix-ui/react-dialog";
import { AssetProps, TokenList } from "@/utils/types";
import { useFormContext } from "react-hook-form";
import Dropdown from "@/components/base/dropdown";
import NetworkDropdown from "@/components/amount-input/network-dropdown";

interface Props {
  selectedItem: AssetProps;
  tokenList: TokenList;
  onClose: (item: any) => void;
  onSelectHandler: (AssetProps: any) => void;
  networkKey?: string;
}

const AssetSelection = ({
  selectedItem,
  tokenList,
  onSelectHandler,
  onClose,
  networkKey = "tokenInNetwork"
}: Props) => {
  console.log(selectedItem, "checked");
  const [show, setShow] = useState(false);

  const [filteredList, setFilteredList] = useState<AssetProps[]>(
    tokenList["ethereum"]
  );
  const { watch, setValue } = useFormContext();

  useEffect(() => {}, []);

  const onSelectNetworkHandler = (item: any) => {
    console.log(item, "selected-item");
    setValue(networkKey!, item);
  };
  const selectedNetwork = watch(networkKey!);

  const searchHandler = (evt: any) => {
    const searchTerm = evt.target.value;
    const filtered = tokenList[selectedNetwork]!.filter((asset) => {
      return asset.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredList(filtered);
  };

  return (
    <Dialog.Root open={true} defaultOpen={true}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent !bg-[#000000]">
          <div className="relative flex items-center justify-between mb-3 md:mb-2">
            <p className={"text-white-700 md:text-sm"}>Select a Token</p>
            <button
              onClick={onClose}
              className={"text-white-700 cursor-pointer"}
            >
              <Icon viewClass={`!w-[14px]`} iconName="close" />
            </button>
          </div>
          <div className={"flex gap-[12px]"}>
            <div className={`flex-1 mb-4 mt-0 relative md:mb-2`}>
              <input
                type="text"
                className={
                  "py-2 pl-[40px] pr-4 text-sm text-black-600 " +
                  "rounded-md font-normal border border-solid border-white-400 outline-none md:py:1.5 pl-2.5 w-full " +
                  "text-black-600 h-[37px] placeholder:text-black-600"
                }
                placeholder={"Search"}
                autoFocus={false}
                onChange={searchHandler}
              />
              <Icon
                iconName="search"
                viewClass={`!fill-[#A6A6A6] absolute left-[15px] top-[12px] w-[14px] h-[14px]`}
              />
            </div>
            <NetworkDropdown
              selectedItem={selectedNetwork}
              onSelectHandler={onSelectNetworkHandler}
            />
          </div>
          <div
            className={
              "h-auto rounded-lg flex-1 py-[2px] px-[2px] overflow-auto"
            }
          >
            <div className={"overflow-auto flex flex-col"}>
              {filteredList.length > 0 ? (
                filteredList.map((item, index) => (
                  <div
                    className={`px-4 py-3 flex items-center justify-between hover:cursor-pointer
                     hover:rounded-md whitespace-nowrap md:px-2.5 md:py-1.5 ${
                       item.name === selectedItem.name
                         ? "pointer-events-none opacity-50"
                         : ""
                     }`}
                    key={index}
                    onClick={() => {
                      onSelectHandler(item);
                    }}
                  >
                    <div className="flex items-center">
                      <div className="mr-[10px] relative md:mr-1">
                        <Image
                          src={item.imgUrl}
                          alt={item.name}
                          className={"md:!w-[28px] md:!h-[28px]"}
                          width={36}
                          height={36}
                        />
                        {/*displaying selected icon */}
                        {item.name === selectedItem.name ? (
                          <Icon
                            viewClass="arrow-right !w-[16px] !h-[16px] absolute -bottom-[1px] -right-[7px]"
                            iconName="selected"
                          />
                        ) : null}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white-700 font-medium leading-normal md:text-xsm md:ml-2 uppercase">
                          {item.name}
                        </span>
                        <span className="text-sm text-white-200 capitalize font-light leading-normal md:text-xsm md:ml-2">
                          {item.chain}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white-700 font-medium md:text-sm">
                        {0}
                      </p>{" "}
                      <p className="block text-sm text-white-200 font-light md:text-xsm">
                        $ 0
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-white-600">Token not found</p>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AssetSelection;
