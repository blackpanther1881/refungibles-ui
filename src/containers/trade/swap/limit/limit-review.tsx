import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import * as Dialog from "@radix-ui/react-dialog";
import { AssetProps, TokenList } from "@/utils/types";
import { useFormContext } from "react-hook-form";
import NetworkDropdown from "@/components/amount-input/network-dropdown";
import { Button } from "@/components/base/buttons";
import { Spinner } from "@/components/base/spinner";

interface Props {
  onClose: (item: any) => void;
}

const LimitReview = ({ onClose }: Props) => {
  const [reviewState, setReviewState] = useState<
    "review" | "confirm" | "submitted"
  >("review");

  const { watch, setValue } = useFormContext();

  useEffect(() => {}, []);

  const submitHandler = () => {
    setReviewState("confirm");
  };
  return (
    <Dialog.Root open={true} defaultOpen={true}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent !bg-[#000000]">
          <div className="relative flex items-center justify-between mb-3 md:mb-2">
            <p className={"text-white-700 md:text-sm"}>Review Limit</p>
            <button
              onClick={onClose}
              className={"text-white-700 cursor-pointer"}
            >
              <Icon viewClass={`!w-[14px]`} iconName="close" />
            </button>
          </div>
          <div
            className={
              "h-auto rounded-lg flex-1 py-[2px] px-[2px] overflow-auto"
            }
          >
            {reviewState === "review" ? (
              <div className={"overflow-auto flex flex-col"}>
                <div className={"mb-4"}>
                  <p className={"text-white-200 font-medium text-sm"}>Sell</p>
                  <p className={"text-white-700 font-medium text-lg"}>3.3Mil</p>
                  <p className={"text-white-200 font-medium text-sm"}>$122</p>
                </div>
                <div className={"mb-4"}>
                  <p className={"text-white-200 font-medium text-sm"}>Buy</p>
                  <p className={"text-white-700 font-medium text-lg"}>
                    3 Doodle
                  </p>
                  <p className={"text-white-200 font-medium text-sm"}>$122</p>
                </div>
                <div className={"mb-2 flex justify-between"}>
                  <p className={"text-white-200 font-medium text-sm"}>
                    Limit Price
                  </p>
                  <p className={"text-white-700 font-medium text-sm"}>
                    1Doodle = 1.3Mil
                  </p>
                </div>
                <div className={"mb-2 flex justify-between"}>
                  <p className={"text-white-200 font-medium text-sm"}>Expiry</p>
                  <p className={"text-white-700 font-medium text-sm"}>
                    June 4, 2024 at 4:09 PM
                  </p>
                </div>
                <div className={"mb-2 flex justify-between"}>
                  <p className={"text-white-200 font-medium text-sm"}>Fee</p>
                  <p className={"text-white-700 font-medium text-sm"}>$0</p>
                </div>
                <div className={"mb-4 flex justify-between"}>
                  <p className={"text-white-200 font-medium text-sm"}>
                    Network Cost
                  </p>
                  <p className={"text-white-700 font-medium text-sm"}>$0</p>
                </div>
                <p className={"text-white-200 font-medium text-xsm mb-4"}>
                  Please be aware that the execution for limits may vary based
                  on real-time market fluctuations and Ethereum network
                  congestion. Limit may not execute exactly when token reach the
                  specified price. <br />
                  Canceling a limit has a network cost.
                </p>
                <Button
                  className={`w-full md:py-2 md:text-sm flex items-center justify-center`}
                  type="primary"
                  size="large"
                  disabled={false}
                  content={"Place Order"}
                  onClick={submitHandler}
                />
              </div>
            ) : (
              <div className={"text-center"}>
                <p className={"font-medium text-[24px] text-white-700"}>
                  submitted
                </p>
                <div
                  className={
                    "font-medium text-[18px] text-white-500 flex items-center justify-center"
                  }
                >
                  <p>3.5 μDoodle</p>&nbsp;
                  ->&nbsp;
                  <p>0.025 μC721</p>
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LimitReview;
