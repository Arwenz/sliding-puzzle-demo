import classNames from "classnames";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

const SliderRoot = classNames(
  css({
    display: "flex",
    position: "relative",
    userSelect: "none",
    touchAction: "none",
    w: "200px",
    h: "20px",
  }),
  flex({ align: "center" })
);

const SliderTrack = css({
  bg: "#4c566f",
  position: "relative",
  flexGrow: "1",
  borderRadius: "9999px",
  h: "3px",
});

const SliderRange = css({
  position: "absolute",
  bg: "#4c566f",
  borderRadius: "9999px",
  h: "100%",
});

const SliderThumb = css({
  display: "block",
  w: "20px",
  h: "20px",
  bg: "#4c566f",
  boxShadow: "0 2px 10px var(--black-a7)",
  borderRadius: "10px",
  "&:hover": {
    bg: "#4c566f",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 5px var(--black-a8)",
  },
});

export const Slider = {
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb
};
