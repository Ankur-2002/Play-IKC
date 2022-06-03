import React, { useState } from 'react';
import { useStyle } from './RegisterCard.style';
import { Button, Modal } from '@mui/material';
import indianHistory from 'assets/images/multiPlayerImage.svg';
import Model from 'components/Model/Model';
import Ikc from 'assets/images/ikc.svg';
import WhiteIkc from 'assets/images/whiteIkc.svg';

const LiveCard = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(0);

  return (
    <div className={classes.card}>
      <div className={classes.left}>
        <img src={indianHistory} width={80} alt="" />
        <span>Header</span>
      </div>
      <div className={classes.right}>
        <div className={classes.header}>
          <span className="first">
            Win <img src={Ikc} width={12} height={12} alt={''} />
            40
          </span>
          <span>
            Fees <img src={WhiteIkc} width={10} height={12} alt={''} /> 10
          </span>
        </div>

        <Button onClick={() => setOpen(!open)}>Play now</Button>
        <span className="last">Time left: 46 hrs</span>
      </div>

      {open ? (
        <Model
          header={'1st Attempt'}
          description={'Are You Sure ?'}
          funOnLeftButton={() => setOpen(!open)}
          funOnRightButton={() => {}}
          leftButton={'No'}
          rightButton={'Yes'}
          headerDiscription={'Max 3 Attempts'}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default LiveCard;
