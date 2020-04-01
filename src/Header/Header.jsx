import React from 'react'
import './header.scss'
import Head from './Head'
import Week from './Week'
class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
    };
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

  
  
  render(){

    return(
      <header className="header">
        <Head
        showPopup={this.props.showPopup}
        getCurrentDay={this.handleCuurentDay}
        getPrevWeek={this.handlePrevWeek}
        getNextWeek={this.handleNextWeek}
      />
        <Week 
        day={this.state.day}
        />
      </header>
    )
  }
}

export default Header 