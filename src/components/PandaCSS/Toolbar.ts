import classNames from "classnames";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

const ToolbarContainer = classNames(
  css({
    display: "flex",
  }),
  flex({ justify: "space-between" })
);

const Moves = css({
  fontSize: "18px",
  fontWeight: "bold",
});

const ResetButton = css({
  bg: "#4c566f",
  py: "5px",
  px: "20px",
  borderRadius: "50px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "15px"
});

export const Toolbar = {
  ToolbarContainer,
  Moves,
  ResetButton
};
