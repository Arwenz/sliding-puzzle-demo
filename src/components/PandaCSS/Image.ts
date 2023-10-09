import classNames from "classnames";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

const originalImage = css({
  position: "relative",
  border: "10px solid #4c566f"
});

const overlayImage = classNames(
  flex({ justify: "center", align: "center" }),
  css({
    bg: "#9ca2b0",
    height: "100%",
    left: "0",
    opacity: "1",
    position: "absolute",
    top: "0",
    w: "100%",
    h: "100%",
  })
);

export const ImageContainer = {
  originalImage,
  overlayImage,
};
