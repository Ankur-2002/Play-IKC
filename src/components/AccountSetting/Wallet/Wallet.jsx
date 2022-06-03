import React, { useState } from 'react';
import { useStyle } from '../ResultDetails/AccountResult.style';
import List from './List';
const Wallet = () => {
  const classes = useStyle();
  const [tab, setTab] = useState(0);
  return (
    <div className={classes.container}>
      <div className={classes.bottom}>
        <>
          <List />
          <List />
          <List />
          <List />
        </>
      </div>
    </div>
  );
};

export default Wallet;
