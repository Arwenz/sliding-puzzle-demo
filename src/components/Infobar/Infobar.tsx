import React from "react";
import { InfobarProps } from "./types";
import * as Toolbar from "@radix-ui/react-toolbar";
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";
import { PandaCSS } from "../PandaCSS";
import { Timer } from ".";

const Infobar = (props: InfobarProps) => {
  const { moves, timer, handleRestartClick, setTimeRemaining } = props;

  // @TODO: Add Radix Toolbar here.
  return (
    <Toolbar.Root className={PandaCSS.Toolbar.ToolbarContainer}>
      <div className={PandaCSS.Toolbar.Moves}>Moves: {moves}</div>
      <Timer startTime={timer} setTimeRemaining={setTimeRemaining} />
      <Toolbar.Button
        className={PandaCSS.Toolbar.ResetButton}
        onClick={handleRestartClick}
      >
        RESET
      </Toolbar.Button>
    </Toolbar.Root>
  );
};

export default Infobar;
