import React from "react";
import "./header.scss";
import Head from "./Head";
import Week from "./Week";

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

export default Header;
