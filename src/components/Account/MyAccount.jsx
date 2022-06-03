import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'context/auth/AuthContext';
import './MyAccount.css';
import { connect } from 'react-redux';

function MyAccount(porps) {
  const { user } = porps.Auth;
  console.log(porps);
  // const { user } = useContext(AuthContext);
  // console.log(user)
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
            <h1 className="title">Player Account - {user?.username}</h1>
          </div>
        </div>
      </div>
      <div className="my__account">
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <div style={{ float: 'left', padding: '0 15px' }}>
              <h3 className="player__account__heading">Player Account</h3>

              <ul className="my__account_ul">
                <li className="my__account_li" tabIndex="0">
                  Account Dashboard
                </li>
                <li className="my__account_li">
                  <Link
                    to="/myaccountstatement"
                    style={{ textDecoration: 'none', color: '#4d4d4d' }}
                  >
                    My Account Statement
                  </Link>
                </li>

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

          <Grid item xs={8}>
            <h3 className="player__account__heading">
              Player Account Dashboard
            </h3>
            <Stack direction="row" spacing={2}>
              <div className="funds__section">
                <div>
                  <div className="quiz__balance" xs={2}>
                    <p className="amount">
                      <span className="token__icon">
                        <MonetizationOnIcon fontSize="large" />
                      </span>
                      0
                    </p>
                    <p
                      style={{
                        fontSize: '1.4em',
                        fontFamily: 'Titillium Web',
                      }}
                    >
                      Token Balance
                    </p>
                  </div>
                  <div className="quiz__balance" xs={2}>
                    <p className="amount">
                      <span className="token__icon">
                        <AccountBalanceWalletIcon
                          fontSize="large"
                          style={{ color: 'var(--red)' }}
                        />
                      </span>
                      €0
                    </p>
                    <p className="bottom__title__token"> Winnings Balance</p>
                  </div>
                </div>
                <div>
                  <button className="buy__token__button">+ Buy Tokens</button>
                </div>
              </div>
            </Stack>
            <div style={{ backgroundColor: '#eee', padding: '15px' }}>
              <h3 className="player__account__heading">My Account Details</h3>
              <hr />
              <Stack direction="row">
                <div style={{ width: '25%' }}>
                  <p className="player__account__p">User Id: </p>
                  <p className="player__account__p">First Name: </p>
                  <p className="player__account__p">Last Name: </p>
                  <p className="player__account__p">Display Name: </p>
                  <p className="player__account__p">Gender: </p>

                  <p className="player__account__p">Id Verified:</p>
                  <p className="player__account__p">Country:</p>
                  <p className="player__account__p">Date of Birth:</p>
                  <p className="player__account__p">Receive Newsletter:</p>
                  <p className="player__account__p">Receive Quiz Reminders:</p>
                  <p className="player__account__p">Show real name:</p>
                  <p className="player__account__p">Show country of origin:</p>
                </div>

                <div style={{ width: '25%' }}>
                  <p className="player__account__p__detail">{user?._id} </p>
                  <p className="player__account__p__detail">
                    {' '}
                    {user?.username}{' '}
                  </p>
                  <p className="player__account__p__detail">
                    {user?.username}{' '}
                  </p>
                  <p className="player__account__p__detail">{user?.username}</p>
                  <p className="player__account__p__detail">{user?.gender}</p>
                  <p className="player__account__p__detail">
                    {user?.isVerified ? 'Yes' : 'No'}
                  </p>
                  <p className="player__account__p__detail">{user?.Fi}</p>
                  <p className="player__account__p__detail">{}</p>
                  <p className="player__account__p__detail">{}</p>
                  <p className="player__account__p__detail">{}</p>
                  <p className="player__account__p__detail">{}</p>
                </div>
                <div className="outer__account__picture">
                  <div className="account__picture">
                    <div className="account__picture__container">
                      <img
                        className="picture__account"
                        alt=""
                        src="https://www.quizando.com/assets/defaultusericon.png"
                      ></img>
                    </div>
                    <p className="botton_header_profile">
                      <span className="camera__icon">
                        <CameraEnhanceIcon />
                      </span>
                      <span>Upload A photo</span>
                    </p>
                    <div className="username__profile"> UserName</div>
                  </div>
                </div>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(MyAccount);
