import React from "react";
import moment from 'moment'
const Field = ({day}) => {
  
  let arr = Array(7).fill("0");
  let currentDay = day

  const weekDays = arr.map(() => {
    const startOfWeek = moment()
      .startOf("isoWeek")
      .add(currentDay, "day")

    currentDay++
    return (
      <div key={Math.random()} className="multicolumns__field">{startOfWeek.format("DD")}</div>
    )
  })
  return (
  
     <div key={Math.random()} className="multicolumns__field">{weekDays}</div>
   
  )
}

export default Field;
