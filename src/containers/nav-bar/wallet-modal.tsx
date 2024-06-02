import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import Icon from "@/components/Icon";
import Image from "next/image";
import { handleMetamaskWallet } from "@/utils/wallet-helper";

interface Props {
  onClose: () => void;
}
const WalletModal = ({ onClose }: Props) => {
  return (
    <Dialog.Root open={true} defaultOpen={true}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent !bg-[#121212]">
          <div className="relative flex items-center justify-end mb-3 md:mb-2">
            <button
              onClick={onClose}
              className={"text-white-700 cursor-pointer"}
            >
              <Icon viewClass={`!w-[14px]`} iconName="close" />
            </button>
          </div>
          <div className={"p-6"}>
            <div className="flex justify-center mb-[40px]">
              <Image
                src={"/images/icon.svg"}
                alt={"icon"}
                width={103}
                height={140}
              />
            </div>
            <p className={"text-white-600 text-[26px] text-center mb-8"}>
              Connect to Refungibles
            </p>
            <div
              className={
                "flex items-center w-[230px] mx-auto bg-[#1E1E1E] py-[10px] justify-center cursor-pointer"
              }
              onClick={() => {
                handleMetamaskWallet(onClose);
              }}
            >
              <Image
                src={"/images/wallets/metamask.svg"}
                alt={"icon"}
                width={26}
                className={"mr-2"}
                height={24}
              />
              <p className={"text-lg text-white-600"}>MetaMask</p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default WalletModal;
