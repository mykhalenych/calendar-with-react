import React from 'react'
import './header.scss'
import Head from './Head'
import Week from './Date'
class Header extends React.Component{
  handlePopUp = () => {
    console.log("йоу");
  };

  handleCuurentDay = () => {
    console.log("йоу");
  };
  handlePrevWeek = () => {
    console.log("йоу");
  };
  handleNextWeek = () => {
    console.log("йоу");
  };
  render(){
    
    return(
      <header className="header">
        <Head
        showPopUp={this.handlePopUp}
        getCurrentDay={this.handleCuurentDay}
        getPrevWeek={this.handlePrevWeek}
        getNextWeek={this.handleNextWeek}
      />
        <Week />
      </header>
    )
  }
}

export default Header 