import React from "react";
import Column from "./Column";
import Multicolumns from "./Multicolumns";
import "./main.scss";

const Main = ({ day }) => {
  return (
    <section className="main">
      <Column />
      <Multicolumns day={day} />
    </section>
  );
};

export default Main;
