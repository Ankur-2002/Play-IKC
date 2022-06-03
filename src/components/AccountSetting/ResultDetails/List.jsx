import React from 'react';
import Avatar2 from 'assets/images/AvtarIcon2.svg';
import { useStyle } from '../ResultDetails/AccountResult.style';
const List = () => {
  const classes = useStyle();
  return (
    <div className={classes.list + '  ' + 'list'}>
      <div className={classes.listContainer}>
        <img src={Avatar2} alt="" />
        <span>liu</span>
      </div>
      <span className="type">Science Lv.2</span>
      <span className="points">2019 pts.</span>
    </div>
  );
};

export default List;
