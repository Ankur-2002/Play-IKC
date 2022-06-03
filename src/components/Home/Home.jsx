import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import FrontWave from '../../assets/images/blackWave.svg';
import BackWave from '../../assets/images/blueWave.svg';
import MobileBackground from '../../assets/images/defaultIconMobile.svg';
import MobileRect from '../../assets/images/homeShadow.svg';
import Win from '../../assets/images/win.svg';
import Trophy from '../../assets/images/trophy.svg';
import Badge from '../../assets/images/badge.svg';
import Cash from '../../assets/images/cash.svg';
import Doddle from '../../assets/images/doddle.svg';
import { Spinner } from 'assets';
import { fetchAllCategories } from '../../store/actions/categoryAction';
// import Slider from 'react-slick';
import { connect } from 'react-redux';
import { useStyle } from './home.style';
import { useMediaQuery } from 'react-responsive';
import Button from '@mui/material/Button';
import Middle from 'assets/images/Middle.svg';
import Left from 'assets/images/left.svg';
import Right from 'assets/images/rightIcon.svg';
import Top from 'assets/images/top.svg';
import Multiplayer from 'assets/images/multiPlayer.svg';
import TwoPlayer from 'assets/images/twoPlayer.svg';
import SinglePlayer from 'assets/images/singlePlayer.svg';
import Ball from 'common/ball/Ball';
import HowToPlay from './HowToPlay';
function Home({ categories, dispatch }) {
  const classes = useStyle();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);
  const isLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  });

  return (
    // <HowToPlay />
    <>
      <Ball top={'20%'} left={'-4%'} width={100} height={100} />
      <Ball top={'55%'} left={'0.2%'} width={20} />
      <div className={classes.container}>
        {isLaptop ? (
          <div>
            <div className={classes.backWave}>
              <img src={BackWave} alt="" />
            </div>
            <div className={classes.frontWave}>
              <img src={FrontWave} alt="" />
            </div>
          </div>
        ) : (
          <div>
            <div className={classes.mobileImage}>
              <img src={MobileBackground} alt="" />
            </div>
            <div className={classes.mobileImage + ' ' + classes.mobile}>
              <img src={MobileRect} alt="shadow" />
            </div>
          </div>
        )}
        <div className={classes.wrapper}>
          <div className={classes.field}>
            <div className={classes.header}>
              <span className="top">
                <span className="first">Intelligence </span>Pays !
                <img src={Win} alt="" />
              </span>
              <span className="mid">
                It's real{' '}
                <span className={classes.cash}>
                  cash <img src={Cash} alt="" />
                </span>
                for winners!
              </span>
              <div className={classes.buttonContainer}>
                <Button
                  className="button0"
                  onClick={() => {
                    history.push('/login');
                  }}
                >
                  Login
                </Button>
                <Button className="button1">Invite Friends</Button>
              </div>
            </div>
            {isLaptop && (
              <div className={classes.imageContainer}>
                <div className="top">
                  <img src={Top} alt="top" />
                </div>
                <div className="mid">
                  <img src={Middle} className="mid" alt="middle" />
                  <Ball top={'-10%'} width={20} left={'35%'} />
                </div>
                <div className="left">
                  <img src={Left} alt="middle" />
                </div>
                <div className="right">
                  <img src={Right} alt="middle" />
                </div>

                <Ball bottom={'-25%'} width={50} right={'-10%'} />
              </div>
            )}
          </div>
          {!isLaptop && <img className="img" src={Badge} alt="" />}
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.bottomContainerHeader}>
          {/* {!isLaptop && <img src={Doddle} alt="" />} */}
          <span className="bottomHeader">Play Solo or Compete !!! </span>
          <span className="bottomDescription">Play more to win rewards...</span>
        </div>
        <div className={classes.playerContainer}>
          {isLaptop && <img className="win" src={Win} alt="" />}

          <div className={classes.Card}>
            {isLaptop && <img className="trophy" src={Badge} alt="" />}

            <div className="top">
              <span className="title">Single Player</span>
              <span>Play single player games to practice and earn points</span>
              <div className="buttonContainer">
                <Button
                  className="button0"
                  onClick={() => {
                    history.push('/quiz/category');
                  }}
                >
                  Play Now
                </Button>
                <Button className="button1">Invite Friends</Button>
              </div>
            </div>
            {isLaptop && (
              <div className="bottom">
                <img src={SinglePlayer} alt="" />
              </div>
            )}
          </div>
          <div className={classes.Card}>
            <div className="top">
              <span className="title">Two Player</span>
              <span>
                Invite a friend and compete in an extensive competitive quiz
              </span>
              <div className="buttonContainer">
                <Button
                  className="button0"
                  onClick={() => {
                    history.push('/play-with-friend');
                  }}
                >
                  Play Now
                </Button>
                <Button className="button1">Invite Friends</Button>
              </div>
            </div>
            {isLaptop && (
              <div className="bottom">
                <img src={TwoPlayer} alt="" />
              </div>
            )}
          </div>
          <div className={classes.Card}>
            <div className="top">
              <span className="title">MultiPlayer</span>
              <span>
                Play multiplayer challenges to find out if you are the best
              </span>
              <div className="buttonContainer">
                <Button
                  className="button0"
                  onClick={() => {
                    history.push('/multiplayer');
                  }}
                >
                  Play Now
                </Button>
                <Button className="button1">Invite Friends</Button>
              </div>
            </div>
            {isLaptop && (
              <div className="bottom">
                <img src={Multiplayer} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.Categories,
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(Home);
