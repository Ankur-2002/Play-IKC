import React from 'react';
import { useStyle } from './LeaderboardResult.style';
import singlePageBackground from 'assets/images/singlePageBackground.svg';
import singlePageBackgroundBlue from 'assets/images/singlePageBackgroundBlue.svg';
import Badge from 'assets/images/resultBadge.svg';
import SinglePlayerMobile from 'assets/images/mobileTwoplayer.svg';
import SinglePlayerMobileLogo from 'assets/images/MultiplayerTopBar.svg';
import indianHistory from 'assets/images/multiPlayerImage.svg';
import BlueShadow from 'assets/images/blurShadow.svg';
import UpIcon from 'assets/images/upIcon.svg';
import Avatar from 'assets/images/AvtarIcon.svg';
import Avatar2 from 'assets/images/AvtarIcon2.svg';
import Ball from 'common/ball/Ball';
import Back from 'assets/images/MultiPlayerScreen.svg';
const LeaderboardResult = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Ball top="26%" width={80} left={'-3.5%'} />
      <Ball top="0%" width={50} right={'0%'} bottom="0" margin="auto" />

      <img
        className="image"
        src={Back}
        alt=""
        style={{
          position: 'absolute',
          top: '60%',
          bottom: '0',
          margin: 'auto',
          opacity: '50%',
          left: '-15%',
          zIndex: 1000,
          width: '600px',
        }}
      />

      <img
        className="image"
        src={Back}
        alt=""
        style={{
          position: 'absolute',
          top: '-10%',
          bottom: '0',
          margin: 'auto',
          opacity: '50%',
          right: '0%',
          zIndex: 1000,
          width: '300px',
        }}
      />
      <div className={classes.imageContainer}>
        <img className="image1" src={singlePageBackground} alt="" />
        <img className="image2" src={singlePageBackgroundBlue} alt="" />
      </div>
      <div className={classes.mobileImageContainer}>
        <img className="image1" src={SinglePlayerMobile} alt="" />
        <img className="image2" src={SinglePlayerMobileLogo} alt="" />
      </div>
      <div className={classes.wrapper}>
        <Ball top="-5%" width={30} right={'10%'} />
        <div className={classes.header}>
          <span className={classes.resultHeader}>Result</span>
          <div className={classes.result}>
            <div className={classes.card}>
              <img src={indianHistory} alt="img" width={60} />
              <span>Indian History</span>
            </div>
            <div className={classes.winner}>
              <div className="images">
                <img
                  style={{
                    zIndex: 1,
                  }}
                  src={Badge}
                  width={30}
                  alt=""
                />
                <img
                  style={{
                    zIndex: 1,
                  }}
                  src={Badge}
                  width={50}
                  alt=""
                />
                <img
                  style={{
                    zIndex: 1,
                  }}
                  src={Badge}
                  width={30}
                  alt=""
                />
              </div>
              <div className="images">
                <img
                  src={BlueShadow}
                  width={100}
                  style={{
                    zIndex: 0,
                  }}
                  className="shadow"
                  alt="shadow"
                />
              </div>
              {/*  */}
              {/*  */}
              {/*  */}
              <div className={classes.name}>
                <div>
                  <span>1</span> <span>Name</span>
                </div>
                <span>234 pts</span>
              </div>
              <div className={classes.name}>
                <div>
                  <span>1</span> <span>Name</span>
                </div>
                <span>234 pts</span>
              </div>
              <div className={classes.name}>
                <div>
                  <span>1</span> <span>Name</span>
                </div>
                <span>234 pts</span>
              </div>
              {/* // */}
              {/*  */}
              {/*  */}
              {/*  */}
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <span className="leaderBoard">Leaderboard</span>
          <div className={classes.leader}>
            <div className={classes.label}>
              <img width={30} src={UpIcon} />
              <span>1</span>
              <img width={30} src={Avatar} />
              <span className="name">Ankur</span>
              <span className="point">2019 pts.</span>
              <span className="ikc">+36 IKC</span>
            </div>

            <div className={classes.label2}>
              <img width={30} src={UpIcon} />
              <span>2</span>
              <img width={30} src={Avatar2} />
              <span className="name">Imran</span>
              <span className="point">2019 pts.</span>
              <span className="ikc">+35 IKC</span>
            </div>
            <div className={classes.label2}>
              <img width={30} src={UpIcon} />
              <span>2</span>
              <img width={30} src={Avatar2} />
              <span className="name">Imran</span>
              <span className="point">2019 pts.</span>
              <span className="ikc">+35 IKC</span>
            </div>
            <div className={classes.label2}>
              <img width={30} src={UpIcon} />
              <span>2</span>
              <img width={30} src={Avatar2} />
              <span className="name">Imran</span>
              <span className="point">2019 pts.</span>
              <span className="ikc">+35 IKC</span>
            </div>

            <div className={classes.label2}>
              <img width={30} src={UpIcon} />
              <span>2</span>
              <img width={30} src={Avatar2} />
              <span className="name">Imran</span>
              <span className="point">2019 pts.</span>
              <span className="ikc">+35 IKC</span>
            </div>

            <div className={classes.label2}>
              <img width={30} src={UpIcon} />
              <span>2</span>
              <img width={30} src={Avatar2} />
              <span className="name">Imran</span>
              <span className="point">2019 pts.</span>
              <span className="ikc">+35 IKC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardResult;
