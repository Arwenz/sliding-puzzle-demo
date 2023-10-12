import classNames from "classnames";
import { css } from "../../../styled-system/css";
import { flex, grid } from "../../../styled-system/patterns";

const PuzzleConfigs = classNames(
  css({
    display: "flex",
    my: "24px",
  }),
  flex({
    align: "center",
    gap: "8px",
    flexWrap: "wrap",
    md: {
      gap: "24px",
      flexWrap: "nowrap",
    },
  })
);

const PuzzleConfigsItem = classNames(
  css({
    display: "flex",
    gap: "16px",
  }),
  flex({ align: "center" })
);

const PuzzleContainer = classNames(
  css({
    display: "grid",
    gap: "16px",
    pb: "50px",
    position: "relative"
  }),
  grid({
    columns: 2,
    gap: "10px",
    lg: {
      gap: "16px",
    },
  })
);

const PuzzleInfoContainer = css({
  my: "24px",
});

const PuzzleInnerWrapper = classNames(
  css({
    display: "grid"
  }),
  grid({
    gap: "3px",
    md: {
      gap: "5px",
    },
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    "&.grid-4": {
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    },
    "&.grid-5": {
      gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    },
  }),
);

const PuzzleOuterWrapper = css({
  maxHeight: "auto",
  maxWidth: "100%",
  position: "relative",
  border: "10px solid #4c566f",
  bg: "#9ca2b0"
});

const PuzzleRow = classNames(
  css({
    display: "grid",
  }),
  grid({
    gap: "3px",
    md: {
      gap: "5px",
    },
  })
);

const PuzzleTileContainer = css({
  pb: "100%",
  position: "relative",
  w: "100%",
});

const PuzzleTile = css({
  bottom: "0",
  left: "0",
  right: "0",
  top: "0",
  overflow: "hidden",
  position: "absolute",
  "& img": {
    objectFit: "cover",
  },
  cursor: "pointer"
});

const DefaultMessage = css({
  position: "absolute",
  bottom: "0",
  w: "100%",
  textAlign: "center"
});

export const Puzzle = {
  PuzzleConfigs,
  PuzzleConfigsItem,
  PuzzleContainer,
  PuzzleInfoContainer,
  PuzzleInnerWrapper,
  PuzzleOuterWrapper,
  PuzzleRow,
  PuzzleTileContainer,
  PuzzleTile,
  DefaultMessage,
};
