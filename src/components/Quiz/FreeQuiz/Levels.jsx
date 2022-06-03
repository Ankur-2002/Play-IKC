// import "../styles/components/PlayNow.css";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SinglePlayer from 'assets/images/singleQuizLogo.svg';
import singlePageBackground from 'assets/images/singlePageBackground.svg';
import singlePageBackgroundBlue from 'assets/images/singlePageBackgroundBlue.svg';
import { Link, useParams } from 'react-router-dom';
import { getLevelsOfCategory } from 'api/quiz-single-player';
import { useStyle } from './Level.style';
import Unlock from 'assets/images/unlock.svg';
import Lock from 'assets/images/lock.svg';
import SinglePlayerMobile from 'assets/images/mobileSinglePlayer.svg';
import SinglePlayerMobileLogo from 'assets/images/mobileSingleLogo.svg';
import { Button } from '@material-ui/core';
import Ball from 'common/ball/Ball';
import Bulb from 'assets/images/bulb.svg';
import Play from 'assets/images/play.svg';
import BuyIkc from 'common/buyIkc/BuyIkc';
function ClassicLevels() {
  const { categoryId } = useParams();
  const classes = useStyle();
  const location = useLocation();
  const [levels, setLevels] = useState([]);
  const [access, setAccess] = useState(0);
  const [loader, setLoader] = useState(false);
  const [buy, setBuy] = useState(0);
  useEffect(() => {
    setLoader(true);
    getLevelsOfCategory(categoryId)
      .then(data => {
        if (Array.isArray(data?.maxLevelUnolocked))
          setAccess(data?.maxLevelUnolocked);
        if (Array.isArray(data?.quizzes)) setLevels(data?.quizzes);
        setLoader(false);
      })
      .catch(error => {
        console.log(error);
        setLevels([]);
        setLoader(false);
      });
  }, []);

  return (
    <div className={classes.container}>
      <Ball width={100} left={'-4%'} top={'20%'} />
      <img
        src={singlePageBackground}
        className="front"
        alt="singlePageBackground"
      />
      <img
        src={singlePageBackgroundBlue}
        className="back"
        alt="singlePageBackgroundBlue"
      />
      <div className="mobileLogos">
        <img alt="" className="imageMobile1" src={SinglePlayerMobile} />
        <img alt="" className="imageMobile" src={SinglePlayerMobileLogo} />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <span className="title">Select Level</span>
          <span>Play and unlock levels to receive more rewards</span>
        </div>
        <div className={classes.imageContainer}>
          <Ball width={30} />
          <img alt="" className="image" src={SinglePlayer} />
        </div>

        <Ball width={40} right={'5%'} bottom={0} />
      </div>

      <div className={classes.cards}>
        <div className={classes.topbar}>
          <span className="bulb" onClick={() => setBuy(1)}>
            <img src={Bulb} width={25} alt="" />5
          </span>
          <span>Select Level</span>
          <span>550</span>
        </div>
        <Ball width={30} left="0.3%" />
        {levels.map((items, index) => {
          return (
            <div className={classes.card} key={items._id + index}>
              <div className="imageSide">
                <img src={Unlock} alt="unlock" width={70} height={70} />
              </div>
              {/**{access + 1 >= items.level ? (
                  <img src={Unlock} alt="unlock" />
                ) : (
                  <img src={Lock} alt="lock" />
                )} */}

              <div className={classes.bottomContainer}>
                <div
                  className={`description  ${
                    access + 1 >= items.level ? 'colorTitle' : ''
                  }`}
                >
                  <span className="title">Level {items.level}</span>
                  <span>{items?.metadata?.maxQuestions} Questions</span>
                </div>
                <Button
                  className={
                    'buttoncontainer' +
                    ' ' +
                    (access + 1 >= items.level ? 'unlock' : 'lock')
                  }
                >
                  <Link
                    to={
                      access + 1 >= items.level
                        ? `/quiz/fetch/${items._id}`
                        : `${location.pathname}`
                    }
                  >
                    <img
                      src={access + 1 >= items.level ? Play : Lock}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
        {levels.map((items, index) => {
          return (
            <div className={classes.card} key={items._id + index}>
              <div className="imageSide">
                <img src={Unlock} alt="unlock" width={70} height={70} />
              </div>
              {/**{access + 1 >= items.level ? (
                  <img src={Unlock} alt="unlock" />
                ) : (
                  <img src={Lock} alt="lock" />
                )} */}

              <div className={classes.bottomContainer}>
                <div
                  className={`description  ${
                    access + 1 >= items.level ? 'colorTitle' : ''
                  }`}
                >
                  <span className="title">Level {items.level}</span>
                  <span>{items?.metadata?.maxQuestions} Questions</span>
                </div>
                <Button
                  className={
                    'buttoncontainer' +
                    ' ' +
                    (access + 1 >= items.level ? 'unlock' : 'lock')
                  }
                >
                  <Link
                    to={
                      access + 1 >= items.level
                        ? `/quiz/fetch/${items._id}`
                        : `${location.pathname}`
                    }
                  >
                    <img
                      src={access + 1 >= items.level ? Play : Lock}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {buy && <BuyIkc close={setBuy} />}
    </div>
  );
}
/**
 * {levels.length > 0 ? (
          levels.map((item, ind) => {
            return (
              <Link
                to={
                  ind < access + 1
                    ? `/quiz/fetch/${item._id}`
                    : `${location.pathname}`
                }
                style={
                  ind < +access + 1
                    ? { textDecoration: 'none' }
                    : { textDecoration: 'none' }
                }
                key={item._id}
              >
                <div
                  className="card-category-content"
                  style={{
                    backgroundColor: ind < access + 1 ? '#ff1f5a' : '#dee1ec',
                    color: ind < access + 1 ? '#FFFFFF' : '#3f3b3b',
                  }}
                >
                  <div className="card_img">
                    <img src={item.icon} alt="sports" width={100} />
                  </div>
                  <div className="card_text">
                    <h2> Level : {item.level}</h2>
                    <h3>{item?.metadata?.maxQuestions} Questions </h3>
                  </div>
                  <div
                    className={
                      ind < access + 1 ? 'card_bottom' : 'card_bottom_fade'
                    }
                  >
                    <h2>Play</h2>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            {loader ? <Spinner /> : <span>Quiz Not Found</span>}
          </Box>
        )}
 * 
 */
export default ClassicLevels;
