import React from 'react';
import CustomModel from 'components/Model/NewModel';
import { useStyle } from './buyikc.style';
import { Button } from '@material-ui/core';
import Bulb from 'assets/images/buyBulb.svg';
import ikc from 'assets/images/whiteIkc.svg';
import IKC from 'assets/images/ikc.svg';
const BuyIkc = ({ close }) => {
  const classes = useStyle();
  return (
    <CustomModel
      setClose={() => {
        close();
      }}
    >
      <div className={classes.modelHeader}>
        <span className="buy">Buy Hints</span>
        <div className="ikc">
          <span>
            <img src={IKC} alt="" width={20} height={20} />
            250
          </span>
          <span className="total">Total balance</span>
        </div>
      </div>
      <div className={classes.list}>
        <div className="bulb">
          <img src={Bulb} alt="" width={25} height={25} />
          <span>2 hints</span>
        </div>
        <Button>
          <img src={ikc} alt="" width={15} height={15} />4
        </Button>
      </div>
      <div className={classes.list}>
        <div className="bulb">
          <img src={Bulb} alt="" width={25} height={25} />
          <span>2 hints</span>
        </div>
        <Button>
          <img src={ikc} alt="" width={15} height={15} />4
        </Button>
      </div>
      <div className={classes.list}>
        <div className="bulb">
          <img src={Bulb} alt="" width={25} height={25} />
          <span>2 hints</span>
        </div>
        <Button>
          <img src={ikc} alt="" width={15} height={15} />4
        </Button>
      </div>
      <div className={classes.list}>
        <div className="bulb">
          <img src={Bulb} alt="" width={25} height={25} />
          <span>2 hints</span>
        </div>
        <Button>
          <img src={ikc} alt="" width={15} height={15} />4
        </Button>
      </div>
    </CustomModel>
  );
};

export default BuyIkc;
