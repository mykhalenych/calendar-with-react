import React from "react";

const PopupDelete = (deleteEvents, closePopup) => {
  return (
    <div className="popupDelete">
      <form className="popupDelete-form">
        <button className="delete-btn" id="delete" onClick={() => deleteEvents}>
          <i className="material-icons">delete</i>
        </button>
        <button
          className="close btn-floating btn-large waves-effect waves-light red"
          data-modal="popup"
          onClick={closePopup}
        >
          X
        </button>
      </form>
    </div>
  );
};
export default PopupDelete;
