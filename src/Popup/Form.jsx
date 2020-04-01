import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    dataStart: "",
    dataEnd: "",
    description: "",
    color: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  componentDidMount() {
    this.setState({
      title: this.props.title,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      description: this.props.description,
      color: this.props.color
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
            value="2020-03-03T18:00"
            onChange={this.handleChange}
          />

          <input
            className="main-dataEnd"
            type="datetime-local"
            name="dataEnd"
            id="dataEnd"
            value="2020-03-03T19:00"
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
          value="#2979ff"
          onChange={this.handleChange}
        />
        <div>
          <label htmlFor="color">Виберіть колір для події</label>
        </div>
        <div className="btn-block">
          <button className="delete-btn" id="delete">
            {" "}
            <i className="material-icons">delete</i>
          </button>
          <button
            className="submit btn waves-effect waves-light"
            type="submit"
            name="submit"
            id="submit"
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