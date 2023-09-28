import classNames from "classnames";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

const SwitchContainer = classNames(
  css({
    display: "flex",
  }),
  flex({ align: "center", gap: "8px" })
);

const SwitchLabel = css({
  color: "#000",
  fontSize: "16px",
  lineHeight: "1",
  pr: "16px",
});

export const Switch = {
  SwitchContainer,
  SwitchLabel,
};
