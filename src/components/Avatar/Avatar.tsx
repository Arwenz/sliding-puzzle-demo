import classNames from "classnames";
import React from "react";
import { AvatarProps } from "./types";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { PandaCSS } from "../PandaCSS";

const Avatar = (props: AvatarProps) => {
  const { id, image, active = false, handleClick } = props;
  const { src, alt } = image;

  const classNameActive = classNames(
    active ? "active" : false
  );

  // @TODO: Implement Radix Avatar.
  // DONE.
  return (
    <RadixAvatar.Root className={`${PandaCSS.Avatar.AvatarContainer} ${classNameActive}`} onClick={() => handleClick(src, id)}>
      <RadixAvatar.Image
        className={PandaCSS.Avatar.AvatarImg}
        src={src}
        alt={alt}
      />
      <RadixAvatar.Fallback className="AvatarFallback" delayMs={600}>CT</RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export default Avatar;
