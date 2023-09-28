import classNames from 'classnames';
import React from 'react';
import { AvatarProps } from './types';
import { css } from '../../../styled-system/css';

const Avatar = (props: AvatarProps) => {
  const { id, image, active = false, handleClick } = props;
  const { src, alt } = image;

  const classNameAvatar = classNames(
    'avatar',
    // This is the new line containing Panda CSS-in-JS function
    css({ border: '4px solid green' }),
    active ? 'active' : false,
  );

  // @TODO: Implement Radix Avatar.
  return (
    <div className={classNameAvatar} onClick={() => handleClick(src, id)}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
