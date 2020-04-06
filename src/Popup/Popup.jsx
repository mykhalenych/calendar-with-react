import React from "react";
import "./popup.scss";
import Form from "./Form";
import PropTypes from "prop-types";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup" id="popup">
        <Form
          closePopup={this.props.closePopup}
          deleteEvents={this.props.deleteEvents}
        />
      </div>
    );
  }
}

Popup.propTypes = {
  closePopup: PropTypes.func,
  deleteEvents: PropTypes.func,
};
export default Popup;
