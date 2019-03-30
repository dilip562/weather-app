import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tp from './components/Tp'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'
import Bg from './components/Bg'

class App extends Component {
	constructor(){
		super()
		this.state = {
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: undefined
		}
	}
  getWeather = (e) => {
	  e.preventDefault();
	  const city = e.target.city.value;
	  const country = e.target.country.value;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=b2521915c6a851a49411b9f7512c0865`)
			.then(response => {console.log(response.data)
				if(city && country){
					this.setState({
						temperature: response.data.main.temp,
						city: response.data.name,
						country: response.data.sys.country,
						humidity: response.data.main.humidity,
						description: response.data.weather[0].description,
						error: undefined
					   })
				}
				else{
					this.setState({
						temperature: undefined,
						city: undefined,
						country: undefined,
						humidity: undefined,
						description: undefined,
						error: 'Please enter the value'
					   })
				}
               
            })
            .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="main">
		<div className="left">
			<Bg />
			<Title />
		</div>
		<div className="right">
			<Form getWeather = {this.getWeather} />
			<Weather weatherData = {this.state} />
		</div>
      </div>
    );
  }
}

export default App;
