import React from "react";
import Column from "./Column";
import Multicolumns from "./Multicolumns";
import "./main.scss";
import PropTypes from 'prop-types';


const Main = ({ day, events, showPopup, handleDeleteTask, closePopup, showEventData }) => {
  return (
    <section className="main">
      <Column />
      <Multicolumns
        day={day}
        events={events}
        showPopup={showPopup}
        handleDeleteTask={handleDeleteTask}
        closePopup={closePopup}
        showEventData={showEventData}

      />
      
    </section>
  );
};
Main.propTypes = {
  day: PropTypes.number,
  showPopup: PropTypes.func,
  events: PropTypes.array,
  handleDeleteTask: PropTypes.func,
  closePopup: PropTypes.func,
  showEventData: PropTypes.func
  
};
export default Main;
