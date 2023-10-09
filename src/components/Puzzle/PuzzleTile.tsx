import Image from 'next/image';
import React from 'react';
import { PuzzleTileProps } from './types';
import { css } from '../../../styled-system/css';
import { PandaCSS } from '../PandaCSS';

const PuzzleTile: React.FC<PuzzleTileProps> = (props: PuzzleTileProps) => {
  const { id, imageSrc, label, handleClick } = props;
  const isEmpty = imageSrc === undefined;

  const tileNumber = css({
    display: "flex",
    color: "white",
    position: "absolute",
    w: "20px",
    h: "20px",
    padding: "5px",
    fontWeight: "bold"
  });

  return (
    <div className={PandaCSS.Puzzle.PuzzleTileContainer} onClick={handleClick}>
      <div className={PandaCSS.Puzzle.PuzzleTile}>
        {isEmpty ? (
          <div />
        ) : (
          <Image
            src={imageSrc}
            alt={`Puzzle Piece ${id}`}
            width="150"
            height="150"
          />
        )}
      </div>
      {label && <span className={tileNumber}>{label}</span>}
    </div>
  );
};

export default PuzzleTile;
