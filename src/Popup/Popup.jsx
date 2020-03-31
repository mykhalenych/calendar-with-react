import React from 'react'
import './popup.scss'


class Popup extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <div className="popup hide" id="popup">
      <form className="popup-form">
          <input className="popup-form__title" type="text" name="title" id="title" placeholder="Введіть назву події"/>

          <div className="popup-form-main">
              <i className="Small material-icons popup-form-main-icon">access_time</i>
              <input className="main-dataStart" type="datetime-local" name="dataStart" id="dataStart" value="2020-03-03T18:00" />

              <input className="main-dataEnd" type="datetime-local" name="dataEnd" id="dataEnd" value="2020-03-03T19:00"/>
          </div>
          <div className="subject">
              <i className="Small material-icons main-icon">subject</i>
              <input className="popup-form__description" type="text" name="description" id="description" placeholder="Добавити опис"/>
          </div>
          <input type="color" className="popup-form__color" name="color" id="color" value="#2979ff"/>
          <div>
              <label htmlFor="color">Виберіть колір для події</label>

          </div>
          <div className="btn-block">
              <button className="delete-btn" id="delete"> <i className="material-icons">delete</i></button>
              <button className="submit btn waves-effect waves-light" type="submit" name="submit" id="submit" disabled>Відправити</button>
          </div>
          <button className="close btn-floating btn-large waves-effect waves-light red" data-modal="popup">X</button>
      </form>
  </div>
    )
  }
}

export default Popup