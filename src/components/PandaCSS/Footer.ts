import classNames from "classnames";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns/flex";

const FooterContainer = css({
  bg: "#4c566f",
  color: "#fff",
});

const FooterInnerContainer = classNames(
  flex({ align: "center", justify: "space-between" }),
  css({
    py: "24px",
  })
);

export const Footer = {
  FooterContainer,
  FooterInnerContainer,
};
