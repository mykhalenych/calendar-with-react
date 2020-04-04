import React from "react";
import "./popup.scss";
import Form from "./Form";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup" id="popup">
        <Form
          closePopup={this.props.closePopup}
          deleteEvents={this.props.deleteEvents}
          start={this.props.start}

        />
      </div>
    );
  }
}

export default Popup;
