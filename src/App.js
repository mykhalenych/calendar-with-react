import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popup from "./Popup/Popup";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
     
    };
  }

  showPopup = () => {
    console.log(true)
    this.setState({
      show: true
    });
  };
  closePopup = () =>{
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header 
        showPopup={this.showPopup} 
        />
        <Main />
        {this.state.show && <Popup closePopup={this.closePopup}/>}
      </div>
    );
  }
}

export default App;
