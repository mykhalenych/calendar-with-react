import React from "react";
import Column from "./Column";
import Multicolumns from "./Multicolumns";
import "./main.scss";

const Main = ({ day, events, showPopup, handleDeleteTask }) => {
  return (
    <section className="main">
      <Column />
      <Multicolumns
        day={day}
        events={events}
        showPopup={showPopup}
        handleDeleteTask={handleDeleteTask}
      />
      
    </section>
  );
};

export default Main;
