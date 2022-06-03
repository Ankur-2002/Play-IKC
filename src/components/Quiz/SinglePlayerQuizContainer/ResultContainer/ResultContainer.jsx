import React from 'react';
import { useStyle } from './ResultContainer.style';
import Badge from 'assets/images/resultBadge.svg';
import SinglePlayer from 'assets/images/resultIcon.svg';
import SinglePlayerMobile from 'assets/images/mobileSinglePlayer.svg';
import SinglePlayerMobileLogo from 'assets/images/mobileSingleLogo.svg';
import BlueShadow from 'assets/images/blurShadow.svg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Ball from 'common/ball/Ball';

const ResultContainer = ({ data, twoPlayer, score }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Ball width={50} right={'3%'} top={'10%'} bottom={0} margin="auto" />

      <div className={classes.ResultContainer}>
        <div className="mobileLogos">
          <img alt="" className="imageMobile1" src={SinglePlayerMobile} />
          <img alt="" className="imageMobile" src={SinglePlayerMobileLogo} />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.imageContainer}>
            <img alt="" className="image" src={SinglePlayer} />
          </div>
          <div className={classes.header}>
            <Ball width={30} top="0" margin="auto" />
            {<span className="title_result">Result</span>}
            <div className={classes.scoreContainer}>
              <div className="score">
                <div className={classes.resultImages}>
                  <img src={Badge} alt="" width={60} />
                  <img src={Badge} alt="" width={80} />
                  <img src={Badge} alt="" width={60} />
                </div>
                <div className="shadow">
                  <img src={BlueShadow} className="shadow" alt="shadow" />
                </div>
                <div className="innerScore">
                  <span className="titleScore">
                    {twoPlayer ? data.titleScore : score}
                  </span>
                  <span>Total Score</span>
                  {twoPlayer && (
                    <span className={data.class}>{data.title}</span>
                  )}
                </div>
              </div>
              {!twoPlayer && (
                <div className="buttonContainer">
                  <div className={classes.bottomScore}>
                    <span className="titleScore">545</span>
                    <span>Best score</span>
                  </div>
                  <div className={classes.bottomScore}>
                    <span className="titleScore">14056</span>
                    <span>Top score</span>
                  </div>
                </div>
              )}
              {twoPlayer && (
                <>
                  <div className={classes.player2Info}>
                    <span>{data.opponentText}</span>
                    <span>{data.opponentScore}</span>
                  </div>
                  <div className={classes.rematch}>
                    <Button>
                      <Link to={'/'}>Exit</Link>
                    </Button>
                    <Button>Rematch</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultContainer;
