import React, { Component } from 'react'
import wt from '../css/weather.module.css'

class Weather extends Component {
  render() {
      const {temperature,city,country,humidity,description,error} = this.props.weatherData;
    return (
      <div className={wt.main}>
        {city&&country&&<p><b>Location:</b> {city}, {country}</p>}
        { temperature && <p><b>Temperature:</b> {temperature}</p> }
        { humidity && <p><b>Humidity:</b> {humidity}</p> }
        { description && <p><b>Description :</b> {description}</p> }
        { error && <p><b>{error}</b></p> } 
      </div>
    )
  }
}
export default Weather;
