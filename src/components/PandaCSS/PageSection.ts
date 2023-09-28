import { css } from "../../../styled-system/css";

const PageSectionContainer = css({
  my: "24px",
});

const PageSectionFull = css({
  margin: "0 auto",
  w: "100%",
});

const PageSectionConstrained = css({
  maxWidth: "980px",
  margin: "0 auto",
  w: "100%",
  px: "16px",
});

const PageSectionMobile = css({
  px: "16px",
});

export const PageSection = {
  PageSectionContainer,
  PageSectionFull,
  PageSectionConstrained,
  PageSectionMobile,
};
