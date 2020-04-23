import React from "react";
import moment from "moment";
import {arrFill} from "../gate-ways/func";

const Event = ({ idHour, events, showEventData }) => {


  let idForHour = idHour;
  return arrFill(0, 23).map((item) => {
    const hour = `0${item}`.slice(-2);
    const id = `${idForHour}T${hour}`;
    let eventFound = events.find((event) => {
      return event.dataStart.slice(0, -3) === id;
    });

    if (eventFound) {
     
      let startHour = moment(eventFound.dataStart, "YYYY-MM-DD hh:mm").format(
        "HH"
      );
      let endHour = moment(eventFound.dataEnd, "YYYY-MM-DD hh:mm").format("HH");
      let startMinute = moment(eventFound.dataStart, "YYYY-MM-DD hh:mm").format(
        "mm"
      );
      let endMinute = moment(eventFound.dataEnd, "YYYY-MM-DD hh:mm").format(
        "mm"
      );
      let heightEvent =
        +endHour * 60 - +startHour * 60 + (+endMinute - +startMinute);
      let bgColor = eventFound.color;

      if (eventFound.color === "") {
        return (bgColor = `#2979ff`);
      }

      return (
        <div
          className="event"
          style={{
            height: `${heightEvent}px`,
            backgroundColor: `${bgColor}`,
          }}
          onClick={(event) => showEventData(event, eventFound)}
          onFocus={(event) => showEventData(event, eventFound)}
        >
          <span>{eventFound.title}</span>
          <span>
            {`${startHour}:${startMinute}`} - {`${endHour}:${endMinute}`}
          </span>
          <span>{eventFound.description}</span>
        </div>
      );
    }
  });
};

export default Event;
