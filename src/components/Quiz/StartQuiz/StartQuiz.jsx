import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { Spinner } from "assets";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineWarning, MdPlayCircleFilled } from "react-icons/md";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import { getQuizDetails, getStartQuiz, registerQuiz } from "api/quiz";
import CustomModal from "common/CustomModal";
import PlayQuizButton from "common/PlayQuizButton";
import PrizeSplitTable from "common/PrizeSplitTable";
import ShareQuizSocialButtons from "common/ShareQuizSocialButtons";
import { AuthContext } from "context/auth/AuthContext";
import LeaderBoard from "components/LeaderBoard";
import MyVerticallyCenteredModal from "../private/otpverification/OtpModal";
import "./StartQuiz.css";
import KLogoRed from "assets/images/k_logo_red.png";
import KLogoCrown from "assets/images/k_play_crown.png";
import KLogoWhite from "assets/images/k_logo_white.png";
import { connect } from "react-redux";

const getPlayButton = (isFreebie, liveQuiz, quizId, cb) => {
  if (liveQuiz)
    return (
      <Link to={`/playQuiz/live/${quizId}`} style={{ textDecoration: "none" }}>
        <PlayQuizButton />
      </Link>
    );

  if (isFreebie)
    return (
      <Link to={`/playQuiz/free/${quizId}`} style={{ textDecoration: "none" }}>
        <PlayQuizButton />
      </Link>
    );

  return <PlayQuizButton onClick={cb} />;
};

