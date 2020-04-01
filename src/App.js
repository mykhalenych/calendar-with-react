import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popup from "./Popup/Popup";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      day: 0,
    };
  }

  showPopup = () => {
    this.setState({
      show: true,
    });
  };
  closePopup = () =>{
    this.setState({
      show: false
    })
  }
  handleCuurentDay = () => {
    this.setState({
      day: 0,
    })
  };
  handlePrevWeek = () => {
    this.setState({
      day: this.state.day -7
    })
  };
  handleNextWeek = () => {
    this.setState({
      day: this.state.day +7
    })
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
        <Main day={this.state.day}/>
        {this.state.show && <Popup closePopup={this.closePopup}/>}
      </div>
    );
  }
}

export default App;
