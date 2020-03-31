import React from 'react'
import Head from '../Header/Head'

class Common extends React.Component{
  constructor(props){
    super(props)
  }
  handlePopUp = () => {
    console.log('йоу')
  }

  handleCuurentDay = () => {
    console.log('йоу') 
  }
  handlePrevWeek = () => {
    console.log('йоу') 
  }
  handleNextWeek = () => {
    console.log('йоу')
  }
  render(){
    return(
      <Head 
      showPopUp = {this.handlePopUp}
      getCurrentDay = {this.handleCuurentDay}
      getPrevWeek = {this.handlePrevWeek}
      getNextWeek = {this.handleNextWeek}
      />
    )
  }
}