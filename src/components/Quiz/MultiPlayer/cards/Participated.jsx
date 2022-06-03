import React from 'react';
import { useStyle } from './Participated.style';
import { Button } from '@mui/material';
import indianHistory from 'assets/images/multiPlayerImage.svg';

const Participated = ({ setResult }) => {
  const classes = useStyle();
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <img src={indianHistory} alt="images" />
        <span>Header</span>
      </div>
      <div className={classes.footer}>
        <Button onClick={() => setResult.push('/multiplayer/leaderboard/12')}>
          Results
        </Button>
      </div>
    </div>
  );
};

export default Participated;