function StartQuiz({ getQuizDetails, getStartQuiz, registerQuiz }) {
  const [quizData, setQuizData] = useState(null);
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  // for not registered modal
  const [message, setMessage] = useState(null);

  // for registration modal
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const handleOpeningOfRegisterModal = () => setOpenRegisterModal(true);
  const handleClosingRegisterModal = () => setOpenRegisterModal(false);

  // for prize split modal
  const [openPrizeSplitModal, setOpenPrizeSplitModal] = useState(false);
  const handleOpeningOfPrizeSplitModal = () => setOpenPrizeSplitModal(true);
  const handleClosingPrizeSplitModal = () => setOpenPrizeSplitModal(false);

  // for share quiz modal
  const [openShareQuizModal, setOpenShareQuizModal] = useState(false);
  const handleOpeningOfShareQuizModal = () => setOpenShareQuizModal(true);
  const handleClosingShareQuizModal = () => setOpenShareQuizModal(false);

  const history = useHistory();
  let { quizId } = useParams();

  useEffect(() => {
    getQuizDetails(quizId)
      .then((data) => setQuizData(data))
      .catch((error) => console.log(error));
  }, [quizId, getQuizDetails]);

  const handleClose = () => {
    setOpen(false);
  };

  console.log(quizData);

  const handlePlayQuiz = async () => {
    try {
      const res = await getStartQuiz(quizId);
      console.log(res);
      if (user && res.statusCode === 201) {
        history.push(`/playQuiz/classic/confirm/${quizId}`);
      } else if (
        user &&
        res.statusCode === 400 &&
        res.message === "LIMITEXCEEDED"
      ) {
        history.push(`/${quizId}/limitexceeded`);
      } else if (res.statusCode === 400 && res.message === "NOTREGISTERED") {
        // if user is not registered open registration modal
        console.log("Open Modal");
        // setMessage(null);
        handleOpeningOfRegisterModal();
      } else if (res.statusCode === 400 && res.message === "NOTVERIFIED") {
        history.push({ pathname: "/otp", state: { quizId: quizId } });
      } else if (
        res.statusCode === 400 &&
        res.message === "ALREADYREGISTERED"
      ) {
        history.push(`/playQuiz/classic/confirm/${quizId}`);
      } else {
        history.push(`/playQuiz/classic/confirm/${quizId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SendRegisterRequest = async () => {
    try {
      const res = await registerQuiz(quizId);
      if (res.message === "MISSEDREGISTRATIONDATE") {
        setMessage("Missed Registration Date");
        return;
      } else if (res.message === "BALANCENOTENOUGH") {
        setMessage("Not enough IKC");
        return;
      }
      setMessage(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return quizData ? (
    <div className="start__container">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* <div className="outer_game_div"></div> */}
      <div
        className="game__info"
        style={{
          backgroundColor: "#025955",
        }}
      >
        <div className="current__prize">
          <h5>Current Prize</h5>
          <h1 className="current__prize__price">
            <img
              src={KLogoWhite}
              alt="K"
              style={{ width: "50px", marginTop: "-5px" }}
            />
            {quizData.maxPrize}
          </h1>
        </div>
        <h2 className="header_bought">Brought to you by...</h2>

        <div className="">
          <div className="image-outer">
            <div className="quizando__logo__img">
              <img className="k__play__logo" src={KLogoCrown} alt="K Play" />
            </div>

            <div className="quizando__text">
              <span>PlayIKC</span>
            </div>
          </div>
        </div>

        {getPlayButton(
          quizData.isFreebie,
          quizData.liveQuiz,
          quizId,
          handlePlayQuiz
        )}
      </div>
      <div className="final__entry">
        <h2 className="final__entry__title">
          Final Entry:
          <span style={{ color: "var(--red)", fontFamily: "Paytone One" }}>
            60m 00s
          </span>
        </h2>
        <hr style={{ width: "100%", margin: " 2% auto" }} />
        <div className="description__btns">
          <h4>Entry Fee: {quizData.poolAmount} tokens</h4>
          <h4>
            Prize Pool:
            <img src={KLogoRed} alt="K" style={{ width: "20px" }} />
            {quizData.maxPrize}
          </h4>
          <h4>Questions: {quizData.metadata.maxQuestions}</h4>
          <h4>Global Plays: 225</h4>
          <h4>Max Plays per Player: {quizData.numberOfTimes}</h4>
          <h4>Free Plays: 7</h4>
        </div>
        <h3 className="game__text" style={{ color: "black" }}>
          Lara Croft, Solid Snake, Pacman, and more are in this 10 question quiz
          on video game characters. The top 10 players split the prize pool.
        </h3>
        <div className="final__entry__btns">
          <button onClick={handleOpeningOfPrizeSplitModal}>
            View Prize Split
          </button>
          <button onClick={handleOpeningOfShareQuizModal}>Share quiz</button>
          <button>
            <MdPlayCircleFilled className="icon_button_play_quiz_small" />
            Play Quiz!
          </button>
        </div>
      </div>
      {window.location.href.includes("live") &&
      window.location.href.includes("free") ? null : (
        <>
          <LeaderBoard id={quizId} />

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Your result of the quiz is  "}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <p>Correct Answered : </p>
                <p>Total Question : </p>
                <p>Your Score : </p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}

      {/* modal that will open when user is not registered for classic quiz */}

      <CustomModal
        title={!message ? "Not Registered" : message}
        open={openRegisterModal}
        onClose={handleClosingRegisterModal}
        body={
          <>
            {!message && (
              <div className="register__info__section">
                {!quizData.isFreebie && (
                  <div className="register__info">
                    <span className="register__info-title">Assured Prize</span>
                    <span className="register__info-value">
                      {quizData.maxPrize}&nbsp;IKC
                    </span>
                  </div>
                )}
                <div className="register__info">
                  <span className="register__info-title">
                    Players Registered
                  </span>
                  <span className="register__info-value">
                    {quizData.totalRegistrations}
                  </span>
                </div>
              </div>
            )}
            {message === "Not enough IKC" && (
              <div className="buy__tokens">
                <button className="continueButtonFinal">
                  <Link
                    style={{
                      color: "var(--light)",
                      fontFamily: "Paytone One",
                      textDecoration: "none",
                    }}
                    to={"/myaccountstatement"}
                  >
                    Buy Tokens
                  </Link>
                </button>
              </div>
            )}
            {message === "Missed Registration Date" && (
              <div className="register__info">
                <div className="register__info-title">
                  Sorry, the registrations for this quiz have ended.
                </div>
              </div>
            )}

            {/* {!quizData.isFreebie && (
              <div className="register__info">
                <span className="card__info-title">Tokens</span>
                <span className="card__info-value-btn">
                  {quizData.poolAmount}&nbsp;IKC
                </span>
              </div>
            )} */}

            <Box display="flex" justifyContent="center">
              {!message ? (
                <button
                  className="continueButtonFinal"
                  onClick={SendRegisterRequest}
                >
                  Register
                  {!quizData.isFreebie && (
                    <div className="register__info">
                      {/* <span className="card__info-title">Tokens</span> */}
                      <span className="register__info-value-btn">
                        {quizData.poolAmount}&nbsp;IKC
                      </span>
                    </div>
                  )}
                </button>
              ) : (
                <button className="continueButtonFinal">
                  <Link
                    style={{
                      color: "var(--light)",
                      fontFamily: "Paytone One",
                      textDecoration: "none",
                    }}
                    to={`/quiz/fetch/classic`}
                  >
                    Go Back
                  </Link>
                </button>
              )}
            </Box>
            {!message ? (
              <div className="register__terms">
                <Typography variant="h6" component="p" align="center">
                  By clicking Continue you agree to PlayIKC's &nbsp;
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/terms-and-conditions"
                  >
                    Terms and Conditions
                  </Link>
                  .
                </Typography>
              </div>
            ) : (
              <div />
            )}
          </>
        }
        footer={
          <div className="registerfooter">
            <Typography variant="h6" component="p">
              <MdOutlineWarning size="2rem" />
              &nbsp; &nbsp;
              <strong>WARNING!</strong>&nbsp; To ensure optimum performance of
              the quiz platform,&nbsp;
              <strong>DO NOT</strong>&nbsp; have any other window tabs or
              software running in background.
            </Typography>
          </div>
        }
      />

      {/* modal that will open on view prize split button */}

      <CustomModal
        title="Prize Split Summary"
        open={openPrizeSplitModal}
        onClose={handleClosingPrizeSplitModal}
        body={<PrizeSplitTable />}
      />

      {/* modal that will open on clicking share quiz button */}
      <CustomModal
        open={openShareQuizModal}
        onClose={handleClosingShareQuizModal}
        title="Share quiz!"
        body={
          <>
            <Typography
              sx={{
                color: "#5e5e5e",
              }}
              variant="h6"
              align="center"
            >
              Challenge your friends to play this quiz, and see if they can beat
              your best score.
            </Typography>
            <ShareQuizSocialButtons />
          </>
        }
      />
    </div>
  ) : (
    <Spinner />
  );
}

const mapDispatchToProps = {
  getQuizDetails,
  getStartQuiz,
  registerQuiz,
};

export default connect(null, mapDispatchToProps)(StartQuiz);
