import { USER_SERVER } from 'config';

export const loginCall = async (phoneNumber, userCallback, dispatch) => {
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
    })
      .then(response => response.json())
      .then(response => {
        userCallback(response.payload._id);
      });
  } catch (error) {
    alert("Login credentials doesn't match");
    dispatch({ type: 'LOGIN_FAILURE', payload: error });
    console.log(error);
  }
};

export const submitOtp = async (
  userID,
  OTP,
  loginCallback,
  dispatch,
  realDispatch
) => {
  try {
    const res = await fetch(
      `${USER_SERVER}/user/${userID}/verify-otp?otp=${OTP}`
    ).then(response => {
      console.log(response, 'user Fetch');
      localStorage.setItem('token', response.headers.get('X-Auth'));
      return response.json();
    });
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        user: res.payload,
        ikcAmount: res.payload,
      },
    });
    if (realDispatch) {
      realDispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: res.payload,
          ikcAmount: res.payload,
        },
      });
    }
    loginCallback(true);
  } catch (error) {
    loginCallback(false);
    // alert("Login credentials doesn't match");
    dispatch({ type: 'LOGIN_FAILURE', payload: error });
    console.log('********INSIDE LOGIN CALL *******CATCH BLOCK*******');
    console.log(error);
  }
  // return axios
  //   .post("/signup", data)
  //   .then((response) => response)
  //   .catch((error) => error && error.response && error.response.data);
};
