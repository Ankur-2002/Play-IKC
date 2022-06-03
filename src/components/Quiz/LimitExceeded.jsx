import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function LimitExceeded() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div className="blurBackground">
      <div className="registerContainer">
        <div className="registerWrapper">
          <div className="cancelRegister" onClick={goToPreviousPath}>
            <ClearRoundedIcon fontSize="large" />
          </div>
          <div className="header">Maximum Limit Exceeded</div>
          <div className="body">
            <h4>You have exceeded your maximum limit.</h4>
            <br />
            {/* <h4>
              By clicking Continue, you agree to PlayIKC's{" "}
              <a
                style={{
                  textDecoration: "none",
                }}
                href="/"
              >
                Terms and Conditions
              </a>
              .
            </h4> */}
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

            {/* <button className="continueButtonFinal">
              <Link
                style={{
                  color: "var(--light)",
                  fontFamily: "Paytone One",
                  textDecoration: "none",
                }}
                to={`/playQuiz/classic/${quizId}`}
              >
                Continue
              </Link>
            </button> */}
          </div>

          <div className="registerfooter">
            <WarningRoundedIcon fontSize="medium" />
            <h4>
              <b>
                <span>WARNING!</span>{" "}
              </b>
              To ensure optimum performance of the quiz platform,{" "}
              <b>
                <span className="bold">DO NOT</span>{" "}
              </b>{" "}
              have any other window tabs or software running in background.{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimitExceeded;
