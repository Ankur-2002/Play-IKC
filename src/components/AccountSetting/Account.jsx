import React, { useState } from 'react';
import { useStyle } from './Account.style';
import singlePageBackground from 'assets/images/singlePageBackground.svg';
import singlePageBackgroundBlue from 'assets/images/singlePageBackgroundBlue.svg';
import SinglePlayerMobile from 'assets/images/mobileTwoplayer.svg';
import SinglePlayerMobileLogo from 'assets/images/MultiplayerTopBar.svg';
import AccountDetails from './AccountDetails/AccountDetails';
import Avatar2 from 'assets/images/AvtarIcon2.svg';
import AccountResult from './ResultDetails/AccountResult';
import { Button } from '@mui/material';
import Ball from 'common/ball/Ball';
import Wallet from './Wallet/Wallet';
const Account = () => {
  const classes = useStyle();
  const [tab, setTab] = useState(0);
  return (
    <div className={classes.container}>
      <Ball top={'28%'} width={100} left="-4%" />
      <Ball bottom={'0%'} margin="auto" top={'50%'} width={30} />
      <Ball right={'3%'} top="0" bottom="0" margin="auto" width={50} />
      <div className={classes.imageContainer}>
        <img className="image1" src={singlePageBackground} alt="" />
        <img className="image2" src={singlePageBackgroundBlue} alt="" />
      </div>
      <div className={classes.mobileImageContainer}>
        <img className="image1" src={SinglePlayerMobile} alt="" />
        <img className="image2" src={SinglePlayerMobileLogo} alt="" />
      </div>
      <div className={classes.section}>
        <div className={classes.account}>
          <span>My Account</span>
        </div>
        <div className={classes.header}>
          <img src={Avatar2} alt="" />
          <span>Ankur Chaurasia</span>
        </div>
        <div className={classes.accountContainer}>
          <div className={classes.left}>
            <div className="leftHeader">
              <span>Player Account</span>
            </div>
            <div className={'leftOption'}>
              <span onClick={() => setTab(0)} className={tab === 0 && 'color'}>
                Account Dashboard
              </span>
              <span onClick={() => setTab(1)} className={tab === 1 && 'color'}>
                Result Report
              </span>
              <span onClick={() => setTab(2)} className={tab === 2 && 'color'}>
                Wallet
              </span>
            </div>
          </div>
          <div className={classes.right}>
            <div className="rightHeader">
              <span>
                {tab === 0
                  ? 'Player Account Dashboard'
                  : tab === 1
                  ? 'Results Report'
                  : 'Wallet'}
              </span>
            </div>
            <div className="rightContainer">
              {tab === 0 ? (
                <AccountDetails />
              ) : tab === 1 ? (
                <AccountResult />
              ) : (
                <Wallet />
              )}
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button>{tab === 0 ? 'Update' : 'More'}</Button>
        </div>
      </div>
    </div>
  );
};

export default Account;
