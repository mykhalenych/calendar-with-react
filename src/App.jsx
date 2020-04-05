import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popup from "./Popup/Popup";
<<<<<<< HEAD
import PopupDelete from "./Popup/PopupDelete";
import moment from "moment";
=======
import PopupDelete from "./Main/PopupDelete";
>>>>>>> b42b955bbcc096ac494e460ccffd78fc137225a3
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
<<<<<<< HEAD
    deleteEvent(id).then(() =>
      fetchEventsList()
        .then((events) => {
          this.setState({
            events: events,
          });
        })
        .catch(() => alert(`don't work!`))
    );
=======
    deleteEvent(id).then(() => fetchEventsList());
>>>>>>> b42b955bbcc096ac494e460ccffd78fc137225a3
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

<<<<<<< HEAD
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
=======
>>>>>>> b42b955bbcc096ac494e460ccffd78fc137225a3
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

<<<<<<< HEAD
    event.stopPropagation();
=======
    event.stopPropagation()
>>>>>>> b42b955bbcc096ac494e460ccffd78fc137225a3
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
<<<<<<< HEAD
  currentMounth = () => {
    let startOfWeek = moment().startOf("isoWeek").toDate();
    let mounth = startOfWeek.setDate(startOfWeek.getDate() + this.state.day);
    return new Date(mounth).toString().split(" ")[1];
  };
=======
>>>>>>> b42b955bbcc096ac494e460ccffd78fc137225a3

  render() {
    return (
      <div className="App">
        <Header
          day={this.state.day}
          showPopup={this.showPopup}
          handleNextWeek={this.handleNextWeek}
          handlePrevWeek={this.handlePrevWeek}
          handleCuurentDay={this.handleCuurentDay}
<<<<<<< HEAD
          currentMounth={this.currentMounth()}
=======
>>>>>>> b42b955bbcc096ac494e460ccffd78fc137225a3
        />

        <Main
          day={this.state.day}
          events={this.state.events}
          showPopup={this.showPopup}
          handleDeleteTask={this.handleDeleteTask}
          closePopup={this.closePopup}
          showEventData={this.showEventData}
        />
<<<<<<< HEAD
        {this.state.show && <Popup closePopup={this.closePopup} />}
=======
        {this.state.show && (
          <Popup
            closePopup={this.closePopup}
            deleteEvents={this.handleDeleteTask}
            dataStart={this.state.dataStart}
            id={this.state.id}
            start={this.props.start}
          />
        )}
>>>>>>> b42b955bbcc096ac494e460ccffd78fc137225a3
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
