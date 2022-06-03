import { USER_SERVER } from 'config';
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '.';

export const LogOut = () => {
  return async dispath => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('ikcAmount');
    dispath({
      type: LOGOUT_SUCCESS,
    });
  };
};
export const sentOtp = ({ phoneNumber, userCallback }) => {
  return async dispatch => {
    try {
      const body = {
        phone: phoneNumber,
      };

      const res = await fetch(`https://backend.playikc.in/login/phone`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
        credentials: 'same-origin',
      }).then(res => res.json());
      console.log(res);
      userCallback(res.payload._id);
    } catch (error) {
      alert("Login credentials doesn't match");
      dispatch({ type: LOGIN_FAILURE, payload: error });
      console.log(error);
    }
  };
};

export const submitOtp = (userID, OTP, loginCallback, OTPfail) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `${USER_SERVER}/user/${userID}/verify-otp?otp=${OTP}`
      )
        .then(response => {
          if (response.status === 400) throw new Error('something went wrong');
          return response.json();
        })
        .then(res => {
          localStorage.setItem('user', JSON.stringify(res?.payload?.user));
          localStorage.setItem('token', JSON.stringify(res?.payload?.token));
          localStorage.setItem('isUserLoggedIn', true);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              user: res.payload?.user,
              token: res.payload?.token,
            },
          });
          loginCallback();
        });
    } catch (error) {
      console.log(error, 'Eoor');
      OTPfail("OTP doesn't work properly");
    }
  };
};
