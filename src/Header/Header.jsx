import React from "react";
import "./header.scss";
import Head from "./Head";
import Week from "./Week";
import PropTypes from 'prop-types';
const Header = ({
  day,
  showPopup,
  handleNextWeek,
  handlePrevWeek,
  handleCuurentDay,
  currentMounth,
}) => {
  return (
    <header className="header">
      <Head
        showPopup={showPopup}
        getCurrentDay={handleCuurentDay}
        getPrevWeek={handlePrevWeek}
        getNextWeek={handleNextWeek}
        currentMounth={currentMounth}
      />
      <Week day={day} />
    </header>
  );
};
Header.propTypes = {
  day: PropTypes.number,
  showPopup: PropTypes.func,
  getCurrentDay: PropTypes.func,
  getPrevWeek: PropTypes.func,
  getNextWeek: PropTypes.func,
  currentMounth: PropTypes.string
  
};

export default Header;
