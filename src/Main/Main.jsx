import React from 'react'
import Column from './Column'
import Multicolumns from './Multicolumns'
import './main.scss'
class Main extends React.Component{
  render(){
    return(
      <section className="main">
        <Column/>
        <Multicolumns/>
      </section>
    )
  }
}

export default Main