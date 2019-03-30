import React,{Component} from 'react'
import axios from 'axios'

class Tp extends Component{
    constructor(){
        super()
        this.state = {
            city : '',
            country: '',
            temp: 0,
            weather: ''
        }
    }
    // componentDidMount(){
    //     axios.get('http://api.openweathermap.org/data/2.5/weather?q=pune,IN&appid=b2521915c6a851a49411b9f7512c0865')
    //         .then(response => console.log(response.data))
    //         .catch(error => console.log(error))
    // }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        // console.log('dnkfnskfnlksnflkn')
        // console.log(this.state.city)
        // console.log(this.state.country)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=b2521915c6a851a49411b9f7512c0865`)
            .then(response => {console.log(response.data)
                this.setState({
                    ...this.state,
                    temp : response.data.main.temp,
                    weather : response.data.weather[0].description
                })
            })
            .catch(error => console.log(error))

        
        
    }
    render(){
        return(
            <div>
                <h1>Weather App</h1>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" value={this.state.city} onChange={this.changeHandler}/>
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" value={this.state.country} onChange={this.changeHandler}/>
                    <button>Submit</button>
                </form>
                <h1>Temp : {this.state.temp}</h1>
                <h1>Weather : {this.state.weather}</h1>
            </div>
        )
    }
}

export default Tp;