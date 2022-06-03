import Grid from "@mui/material/Grid";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "context/auth/AuthContext";
import WalletPage from "components/Wallet/WalletPage";
import "../MyAccount.css";

function MyAccountStatement() {
  const { user } = useContext(AuthContext);
  // console.log(user);

  // const Item = styled(Paper)(({ theme }) => ({
  // 	...theme.typography.body2,
  // 	padding: theme.spacing(1),
  // 	textAlign: "center",
  // 	color: theme.palette.text.secondary,
  // }));
  return (
    <div>
      <div className="header__wrapper">
        <div className="title__content ">
          <div className="user__info ">
            <img
              className="user__img"
              src="	https://www.quizando.com/assets/defaultusericon.png"
              alt=""
            />
            <h1 className="title">Player Account - {user.user.firstName}</h1>
          </div>
        </div>
      </div>
      <div className="my__account">
        <Grid container spacing={0} className="">
          {/* <Grid xs={2}></Grid> */}
          <Grid xs={3}>
            <div style={{ float: "left", padding: "0 15px" }}>
              <h3 className="player__account__heading">Player Account</h3>

              <ul className="my__account_ul">
                <Link
                  to="/myaccount"
                  style={{ textDecoration: "none", color: "#4d4d4d" }}
                >
                  <li className="my__account_li" tabIndex="0">
                    Account Dashboard
                  </li>
                </Link>
                <Link
                  to="/myaccountstatement"
                  style={{ textDecoration: "none", color: "#4d4d4d" }}
                >
                  <li className="my__account_li">My Account Statement</li>
                </Link>

                {/* <li className="my__account_li">My Withdrawals</li>
                <li className="my__account_li">My Referral Link</li>
                <li className="my__account_li">My Notifications</li>
                <li className="my__account_li">Following</li>
                <li className="my__account_li">Promo Code</li>
                <li className="my__account_li">ID Validation</li>
                <li className="my__account_li">Withdrawal</li> */}
                <li className="my__account_li">Change Password</li>
                {/* <li className="my__account_li">Become a Partner</li> */}
              </ul>
            </div>
          </Grid>

          <Grid xs={8}>
            <WalletPage />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MyAccountStatement;
