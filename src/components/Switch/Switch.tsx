import * as RadixSwitch from "@radix-ui/react-switch";
import React from "react";
import { SwitchProps } from "./types";
import { css } from "../../../styled-system/css";
import { PandaCSS } from "../PandaCSS";

const Switch = (props: SwitchProps) => {
  const { id, defaultChecked, label, handleChange } = props;

  const thumb = css({
    display: "block",
    w: "21px",
    h: "21px",
    bg: "#4c566f",
    borderRadius: "9999px",
    transition: "transform 100ms",
    transform: "translateX(0px)",

    '&[data-state="checked"]': {
      transform: "translateX(19px)",
    },
  });

  const switchRoot = css({
    w: "42px",
    h: "25px",
    borderRadius: "9999px",
    border: "2px solid #4c566f",
  });

  return (
    <form>
      <div className={PandaCSS.Switch.SwitchContainer}>
        <label className={PandaCSS.Switch.SwitchLabel} htmlFor={id}>
          {label}
        </label>
        <RadixSwitch.Root
          className={switchRoot}
          id={id}
          defaultChecked={defaultChecked}
          onCheckedChange={handleChange}
        >
          <RadixSwitch.Thumb className={thumb} />
        </RadixSwitch.Root>
      </div>
    </form>
  );
};

export default Switch;
