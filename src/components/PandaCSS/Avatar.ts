import classNames from "classnames";
import { css } from "../../../styled-system/css";
import { grid } from "../../../styled-system/patterns";

const Avatars = classNames(
  css({
    display: "grid",
    gap: "16px",
    p: "24px 0",
  }),
  grid({ columns: 5 })
);

const AvatarContainer = css({
  borderRadius: "50%",
  display: "flex",
  h: "auto",
  w: "100%",
  border: "4px solid #4c566f",
  "&.active": {
    border: "4px solid #fff",
  },
  lg: {
    h: "150px",
    w: "150px",
  },
});

const AvatarImg = css({
  borderRadius: "inherit",
  objectFit: "cover",
  h: "100%",
  w: "100%",
});

export const Avatar = {
  Avatars,
  AvatarContainer,
  AvatarImg,
};
