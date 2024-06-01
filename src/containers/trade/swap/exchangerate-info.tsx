import * as Accordion from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";

const ExchangeRateInfo = () => {
  return (
    <div className={"mt-4"}>
      <div>
        <Accordion.Root
          className="AccordionRoot"
          type="single"
          // defaultValue="item-1"
          collapsible
        >
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.AccordionTrigger className="AccordionTrigger w-full">
              <div
                className={
                  "w-full flex items-center justify-between text-white-200"
                }
              >
                <p className={"text-white-200"}>1 Doodle = 2.5 XRED</p>
                <p>Show Price Info</p>
              </div>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="AccordionContent">
              <div className={"p-4"}>
                Yes. It's unstyled by default, giving you freedom over the look
                and feel.
              </div>
            </Accordion.AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};

export default ExchangeRateInfo;
