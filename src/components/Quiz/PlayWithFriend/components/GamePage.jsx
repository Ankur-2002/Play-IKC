import React, { useState, useEffect } from 'react';
import { socket } from './services';
import { getIsCreator } from 'api/quiz-with-friend';
import Game from './Game';
import GameInfo from './GameInfo';
import CopyIcon from '@mui/icons-material/CopyAllOutlined';
import { ErrorBox } from './Styles.js';
import { useStyle } from './GamePage.style';
import singlePageBackground from 'assets/images/blackWave.svg';
import singlePageBackgroundBlue from 'assets/images/blueWave.svg';

import SinglePlayerMobile from 'assets/images/mobileTwoplayer.svg';
import SinglePlayerMobileLogo from 'assets/images/mobileTwoplayerIcon.svg';
import FrontImage from 'assets/images/frontImage.svg';
import { images } from '../../FreeQuiz/Category';
import { Button } from '@mui/material';
import GAME from './QuizContainer/GAME';
import Ball from 'common/ball/Ball';
const GamePage = ({ location }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [error, setError] = useState(null);
  const [start, setStart] = useState(false);
  const [friend, setFriend] = useState(null);
  const [creator, setCreator] = useState(null);
  const [isCreator, setIsCreator] = useState(false);
  const roomDetails = location.state.roomDetails;
  const selectedCategory = location.state.selectedCategory;

  const switchContent = () => {
    if (friend) {
      socket.emit('startQuiz', { roomId: roomDetails.roomId });
      setStart(true);
    } else {
      setError("Friend hasn't joined yet");
    }
  };

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  // Check if current player is quiz creator
  useEffect(() => {
    async function fetchIsCreator() {
      const response = await getIsCreator(roomDetails.roomId);

      setIsCreator(response?.data?.payload?.proceed);
      setCreator(response?.data?.payload?.name);
    }

    fetchIsCreator();
  }, []);
  useEffect(() => {}, []);
  socket.emit(
    'join',
    {
      socketId: socket?.id,
      userId: user._id,
      roomId: roomDetails.roomId,
    },
    async response => {}
  );
  socket.on('connect', data => {});

  socket.on('playerInfo', data => {
    setFriend(data?.player2);
  });

  socket.on('start', () => {
    setStart(true);
  });
  const classes = useStyle();
  return !start ? (
    <div className={classes.container}>
      <Ball width={100} left={'-3.5%'} top="28%" />

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
          <Ball width={25} left={'25%'} top="10%" />
          <img className="img" src={FrontImage} alt="" />
          <Ball width={25} left={'0%'} bottom="0" />
          <Ball width={50} right={'-10%'} bottom="0" />
        </div>
      </div>

      <div className={classes.game}>
        <Ball width={20} left={'3%'} top="50%" />
        <span className="roomCode">Room Code</span>
        <div className="code">
          <span>{roomDetails.roomCode}</span>
          <CopyIcon
            onClick={() => navigator.clipboard.writeText(roomDetails.roomCode)}
          />
        </div>
        <div className={classes.card}>
          <img src={images[selectedCategory?.name]} alt="" />
          <span>{selectedCategory?.name}</span>
        </div>
        <span className="status">
          {isCreator ? (
            !friend ? (
              'Waiting for player 2...'
            ) : (
              <span className={classes.friend}>Player 2 joined</span>
            )
          ) : (
            'Waiting for player 1 to start the quiz...'
          )}
        </span>
        {friend && isCreator && (
          <div className={classes.startButton}>
            <Button onClick={() => switchContent()}>Start</Button>
          </div>
        )}
      </div>
    </div>
  ) : (
    <GAME
      socket={socket}
      isCreator={isCreator}
      userId={user?._id}
      roomId={roomDetails.roomId}
    />
  );
};
/**
 * !start ? (
    <React.Fragment>
      <GameInfo
        friend={isCreator ? (friend ? friend.split(' ')[0] : '') : creator}
        user={user}
        roomDetails={roomDetails}
        isCreator={isCreator}
        roomId={roomDetails.roomId}
        switchContent={switchContent}
        category={selectedCategory}
      />
      {!!error && <ErrorBox>{error}</ErrorBox>}
    </React.Fragment>
  ) : (
    <Game
      socket={socket}
      isCreator={isCreator}
      userId={user?.user?._id}
      roomId={roomDetails.roomId}
    />
  );
 */
export default GamePage;
