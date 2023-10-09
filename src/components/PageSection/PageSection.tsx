import classNames from "classnames";
import { PageSectionProps } from "./types";
import { PandaCSS } from "../PandaCSS";

/**
 * A component to render a page section with optional full width and full spacing.
 *
 * @param props - The component props.
 * @returns - The rendered page section.
 */
const PageSection = ({
  fullWidth = false,
  mobileSpacingX = true,
  children,
}: PageSectionProps) => {
  // These classes will take effect on desktop only.
  const fullWidthSectionClasses = fullWidth
    ? PandaCSS.PageSection.PageSectionFull
    : PandaCSS.PageSection.PageSectionConstrained;

  // Full spacing provides spacing between the container and mobile/tablet viewports.
  const fullSpacingSectionClasses = mobileSpacingX
    ? PandaCSS.PageSection.PageSectionMobile
    : "";

  // Determine the container classes based on fullWidth and fullSpacing props.
  const pageSectionClasses = classNames(
    PandaCSS.PageSection.PageSectionContainer,
    fullWidthSectionClasses,
    fullSpacingSectionClasses
  );

  return <div className={pageSectionClasses}>{children}</div>;
};

export default PageSection;
