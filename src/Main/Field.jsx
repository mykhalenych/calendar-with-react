import React from 'react'

class Field extends React.Component{
 
  render(){
    let arr = Array(7).fill('0')
    return(

    <>{arr.map(day =>{
     return <div key={Math.random()} className="multicolumns__field"></div>
    })}</>
    )
  }
}

export default Field