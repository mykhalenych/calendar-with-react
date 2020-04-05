import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popup from "./Popup/Popup";
import PopupDelete from "./Popup/PopupDelete";
import moment from "moment";
import { fetchEventsList, deleteEvent } from "./Gateways/Gateways";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      day: 0,
      events: [],
      willDelete: false,
    };
  }

  handleDeleteTask = (id) => {
    deleteEvent(id).then(() =>
      fetchEventsList()
        .then((events) => {
          this.setState({
            events: events,
          });
        })
        .catch(() => alert(`don't work!`))
    );
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

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.show !== prevState.show ||
      this.state.willDelete !== prevState.willDelete
    ) {
      fetchEventsList()
        .then((result) => {
          this.setState({
            events: result,
          });
        })
        .catch(() => alert(`don't work`));
    }
  }
  showPopup = () => {
    this.setState({
      show: true,
    });
  };

  closePopup = () => {
    this.setState({
      show: false,
    });
  };

  showEventData = (event, { id }) => {
    this.handleDeleteTask(id);

    event.stopPropagation();
    this.setState({
      willDelete: true,
      id,
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
  currentMounth = () => {
    let startOfWeek = moment().startOf("isoWeek").toDate();
    let mounth = startOfWeek.setDate(startOfWeek.getDate() + this.state.day);
    return new Date(mounth).toString().split(" ")[1];
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
          currentMounth={this.currentMounth()}
        />

        <Main
          day={this.state.day}
          events={this.state.events}
          showPopup={this.showPopup}
          handleDeleteTask={this.handleDeleteTask}
          closePopup={this.closePopup}
          showEventData={this.showEventData}
        />
        {this.state.show && <Popup closePopup={this.closePopup} />}
        {this.state.willDelete && (
          <PopupDelete
            deleteEvent={this.handleDeleteTask}
            closePopup={this.closePopup}
          />
        )}
      </div>
    );
  }
}

export default App;
