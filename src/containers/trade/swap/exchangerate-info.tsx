import * as Accordion from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
import PriceChart from "@/containers/trade/swap/price-chart";
import Icon from "@/components/Icon";
import React, { useState } from "react";
import { useAppStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

const ExchangeRateInfo = () => {
  const [accordionState, setAccordionState] = useState(false);
  const accordionHandler = (value: string) => {
    console.log(value, "accordionHandler");
    setAccordionState(value === "price-info");
  };
  const { swapInToken, swapOutToken } = useAppStore(
    useShallow((state) => ({
      swapInToken: state.swapTransaction.swapInToken,
      swapOutToken: state.swapTransaction.swapOutToken
    }))
  );

  return (
    <div className={"mt-4"}>
      <div>
        <Accordion.Root
          className="AccordionRoot"
          type="single"
          // defaultValue="item-1"
          collapsible
          onValueChange={accordionHandler}
        >
          <Accordion.Item className="AccordionItem" value="price-info">
            <Accordion.AccordionTrigger className="AccordionTrigger w-full">
              <div
                className={
                  "w-full flex items-center justify-between text-white-200"
                }
              >
                <p className={"text-white-200"}>
                  1 {swapInToken.name} = 2.5 {swapOutToken.name}
                </p>
                <p className={"flex items-center"}>
                  <Icon
                    viewClass={`ml-4 !w-[10px] mr-2 ${
                      accordionState ? "rotate-180" : "rotate-0"
                    } ease-in duration-200 `}
                    iconName="chevron"
                  />
                  {accordionState ? "Hide Price Info" : "Show Price Info"}
                </p>
              </div>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="AccordionContent">
              <div className={"px-5 py-4"}>
                <div className={"flex justify-between items-center mb-3"}>
                  <p className={"text-sm text-white-200"}>Price Impact</p>
                  <p className={"text-sm text-white-200"}> 0.1%</p>
                </div>
                <div className={"flex justify-between items-center mb-3"}>
                  <p className={"text-sm text-white-200"}>Minimum Received</p>
                  <p className={"text-sm text-white-200"}>1.589236 μDoodle</p>
                </div>
                <div className={"flex justify-between items-center"}>
                  <p className={"text-sm text-white-200"}>
                    Max Transaction Fee [?]
                  </p>
                  <p className={"text-sm text-white-200"}>0.000305 μC721</p>
                </div>
              </div>
            </Accordion.AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};

export default ExchangeRateInfo;
