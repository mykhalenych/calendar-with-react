import React from 'react'
import './header.scss'
import Head from './Head'
import Week from './Date'
class Header extends React.Component{

  render(){
    
    return(
      <header className="header">
        <Head />
        <Week />
      </header>
    )
  }
}

export default Header 