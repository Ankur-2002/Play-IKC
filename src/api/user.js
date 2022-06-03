import axios from "./axios";

// Add mobile number
export const addMobileNumber = (number) => {
  return () =>
    axios
      .post(`/user/addPhoneNumber?phone=${number}`)
      .then((response) => response.data)
      .catch((error) => error && error.response && error.response.data);
};

// Submit the otp
export const submitOTP = (userID, otp) => async () => {
  return axios
    .get(`/user/${userID}/verify-otp?otp=${otp}`)
    .then((response) => response)
    .catch((error) => error && error.response && error.response.data);
};
