import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';
import Dialog from './Dialog';
import { createQuiz } from 'api/quiz-with-friend.js';
import { fetchAllCategories } from '../../../../store/actions/categoryAction';
import Leaderboard from './Leaderboard';
import GridItem from './GridItem';
import { connect } from 'react-redux';
import { useStyle } from './Category.style';
// import IconButton from '@mui/material/IconButton';
import CopyIcon from '@mui/icons-material/CopyAllOutlined';
import singlePageBackground from 'assets/images/blackWave.svg';
import singlePageBackgroundBlue from 'assets/images/blueWave.svg';

import SinglePlayerMobile from 'assets/images/mobileTwoplayer.svg';
import SinglePlayerMobileLogo from 'assets/images/mobileTwoplayerIcon.svg';
import FrontImage from 'assets/images/frontImage.svg';
import { images } from '../../FreeQuiz/Category';
import Model from 'components/Model/Model';
import Ball from 'common/ball/Ball';

const Categories = props => {
  const classes = useStyle();
  const history = useHistory();
  const { dispatch, Categories, Auth } = props;
  const [roomDetails, setRoomDetails] = useState({
    roomCode: null,
    roomId: null,
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);

  // Handle Category Card click
  const handleClickOpen = async category => {
    setSelectedCategory(category);
    setRoomDetails({ roomCode: null, roomId: null });

    const response = await createQuiz(category._id);
    console.log(response, 'create room');
    setOpen(true);
    setRoomDetails({
      roomCode: response?.data?.payload?.code,
      roomId: response?.data?.payload?.roomId,
    });
  };

  // Handle next step
  const handleContinue = () => {
    setOpen(false);
    history.push({
      pathname: '/play-with-friend/gamepage',
      state: { roomDetails, selectedCategory },
    });
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Fetch categories from backend
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  return (
    <>
      <div className={classes.container}>
        <Ball width={80} left="-3.5%" top="20%" />
        <Ball width={30} left="-0%" top="30%" bottom="0" margin="auto" />
        <Ball width={50} right="2%" top="0%" bottom="0" margin="auto" />
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
              <span className="title">Two Player</span>
              <span>
                Invite a friend and compete in an extensive competitive quiz
              </span>
            </div>
          </div>
          <div className={classes.right}>
            <Ball width={25} left="0%" top="10%" margin="auto" />
            <img className="img" src={FrontImage} alt="" />
          </div>
        </div>
        <div className={classes.category}>
          {Categories?.map(item => {
            return (
              <div
                className={classes.card}
                onClick={() => handleClickOpen(item)}
              >
                <div className={classes.content}>
                  <img src={images[item.name]} alt="" width={90} />
                  <span>{item?.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {open && (
        <Model
          header={'Share'}
          description={'Share this code with your friend to play together'}
          inputValue={roomDetails.roomCode}
          leftButton={'Close'}
          rightButton={'Continue'}
          funOnLeftButton={() => setOpen(false)}
          funOnRightButton={handleContinue}
          isContent
        />
      )}
    </>
  );
};

/**<>
          <div className={classes.backdrop}></div>

          <div className={classes.modal}>
            <div className={classes.modelContent}>
              <span className="Mtitle">Share</span>
              <span>Share this code with your friend to play together</span>
              <div className={classes.token}>
                <div className="content">
                  <span>{roomDetails.roomCode}</span>
                  <CopyIcon
                    color="primary"
                    size="large"
                    onClick={() => {
                      navigator.clipboard.writeText(roomDetails.roomCode);
                    }}
                  />
                </div>
              </div>
              <div className={classes.buttonContainer}>
                <Button onClick={() => setOpen(false)}>Close</Button>
                <Button onClick={handleContinue}>Continue</Button>
                  
                </div>
                </div>
              </div>
            </> */

const mapStateToProps = props => {
  return {
    Categories: props?.Categories?.category,
    Auth: props.Auth,
    dispatch: props.dispatch,
  };
};
/**
 * <Container>
      <Leaderboard />
      <Typography fontWeight="900" variant="h2" component="h2" mt={3}>
        Select a topic to play
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={6} mt={3}>
        {Categories?.length > 0
          ? Categories?.map(category => {
              return (
                <GridItem
                  key={category._id}
                  category={category}
                  handleClickOpen={handleClickOpen}
                />
              );
            })
          : null}
      </Grid>
      <Dialog
        open={open}
        roomCode={roomDetails.roomCode}
        handleContinue={handleContinue}
        handleClose={handleClose}
      />
    </Container>
 */
export default connect(mapStateToProps)(Categories);
