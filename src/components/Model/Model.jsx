import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useStyle } from './Model.style';
import CopyIcon from '@mui/icons-material/CopyAllOutlined';
const Model = ({
  headerDiscription,
  header,
  description,
  input,
  setInputValue,
  funOnLeftButton,
  funOnRightButton,
  leftButton,
  rightButton,
  inputValue,
  isContent,
}) => {
  const classes = useStyle();
  useEffect(() => {
    const event = document.getElementById('modal');
    event.addEventListener('click', () => {
      funOnLeftButton();
    });
  }, []);
  return (
    <>
      <div className={classes.backdrop} id="modal"></div>
      <div className={classes.modelContent}>
        <span className="Mtitle">
          {header}
          <div className="hd">{headerDiscription}</div>
        </span>

        <span>{description}</span>
        {isContent && (
          <div className={classes.token}>
            <div className="content">
              {input ? (
                <input
                  id=""
                  label=""
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                />
              ) : (
                <>
                  <span>{inputValue}</span>
                  <CopyIcon
                    color="primary"
                    size="large"
                    onClick={() => {
                      navigator.clipboard.writeText(inputValue);
                    }}
                  />
                </>
              )}
            </div>
          </div>
        )}
        <div className={classes.buttonContainer}>
          <Button onClick={() => funOnLeftButton()}>{leftButton}</Button>
          <Button onClick={() => funOnRightButton()}>{rightButton}</Button>
        </div>
      </div>
    </>
  );
};

export default Model;
