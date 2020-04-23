import React from "react";
import PropTypes from "prop-types";
import { deleteEvent } from "../gate-ways/gateWays";

const PopupDelete = ({ closeDeletePopup, id }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleDelete = () => {
    deleteEvent(id).then(closeDeletePopup)
  }
  return (
    <div className="popupDelete">
      <form className="popupDelete-form" onClick={handleSubmit}>
        <button
          className="delete-btn"
          id="delete"
          onClick={handleDelete}
        >
          <i className="material-icons">delete</i>
        </button>
        <button
          className="close btn-floating btn-large waves-effect waves-light red"
          data-modal="popup"
          onClick={closeDeletePopup}
        >
          X
        </button>
      </form>
    </div>
  );
};
PopupDelete.propTypes = {
  closeDeletePopup: PropTypes.func,
  id: PropTypes.number,
};
export default PopupDelete;
