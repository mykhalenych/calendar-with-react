import React from "react";
import Column from "./Column";
import Multicolumns from "./Multicolumns";
import "./main.scss";

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

export default Main;
