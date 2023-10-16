import { PuzzleConfigsProps } from "./types";
import { HoverCard } from "../HoverCard";
import { Switch } from "../Switch";
import { PandaCSS } from "../PandaCSS";
import React from "react";
import * as Slider from "@radix-ui/react-slider";
import { Select } from "../Select/Select";

const PuzzleConfigs = (props: PuzzleConfigsProps) => {
  const { toggleMirror, toggleTilesNumbers, setPuzzleSize, setTimer, timerOptions } = props;

  return (
    <>
      {/* @TODO: Add a Radix slider to control number of tiles, if you wish. */
      /* DONE */}
      <form>
        <Slider.Root
          className={PandaCSS.Slider.SliderRoot}
          defaultValue={[3]}
          min={3}
          max={5}
          step={1}
          onValueChange={setPuzzleSize}
        >
          <Slider.Track className={PandaCSS.Slider.SliderTrack}>
            <Slider.Range className={PandaCSS.Slider.SliderRange} />
          </Slider.Track>
          <Slider.Thumb
            className={PandaCSS.Slider.SliderThumb}
            aria-label="Volume"
          />
        </Slider.Root>
      </form>
      <div className={PandaCSS.Puzzle.PuzzleConfigsItem}>
        <Switch
          id="switch-tile-number-display"
          label="Show Tiles Numbers"
          handleChange={toggleTilesNumbers}
        />
        <HoverCard
          triggerText="?"
          content="Switch configuration to display the number of the piece over each tile. This is a helper for the players."
        />
      </div>
      <div className={PandaCSS.Puzzle.PuzzleConfigsItem}>
        <Switch
          id="switch-mirror-display"
          label="Display Mirror"
          handleChange={toggleMirror}
          defaultChecked={true}
        />
        <HoverCard
          triggerText="?"
          content="Switch configuration to display the original image. This is a helper for the players."
        />
      </div>
      {/* @TODO: Add a Radix select for the timer, if you wish. */}
      <form>
        <Select items={timerOptions} name="time" onValueChange={setTimer} />
      </form>
    </>
  );
};

export default PuzzleConfigs;
