import React, { useState } from 'react';
import { useStyle } from './Detail.style';
import singlePageBackground from 'assets/images/singlePageBackground.svg';
import singlePageBackgroundBlue from 'assets/images/singlePageBackgroundBlue.svg';

import SinglePlayerMobile from 'assets/images/mobileTwoplayer.svg';
import SinglePlayerMobileLogo from 'assets/images/MultiplayerTopBar.svg';
import MultiPlayerScreen from 'assets/images/MultiPlayerScreen.svg';
import indianHistory from 'assets/images/multiPlayerImage.svg';
import { Button } from '@mui/material';
import NewModel from 'components/Model/NewModel';

const Detail = () => {
  const classes = useStyle();
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img className="image1" src={singlePageBackground} alt="" />
          <img className="image2" src={singlePageBackgroundBlue} alt="" />
        </div>
        <div className={classes.mobileImageContainer}>
          <img className="image1" src={SinglePlayerMobile} alt="" />
          <img className="image2" src={SinglePlayerMobileLogo} alt="" />
        </div>
        <div className={classes.header}>
          <span>Quiz Details</span>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <img src={indianHistory} alt="img" width={100} height={100} />
            <div>
              <span>2 slots left !!</span>
              <span>46 hours left !!</span>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.piles}>
              <span>10 K</span>
              <span>Entry Fee</span>
            </div>
            <div className={classes.piles}>
              <span>10 K</span>
              <span>Entry Fee</span>
            </div>
            <div className={classes.piles}>
              <span>10 K</span>
              <span>Entry Fee</span>
            </div>
            <div className={classes.piles}>
              <span>10 K</span>
              <span>Entry Fee</span>
            </div>
            <div className={classes.Bigpiles}>
              <span>10 K</span>
              <span>Entry Fee</span>
            </div>
          </div>
        </div>

        <div className={classes.button}>
          <Button>Share</Button>
          <Button onClick={() => setRegister(!register)}>Register</Button>
        </div>
      </div>

      {register ? (
        <NewModel setClose={() => setRegister(!register)}>
          <div className={classes.model}>
            <div className={classes.modelHeader}>
              <span className="gold">
                10K <span>will be deducted from your wallet.</span>
              </span>
            </div>
            <div className={classes.modelContent}>
              Incase quiz gets lower registerations than required , a refund
              will be initiated.
            </div>
            <div className={classes.better}>Do you wish to proceed?</div>
            <div className={classes.buttonContainer}>
              <Button onClick={() => setRegister(!register)}>No</Button>
              <Button>Yes</Button>
            </div>
          </div>
        </NewModel>
      ) : (
        ''
      )}
    </>
  );
};

export default Detail;
