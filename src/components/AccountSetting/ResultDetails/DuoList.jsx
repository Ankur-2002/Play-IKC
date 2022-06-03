import React from 'react';
import List from './List';
import { useStyle } from './AccountResult.style';
const DuoList = () => {
  const classes = useStyle();
  return (
    <div className={classes.duoContainer}>
      <List />
      <div className={classes.duo}>
        <span className="winner">You Won</span>
        <span className="score">
          Player 2 Score <span className="points">2342 pts.</span>
        </span>
      </div>
    </div>
  );
};

export default DuoList;
