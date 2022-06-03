import React from 'react';
import { useStyle } from './RegisterCard.style';
import { Button } from '@mui/material';
import indianHistory from 'assets/images/multiPlayerImage.svg';
import Ikc from 'assets/images/ikc.svg';
import WhiteIkc from 'assets/images/whiteIkc.svg';
const RegisterCard = () => {
  const classes = useStyle();

  return (
    <div className={classes.card}>
      <div className={classes.left}>
        <img src={indianHistory} width={80} alt="" />
        <span>Headers</span>
      </div>
      <div className={classes.right}>
        <div className={classes.header}>
          <span className="first">
            Win <img src={Ikc} alt="" width={12} height={12} />
            40
          </span>
          <span>
            Fees <img src={WhiteIkc} alt="" width={10} height={10} /> 10
          </span>
        </div>

        <Button>Details</Button>
        <span className="last">Deadline : 8th May, 2022</span>
      </div>
    </div>
  );
};

export default RegisterCard;
