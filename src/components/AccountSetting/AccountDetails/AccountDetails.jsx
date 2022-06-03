import React from 'react';
import { useStyle } from './AccountDetails.style';
import Wallet from 'assets/images/wallet.svg';
import Star from 'assets/images/accountStar.svg';
import PlusIcon from 'assets/images/accountPlus.svg';
import User from 'assets/images/AccountUser.svg';
import Camera from 'assets/images/camera.svg';
const AccountDetails = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div>
          <span className="img">
            <img src={Wallet} alt="" /> 0
          </span>
          <span>Token Balance</span>
        </div>
        <div>
          <span className="img">
            <img src={Star} alt="" /> 256
          </span>
          <span>Winnings Balance</span>
        </div>
        <div className="button">
          <img src={PlusIcon} alt="" />
          <span>Buy Tokens</span>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.header}>
          <span>My Account Details</span>
        </div>

        <div className={classes.details}>
          <div className={classes.left}>
            <div className={classes.input}>
              <div className="label">
                <span>UserId</span>
                <input />
              </div>
              <div className="label">
                <span>UserId</span>
                <input />
              </div>
            </div>
            <div className={classes.input}>
              <div className="label">
                <span>UserId</span>
                <input />
              </div>
              <div className="label">
                <span>UserId</span>
                <input />
              </div>
            </div>

            <div className={classes.input}>
              <div className={classes.box}>
                <input />
                <input />
              </div>
              <div className="label">
                <span>UserId</span>
                <input />
              </div>
            </div>

            <div className={classes.check}>
              <div>
                <span>Receive Newsletter</span>
                <label class="checkboxCheck">
                  <div class="toggle">
                    <input
                      class="toggle-state"
                      type="checkbox"
                      name="check"
                      value="check"
                    />
                    <div class="indicator"></div>
                  </div>
                </label>
              </div>
              <div>
                <span>Receive Newsletter</span>
                <label class="checkboxCheck">
                  <div class="toggle">
                    <input
                      class="toggle-state"
                      type="checkbox"
                      name="check"
                      value="check"
                    />
                    <div class="indicator"></div>
                  </div>
                </label>
              </div>
              <div>
                <span>Receive Newsletter</span>
                <label class="checkboxCheck">
                  <div class="toggle">
                    <input
                      class="toggle-state"
                      type="checkbox"
                      name="check"
                      value="check"
                    />
                    <div class="indicator"></div>
                  </div>
                </label>
              </div>
              <div>
                <span>Receive Newsletter</span>
                <label class="checkboxCheck">
                  <div class="toggle">
                    <input
                      class="toggle-state"
                      type="checkbox"
                      name="check"
                      value="check"
                    />
                    <div class="indicator"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <img src={User} alt="" />
            <span>
              <img
                src={Camera}
                style={{
                  width: '20px',
                  height: '20px',
                }}
                alt=""
              />{' '}
              Upload a photo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
