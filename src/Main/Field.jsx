import React from "react";
import moment from "moment";
import PopupDelete from "./PopupDelete";
import { deleteEvent } from "../Gateways/Gateways";

// const Field = ({ idHour, events, showPopup, handleDeleteTask }) => {
//   const arr = (from, to) => {
//     const result = [];

//     for (let i = from; i <= to; i++) {
//       result.push(i);
//     }
//     return result;
//   };

//   let idForHour = idHour;
//   return arr(0, 23).map((item) => {
//     const hour = `0${item}`.slice(-2);
//     const id = `${idForHour}T${hour}`;
//     let dateMy = `${idForHour}T${item}:00`;

//     let eventFound = events.find((event) => {
//       return event.dataStart.slice(0, -3) === id;
//     });

//     let event;

//     if (eventFound) {
//       let startHour = moment(eventFound.dataStart, "YYYY-MM-DD hh:mm").format(
//         "HH"
//       );
//       let endHour = moment(eventFound.dataEnd, "YYYY-MM-DD hh:mm").format("HH");
//       let startMinute = moment(eventFound.dataStart, "YYYY-MM-DD hh:mm").format(
//         "mm"
//       );
//       let endMinute = moment(eventFound.dataEnd, "YYYY-MM-DD hh:mm").format(
//         "mm"
//       );
//       let heightEvent =
//         +endHour * 60 - +startHour * 60 + (+endMinute - +startMinute);
//       event = (
//         <div
//           className="event"
//           style={{ height: `${heightEvent}px` }}
//           //item - година, idForHour - день

//           onClick={() => handleDeleteTask(eventFound.id)}
//         >
//           <span>{eventFound.title}</span>
//           <span>
//             {`${startHour}:${startMinute}`} - {`${endHour}:${endMinute}`}
//           </span>
//           <span>{eventFound.description}</span>
//         </div>
//       );
//     }

//     return (
//       <div
//         key={Math.random()}
//         className="multicolumns__field"
//         onClick={() => showPopup()}
//       >
//         {dateMy}
//         {event}
//       </div>
//     );
//   });
// };

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      willDelete: false,
      isEvent: false,
      id: null,
    };
  }
  showDeletePopup = () => {
    this.setState({
      willDelete: true,
    });
  };
  isEvent = (id) => {
    if (id) {
      this.setState({
        isEvent: true,
        id: id,
      });
      this.showDeletePopup();
      return id;
    }
  };
  isDelete = (id) => {
    if (this.props.events.id) {
      deleteEvent(id);
    }
  };

  arr = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
      result.push(i);
    }
    return result;
  };
  render() {
    let idForHour = this.props.idHour;
    return this.arr(0, 23).map((item) => {
      const hour = `0${item}`.slice(-2);
      const id = `${idForHour}T${hour}`;
      let eventFound = this.props.events.find((event) => {
        return event.dataStart.slice(0, -3) === id;
      });

      let event;

      if (eventFound) {
        let startHour = moment(eventFound.dataStart, "YYYY-MM-DD hh:mm").format(
          "HH"
        );
        let endHour = moment(eventFound.dataEnd, "YYYY-MM-DD hh:mm").format(
          "HH"
        );
        let startMinute = moment(
          eventFound.dataStart,
          "YYYY-MM-DD hh:mm"
        ).format("mm");
        let endMinute = moment(eventFound.dataEnd, "YYYY-MM-DD hh:mm").format(
          "mm"
        );
        let heightEvent =
          +endHour * 60 - +startHour * 60 + (+endMinute - +startMinute);
        event = (
          <div
            className="event"
            style={{ height: `${heightEvent}px` }}
            //item - година, idForHour - день
            onClick={(event) => this.props.showEventData(event, eventFound)}
            onFocus={(event) => this.props.showEventData(event, eventFound)}
          >
            <span>{eventFound.title}</span>
            <span>
              {`${startHour}:${startMinute}`} - {`${endHour}:${endMinute}`}
            </span>
            <span>{eventFound.description}</span>
          </div>
        );
      }
      return (
        <div
          key={Math.random()}
          className="multicolumns__field"
          onClick={() => this.props.showPopup()}
        >
          {this.state.willDelete && (
            <PopupDelete
              isDelete={this.props.isDelete}
              closePopup={this.props.closePopup}
            />
          )}

          {event}
        </div>
      );
    });
  }
}
export default Field;
