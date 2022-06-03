import React, { useState } from 'react';
import { useStyle } from './AccountResult.style';
import List from './List';
import DuoList from './DuoList';
const AccountResult = () => {
  const classes = useStyle();
  const [tab, setTab] = useState(0);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span onClick={() => setTab(0)} className={tab === 0 && 'color'}>
          Single Player
        </span>
        <span onClick={() => setTab(1)} className={tab === 1 && 'color'}>
          Duo Player
        </span>
        <span onClick={() => setTab(2)} className={tab === 2 && 'color'}>
          Multiplayer
        </span>
      </div>
      <div className={classes.bottom}>
        {tab === 0 ? (
          <>
            <List />
            <List />
            <List />
            <List />
          </>
        ) : (
          <>
            <DuoList />
            <DuoList />
            <DuoList />
            <DuoList />
          </>
        )}
      </div>
    </div>
  );
};

export default AccountResult;
