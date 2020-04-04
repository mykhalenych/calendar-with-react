import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popup from "./Popup/Popup";
import { fetchEventsList, deleteEvent } from "./Gateways/Gateways";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      day: 0,
      events: [],
      popupData: false,
    };
  }
 
  handleDeleteTask = (id) => {
    deleteEvent(id).then(() => fetchEventsList());
  };
  componentDidMount() {
    fetchEventsList()
      .then((events) => {
        this.setState({
          events: events,
        });
      })
      .catch(() => alert(`don't work!`));
  }

  showData = (start, id) => {
    this.setState({
      start: start,
      id: id,
    });
  };
  showPopup = () => {
    this.setState({
      show: true,
    });
  };

  // showPopup = (date, id) => {
  //   this.setState({
  //     show: true,
  //     dataStart: date,
  //     id: id,
  //   });
  // };
  closePopup = () => {
    this.setState({
      show: false,
    });
  };
  handleCuurentDay = () => {
    this.setState({
      day: 0,
    });
  };
  handlePrevWeek = () => {
    this.setState({
      day: this.state.day - 7,
    });
  };
  handleNextWeek = () => {
    this.setState({
      day: this.state.day + 7,
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          day={this.state.day}
          showPopup={this.showPopup}
          handleNextWeek={this.handleNextWeek}
          handlePrevWeek={this.handlePrevWeek}
          handleCuurentDay={this.handleCuurentDay}
        />
        <Main
          day={this.state.day}
          events={this.state.events}
          showPopup={this.showPopup}
          handleDeleteTask={this.handleDeleteTask}
        />
        {this.state.show && (
          <Popup
            closePopup={this.closePopup}
            deleteEvents={this.handleDeleteTask}
            dataStart={this.state.dataStart}
            id={this.state.id}
            start={this.props.start}
          />
        )}
      </div>
    );
  }
}

export default App;
