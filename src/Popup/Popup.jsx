import React from "react";
import "./popup.scss";
import Form from "./Form";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup"id="popup">

       
        <Form closePopup={this.props.closePopup}/>
      </div>
    );
  }
}

export default Popup;
