import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface Props {
  label: any;
  content: any;
  className?: string;
  labelClass?: string;
  position?: "start" | "end" | "center";
}
const Dropdown = ({
  label,
  content,
  className,
  position = "center",
  labelClass
}: Props) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={`${labelClass}`}>{label}</button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={`DropdownMenuContent ${className}`}
            sideOffset={5}
            align={position!}
          >
            <p>{content}</p>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default Dropdown;
