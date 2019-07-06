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
  getWeather = async (e) => {
	  e.preventDefault();
	  const city = e.target.city.value;
	  const country = e.target.country.value;
    /
	const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=APIKEY`)
	const data = await api_call.json();
	console.log(data)
	if(city && country){
		this.setState({
			temperature: data.main.temp,
			city: data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
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
