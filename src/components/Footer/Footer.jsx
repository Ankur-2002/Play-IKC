import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LOGO from '../../assets/images/logo.png';
import { useStyle } from './Footer.style';
import Cartoon from '../../assets/images/cartoon.svg';
import Game from '../../assets/images/game.svg';
export default function Footer(props) {
  const classes = useStyle(props);
  return (
    <div className={classes.wrapper}>
      <div className={classes.top}>
        <img src={Game} alt="" />
        <img src={Cartoon} alt="" />
      </div>
      <div className={classes.bottom}>
        <div className={classes.details}>
          <div>
            <span>Customer Support</span>
            <span>Terms & Conditions</span>
            <span>Learn more</span>
          </div>
          <div>
            <span>Connect with us</span>
            <div className={classes.icons}></div>
          </div>
        </div>
        <div className={classes.end}>
          <span>IKC Digital Service LLP</span>
          <img src={LOGO} alt="" width={100} />
        </div>
      </div>
    </div>
  );
}

/**
 * <div className="footer_cont">
        <div className="contact_section">
          <h2>Connect with us</h2>
          <div className="social_icons">
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
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
        <div className="company_section">
          <h2>IKC Digital Service LLP</h2>
          <img src={LOGO} className="company_logo" />
        </div>
      </div>
 */
