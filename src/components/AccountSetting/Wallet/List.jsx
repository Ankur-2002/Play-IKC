import React from 'react';
import { useStyle } from './List.style';
import Wallet from 'assets/images/wallet.svg';
import second from 'assets/images/ikc.svg';
const List = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className="left">
        <img src={Wallet} alt="" width={30} />
        <span className="type">IKC Purchased</span>
      </div>
      <div className="right">
        <span className="points">
          + <img src={second} alt="" width={10} height={10} />{' '}
          <span className="money">100</span>
        </span>
        <span>
          status: <span className="status"> pending</span>
        </span>
      </div>
    </div>
  );
};

export default List;
