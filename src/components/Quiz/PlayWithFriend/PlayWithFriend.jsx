import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { joinQuiz } from 'api/quiz-with-friend';
import { connect } from 'react-redux';
import { useStyle } from './PlayWithFriend.style';
import singlePageBackground from 'assets/images/blackWave.svg';
import singlePageBackgroundBlue from 'assets/images/blueWave.svg';
import SinglePlayerMobile from '../../../assets/images/mobileTwoplayer.svg';
import SinglePlayerMobileLogo from '../../../assets/images/mobileTwoplayerIcon.svg';
import FrontImage from 'assets/images/frontImage.svg';
import UserIcon from 'assets/images/userIcon.svg';
import Plus from 'assets/images/plus.svg';
import Model from 'components/Model/Model';
import Ball from 'common/ball/Ball';
import Badge from 'assets/images/trophy.svg';
const PlayWithFriend = props => {
  const [roomCode, setRoomCode] = useState('');
  const [error, setError] = useState(null);
  const { isUserLoggedIn, user, ikcAmount } = props.Auth;
  //   const roomIdInputRef = useRef(null);
  const history = useHistory();

  // const handleInputChange = event => {
  //   setRoomCode(event.target.value);
  // };

  const handleJoinRoom = async event => {
    event?.preventDefault();
    if (!isUserLoggedIn && user === null) {
      setError('You need to be logged in to do that!!');
      return;
    }
    if (!roomCode) {
      setError('Invalid room id entered!!');
      return;
    }

    const response = await joinQuiz(roomCode);
    const roomId = response.data.payload;

    if (response.data.status === 1 && response.data.payload) {
      history.push({
        pathname: '/play-with-friend/gamepage',
        state: {
          roomDetails: {
            roomCode: roomCode,
            roomId: roomId,
          },
        },
      });
    } else {
      setError('Invalid room id entered!!');
    }
  };

  // Create room on click
  const handleCreateRoom = event => {
    event.preventDefault();
    if (!isUserLoggedIn && user === null) {
      setError('You need to be logged in to create a room.');
      history.push('/login');
      return;
    }

    history.push('/play-with-friend/categories');
  };

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={classes.container}>
        <Ball width={100} left={'-3.5%'} top={'28%'} />
        <Ball width={45} right={'0.5%'} top={'28%'} bottom={0} margin="auto" />

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
                <img src={Badge} width={50} height={50} alt="" />
                Two Player
              </span>
              <span>
                Invite a friend and compete in an extensive competitive quiz
              </span>
            </div>
            <div className={classes.bottom}>
              <div className={classes.card} onClick={() => setOpen(true)}>
                <img src={Plus} alt="" />
                <span>Join Room</span>
              </div>
              <div className={classes.card} onClick={handleCreateRoom}>
                <img src={UserIcon} alt="" />
                <span>Create Room</span>
              </div>

              <Ball width={20} left="-15%" bottom="-20%" margin="auto" />
            </div>
          </div>
          <div className={classes.right}>
            <Ball width={20} top={'10%'} left="30%" />
            <img className="img" src={FrontImage} alt="" />
            <Ball width={20} bottom="5%" left="-15%" />
          </div>
        </div>
      </div>
      {open && (
        <>
          <Model
            header="Join Room"
            description={'Enter code to join room to play together'}
            isContent
            inputValue={roomCode}
            setInputValue={setRoomCode}
            funOnLeftButton={() => setOpen(false)}
            funOnRightButton={e => handleJoinRoom(e)}
            leftButton={'Close'}
            rightButton={'Join now'}
            input
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = props => {
  return {
    Auth: props.Auth,
    dispatch: props.dispatch,
  };
};

export default connect(mapStateToProps)(PlayWithFriend);
/**{joiningRoom ? (
        <RoomInput>
          <input
            value={roomCode}
            onChange={handleInputChange}
            // ref={roomIdInputRef}
          />
          <button onClick={handleJoinRoom}>Join</button>
        </RoomInput>
      ) : null}
      <Button onClick={() => setJoiningRoom(!joiningRoom)}>
        {joiningRoom ? "Hide" : "Join Room"}
      </Button>
      <TomatoButton onClick={handleCreateRoom}>Create Room</TomatoButton>
      {!!error && <ErrorBox>{error}</ErrorBox>} */
