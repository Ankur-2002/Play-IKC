/* eslint-disable no-unused-vars */
import { Button, createTheme, TextField } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import Middle from '../../assets/images/Middle.svg';
import Left from '../../assets/images/left.svg';
import Right from '../../assets/images/rightIcon.svg';
import Top from '../../assets/images/top.svg';
import FrontWave from '../../assets/images/blackWave.svg';
import BackWave from '../../assets/images/blueWave.svg';
import MobileBackground from '../../assets/images/mobileIcon.svg';
import MobileRect from '../../assets/images/mobileRect.svg';
import { useHistory } from 'react-router';
import {
  sentOtp,
  submitOtp as submitOtpFunction,
} from '../../store/actions/authAction';

// import { set } from "lodash";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { useStyle } from './Login.style';
import { useMediaQuery } from 'react-responsive';
import Ball from 'common/ball/Ball';
const theme = createTheme({
  palette: {
    facebook: {
      main: 'var(--darkblue)',
    },
    google: {
      main: 'var(--light)',
    },
    twitter: {
      main: 'var(--sblue)',
    },
    ASKGAMBLERS: {
      main: 'var(--sred)',
    },
    button_color: {
      main: 'var(--ored)',
    },
  },
});

function Login(props) {
  const { isUserLoggedIn } = props.Auth;
  const [PhoneNumber, setNumber] = useState(0);
  const [otp, setOtp] = useState(0);
  const [userId, setUserId] = useState(0);
  const [phoneField, setPhoneField] = useState(false);
  const num1 = useRef();
  const num2 = useRef();
  const num3 = useRef();
  const num4 = useRef();
  const history = useHistory();
  const classes = useStyle({
    phone: otp ? false : true,
    // submit: otp ? true : false,
  });
  useEffect(() => {
    if (isUserLoggedIn) {
      history.push(window.location.pathname);
    }
  }, [isUserLoggedIn, history]);

  const OTPsuccess = () =>
    toast.success('OTP Send', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const OTPfail = () => toast('Wrong OTP!');
  const WrongNumber = () =>
    toast.error('Please Enter Correct Mobile Number', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const LoginSuccess = () =>
    toast.success('Login Success', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function userCallback(userID, OTPstatus) {
    // console.log("CALLBACKCALLED", userID);
    OTPsuccess();
    setUserId(userID);
    setOtp(true);
    // console.log(userId);
  }

  function loginCallback() {
    LoginSuccess();
  }

  // OTP REQUEST
  const handlePhone = e => {
    if (PhoneNumber.length !== 10) {
      WrongNumber();
      return 1;
    }
    props.dispatch(
      sentOtp({
        phoneNumber: PhoneNumber,
        userCallback,
      })
    );
  };

  // VERIFY OTP
  const handleLogin = e => {
    props.dispatch(submitOtpFunction(userId, otp, loginCallback, OTPfail));
  };
  // setNumber(e.target.value);

  /**
   *   {otp ? (
            <>
              <TextField
                onChange={e => setOtp(e.target.value ? e.target.value : ' ')}
                id="outlined-basic"
                label="OTP"
                type="number"
                maxLength="4"
                size="large"
              />
            </>
          ) : (
            ''
          )}
   */
  const isLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  });
  const changeInput = (current, next) => {
    // console.log(num2.current.value);
    if (next === null) {
      setOtp(
        num1.current.value +
          num2.current.value +
          num3.current.value +
          current.target.value
      );
    } else if (current.keyCode === 8) {
    } else if (current.target.value) {
      document.getElementById(next).focus();
    }
  };

  return (
    <div className={classes.container}>
      <Ball top={'25%'} width={100} left={'-4%'} />
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
        <div className={classes.fields}>
          <div className={classes.header}>
            <span>Welcome</span>
            <span>Login with play IKC to play and win rewards</span>
          </div>
          {otp ? (
            <div
              className={classes.bottom + ' ' + (otp ? 'secondContainer' : '')}
            >
              <span className={classes.otp}>
                {isLaptop ? 'OTP' : 'Enter OTP'}
              </span>
              <div className={classes.optContainer}>
                <TextField
                  onChange={e => changeInput(e, '2')}
                  inputProps={{ maxLength: 1, ref: num1 }}
                  id="1"
                ></TextField>
                <TextField
                  onChange={e => changeInput(e, '3')}
                  id="2"
                  inputProps={{ maxLength: 1, ref: num2 }}
                ></TextField>
                <TextField
                  onChange={e => changeInput(e, '4')}
                  id="3"
                  inputProps={{ maxLength: 1, ref: num3 }}
                ></TextField>
                <TextField
                  id="4"
                  onChange={e => changeInput(e, null)}
                  inputProps={{ maxLength: 1, ref: num4 }}
                ></TextField>
              </div>
              <Button onClick={handleLogin}>Submit</Button>
            </div>
          ) : null}
          <div className={classes.bottom + ' ' + 'button'}>
            <TextField
              disableUnderline={false}
              placeholder="Enter Your Number"
              onChange={e => setNumber(e.target.value)}
            ></TextField>
            <Button onClick={handlePhone}>
              {otp ? 'Resend OTP' : 'Send OTP'}
            </Button>
            <Ball left={0} width={30} bottom={'-15%'} />
          </div>
        </div>
        {isLaptop && (
          <div className={classes.imageContainer}>
            <div className="top">
              <img src={Top} alt="top" />
            </div>
            <div className="mid">
              <Ball left={'30%'} width={20} top={'-10%'} />
              <img src={Middle} className="mid" alt="middle" />
            </div>
            <div className="left">
              <img src={Left} alt="middle" />
              <Ball left={'-30%'} width={20} bottom={'-15%'} />
            </div>
            <div className="right">
              <img src={Right} alt="middle" />
              <Ball right={'-50%'} width={50} top={'50%'} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const mapStateToProps = state => {
  return state;
};

export const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
