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
import FrontImage from 'assets/images/frontImage.svg';
function HowToPlay({ categories, dispatch }) {
  const classes = useStyle({
    how: true,
    button: 1,
  });
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);
  const isLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  });

  return (
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

        <div className={classes.alignMent}>
          <div className="inner">
            <div className={classes.wrapper}>
              <div className={classes.field}>
                <div className={classes.header}>
                  <span className="top">
                    <span className="first">How to Play</span>
                    <img src={Win} alt="" />
                  </span>
                </div>
                {isLaptop && (
                  <div className={classes.right}>
                    <Ball width={20} top={'10%'} left="30%" />
                    <img
                      className="images"
                      src={FrontImage}
                      alt=""
                      width={400}
                    />
                    <Ball width={20} bottom="5%" left="-15%" />
                  </div>
                )}
              </div>
            </div>

            <div className={classes.bottomPart}>
              <div className={classes.buttonHeader}>
                <Button className="color">Single Player</Button>
                <Button>Two Player</Button>
                <Button>MultiPlayer</Button>
              </div>
              <div className={classes.content}>
                <div className="header">Intelligence Pays</div>
                <div className="des">
                  This new and hugely exciting quiz game see you and all the
                  other players battling to be the last person alive in a huge
                  knock-out quiz. So it’s a Survivor game, right? Well, pretty
                  much. Apart from the fact that our live quizzes are, as the
                  name suggests, hosted live by presenters from all over the
                  world. So not only do you get the chance to win big money but
                  you also have the chance to get up close and personal with the
                  host. And you can even send them your thoughts and feedback
                  via the chat facility. It’s like having a live game show on
                  your phone, table or desktop. Just like our Survivor games,
                  you can choose which live quizzes you want to join well in
                  advance. You will then be sent a reminder before it starts so
                  make sure you are on the game page in plenty of time. The live
                  games have real cash prizes so you will need to have enough
                  tokens in your account to join.
                </div>
              </div>
            </div>
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

export default connect(mapStateToProps)(HowToPlay);
