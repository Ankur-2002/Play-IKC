import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import User from '../../assets/images/user.svg';
import Drawer from '../../assets/images/mobileDrawer.svg';
import LOGO from '../../assets/images/logo.png';
import { connect } from 'react-redux';
import { LogOut } from 'store/actions/authAction';
import { useStyle } from './Navbar.style';
import Links from './Links';
import MobileDrawer from '../../common/MobileDrawer/MobileDrawer';
import { useMediaQuery } from 'react-responsive';

function Navbar(props) {
  const classes = useStyle(props);
  const [open, setOpen] = useState(false);
  const { isUserLoggedIn, user, token, ikcAmount } = props.Auth;
  const history = useHistory();

  const handleLogOut = () => {
    props.dispatch(LogOut());
    history.push('/login');
  };
  //<img src={LOGO} alt="" className="company_logo" />
  const [activeLink, setActiveLink] = useState(0);
  const isLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  });
  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.image}>
            <img src={LOGO} alt="" className="company_logo" width={60} />
          </div>
          <div className={classes.links}>
            <Links
              to="/"
              active={activeLink === 0}
              onClick={() => setActiveLink(0)}
            >
              Home
            </Links>
            <Links
              to="/quiz/category"
              active={activeLink === 1}
              onClick={() => setActiveLink(1)}
            >
              Single player
            </Links>
            <Links
              to="/play-with-friend"
              active={activeLink === 2}
              onClick={() => setActiveLink(2)}
            >
              {' '}
              Two player
            </Links>
            <Links
              to="/multiplayer"
              active={activeLink === 3}
              onClick={() => setActiveLink(3)}
            >
              Multiplayer
            </Links>
            <Links
              to="/howtoplay"
              active={activeLink === 4}
              onClick={() => setActiveLink(4)}
            >
              How To Play
            </Links>
          </div>
          <div className={classes.profile}>
            <img
              width={30}
              height={30}
              src={isLaptop ? User : Drawer}
              alt="user"
              onClick={() => {
                if (!isLaptop) {
                  setOpen(!open);
                }
              }}
            />
          </div>
        </div>
      </div>
      <MobileDrawer
        open={open}
        setOpen={setOpen}
        login={isUserLoggedIn}
        dispatch={props.dispatch}
        history={history}
      />
    </>
  );
}
/**      <div className="navbar_content">
        <div className="navbar_right">
          <div className="navbar_right_content">
            <h3 className="navbar_link">
              <Link to="/">Home</Link>
            </h3>

            <h3 className="navbar_link">
              {!isUserLoggedIn ? (
                <>
                  <Link to="/login">Login</Link>
                </>
              ) : (
                <>
                  <span className="logout" onClick={handleLogOut}>
                    Logout
                  </span>
                </>
              )}
            </h3>

            <Link to="/" className="coin_button">
              <img src={COINS} className="coin_img" alt="" />
              <div className="coin_text">230</div>
            </Link>
          </div>
          <div className="mobile_nav_button">
            <button onClick={() => setOpen(!open)} className="menu_icon">
              {open ? (
                <img src={KLogoRed} alt="" />
              ) : (
                <img src={KLogoWhite} alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="mobile_nav">
          <div className="mobile_nav_content">
            <Link to="/">
              <h3> Customer Support </h3>
            </Link>
            <Link to="/">
              <h3> Terms {' & '} Conditions </h3>
            </Link>
            <Link to="/">
              <h3> Learn more </h3>
            </Link>
          </div>
        </div>
      ) : null} */
const mapDispatchToProps = dispatch => {
  return dispatch;
};
export default connect(mapDispatchToProps)(Navbar);
