import React from "react";
import { createEvent } from "../Gateways/Gateways";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dataStart: "",
      dataEnd: "",
      description: "",
      color: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("є");
  };

  componentDidMount() {
    this.setState({
      start: this.props.start,
    });
  }
  render() {
    return (
      <form className="popup-form" onSubmit={this.handleSubmit}>
        <input
          className="popup-form__title"
          type="text"
          name="title"
          id="title"
          placeholder="Введіть назву події"
          onChange={this.handleChange}
        />

        <div className="popup-form-main">
          <i className="Small material-icons popup-form-main-icon">
            access_time
          </i>
          <input
            className="main-dataStart"
            type="datetime-local"
            name="dataStart"
            id="dataStart"
            defaultValue={this.props.dataStart}
            onChange={this.handleChange}
          />

          <input
            className="main-dataEnd"
            type="datetime-local"
            name="dataEnd"
            id="dataEnd"
            onChange={this.handleChange}
          />
        </div>
        <div className="subject">
          <i className="Small material-icons main-icon">subject</i>
          <input
            className="popup-form__description"
            type="text"
            name="description"
            id="description"
            placeholder="Добавити опис"
            onChange={this.handleChange}
          />
        </div>
        <input
          type="color"
          className="popup-form__color"
          name="color"
          id="color"
          onChange={this.handleChange}
        />
        <div>
          <label htmlFor="color">Виберіть колір для події</label>
        </div>
        <div className="btn-block">
          <button
            className="delete-btn"
            id="delete"
            onClick={() => this.props.deleteEvents(this.props.id)}
          >
            <i className="material-icons">delete</i>
          </button>
          <button
            className="submit btn waves-effect waves-light"
            type="submit"
            name="submit"
            id="submit"
            onClick={() => createEvent(this.state).then(this.props.closePopup)}
          >
            Відправити
          </button>
          <button
            className="close btn-floating btn-large waves-effect waves-light red"
            data-modal="popup"
            onClick={this.props.closePopup}
          >
            X
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
