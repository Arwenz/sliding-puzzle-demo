import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { PandaCSS } from "../PandaCSS";

type ItemProps = {
  value: string;
  label: string;
};
type SelectProps = RadixSelect.SelectProps & {
  items: ItemProps[];
  name: string;
};
const Select = (props: SelectProps) => {
  console.log("props", props);
  return (
    <RadixSelect.Root name={props.name} required>
      <RadixSelect.Trigger
        className={PandaCSS.Select.cssSelectTrigger}
        {...props}
      >
        <RadixSelect.Value placeholder="Select a timer" />
        <RadixSelect.Icon className={PandaCSS.Select.cssSelectIcon}>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={PandaCSS.Select.cssSelectContent}>
          <RadixSelect.ScrollUpButton
            className={PandaCSS.Select.cssSelectScrollButton}
          >
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className={PandaCSS.Select.cssSelectViewport}>
            {props.items.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton
            className={PandaCSS.Select.cssSelectScrollButton}
          >
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
const SelectItem = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Item
    className={PandaCSS.Select.cssSelectItem}
    {...props}
    ref={ref}
  >
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    <RadixSelect.ItemIndicator
      className={PandaCSS.Select.cssSelectItemIndicator}
    >
      <CheckIcon />
    </RadixSelect.ItemIndicator>
  </RadixSelect.Item>
));

SelectItem.displayName = RadixSelect.Item.displayName;

export { Select };
