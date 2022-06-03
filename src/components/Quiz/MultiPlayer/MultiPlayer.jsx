import React, { useState } from 'react';
import { useStyle } from './MutliPlayer.style';
import { useHistory } from 'react-router-dom';
// import singlePageBackground from 'assets/images/blackWave.svg';
// import singlePageBackgroundBlue from 'assets/images/blueWave.svg';

import singlePageBackground from 'assets/images/singlePageBackground.svg';
import singlePageBackgroundBlue from 'assets/images/singlePageBackgroundBlue.svg';

import SinglePlayerMobile from 'assets/images/mobileTwoplayer.svg';
import SinglePlayerMobileLogo from 'assets/images/MultiplayerTopBar.svg';
import MultiPlayerScreen from 'assets/images/MultiPlayerScreen.svg';

import RegisterCard from './cards/RegisterCard';
import LiveCard from './cards/LiveCard';
import Participated from './cards/Participated';
import ResultComponent from './Result/Result';

import Badge from 'assets/images/trophy.svg';
import Ball from 'common/ball/Ball';
const MultiPlayer = () => {
  const router = useHistory();
  const [result, setResult] = useState(false);
  const [tab, setTab] = useState(0);
  const classes = useStyle({
    tab: tab,
  });
  return (
    <>
      {/* <ResultComponent /> */}
      <div className={classes.container}>
        <Ball width={80} left="-3%" top="20%" />
        <Ball width={30} left="0" top="20%" bottom="0" margin="auto" />
        <Ball width={50} right="3%" top="6%" bottom="0" margin="auto" />
        <div className={classes.imageContainer}>
          <img className="image1" src={singlePageBackground} alt="" />
          <img className="image2" src={singlePageBackgroundBlue} alt="" />
        </div>
        <div className={classes.mobileImageContainer}>
          <img className="image1" src={SinglePlayerMobile} alt="" />
          <img className="image2" src={SinglePlayerMobileLogo} alt="" />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <div className={classes.header}>
              <span className="title">
                <img src={Badge} alt="" width={50} height={50} />
                Multi Player
              </span>
              <span>
                Play multiplayer challenges to find out if you are the best
              </span>
            </div>
          </div>
          <div className={classes.right}>
            <Ball left="10%" top="5%" width={25} />
            <img className="img" src={MultiPlayerScreen} alt="" />
          </div>
        </div>

        <div className={classes.multiPlayerWrapper}>
          <div className={classes.bottomContainer}>
            <div className={classes.bottomHeader}>
              <span onClick={() => setTab(0)} className="tab1">
                Register
              </span>
              <span onClick={() => setTab(1)} className="tab2">
                Live Quiz
              </span>
              <span onClick={() => setTab(2)} className="tab3">
                Participated
              </span>
            </div>

            {tab === 0 ? (
              <div className={classes.bottomList} key={1}>
                <RegisterCard />
                <RegisterCard />
                <RegisterCard />
                <RegisterCard />
                <RegisterCard />
                <RegisterCard />
              </div>
            ) : tab === 1 ? (
              <div className={classes.bottomList} key={2}>
                <LiveCard />
                <LiveCard />
                <LiveCard />
                <LiveCard />
                <LiveCard />
                <LiveCard />
              </div>
            ) : (
              <div className={classes.bottomList} key={3}>
                <Participated setResult={router} />
                <Participated setResult={router} />
                <Participated setResult={router} />
                <Participated setResult={router} />
                <Participated setResult={router} />
                <Participated setResult={router} />
                <Participated setResult={router} />
                <Participated setResult={router} />
                <Participated setResult={router} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiPlayer;
