import React from "react";
import styles from "../styles.module.css";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { AmountInput } from "@/components/amount-input";
import Icon from "@/components/Icon";
import { Button } from "@/components/base/buttons";
import { Spinner } from "@/components/base/spinner";

type StakeFormFields = {
  amountOut: string;
  amountIn: string;
};

export const baseAsset: any = {
  name: "USDC",
  identifier: "USDC",
  coinDecimals: 6,
  prefix: "usdc",
  chain: "USDC",
  networkLabel: "USDC",
  imgUrl: "/tokens/usdc.svg"
};

const Market = () => {
  const methods = useForm<StakeFormFields>({
    mode: "all",
    defaultValues: {
      amountIn: "",
      amountOut: "0"
    }
  });

  const inProgress = false;
  const isMobile = false;
  const onSubmit: SubmitHandler<StakeFormFields> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AmountInput
          activeInput={true}
          assetInfo={baseAsset}
          type={"amountIn"}
          className={"!rounded-tl-[0px]"}
        />
        <div className="flex w-full items-center justify-center relative">
          <div
            className={`${styles.iconBox} 
          rounded-full flex justify-center items-center absolute 
          w-[40px] h-[40px] bg-[#fff] border border-white-400 md:w-[28px] md:h-[28px]`}
          >
            <Icon
              iconName="exchange-arrow"
              viewClass="search !w-[14px] md:!w-[10px] fill-black-600"
            />
          </div>
        </div>
        <div className="flex-1 mt-2.5 mb-4">
          <AmountInput
            assetInfo={baseAsset}
            activeInput={false}
            type={"amountOut"}
          />
        </div>
        <div>
          <Button
            className={`${
              inProgress ? "!py-[0.8125rem]" : ""
            } w-full md:py-2 md:text-sm flex items-center justify-center`}
            type="secondary"
            size="large"
            disabled={inProgress}
            content={
              inProgress ? (
                <Spinner size={isMobile ? "small" : "medium"} />
              ) : (
                "Swap"
              )
            }
            onClick={() => {}}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default Market;
