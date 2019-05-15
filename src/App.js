import React, { Component } from 'react';
import Header from './components/layout/Header';
import CurWeather from './components/CurWeather';
import Search from './components/forms/Search';

import './App.css';

class App extends Component {

  state = {
    temp: {},
    weather: [],
    hasZip: false
  }

  showWeather = (data) => {
    const temp = {
      cur_temp: Math.round(data.main.temp),
      max_temp: Math.round(data.main.temp_max),
      min_temp: Math.round(data.main.temp_min)
    }
    const weather = data.weather[0].main;
    this.setState({
      hasZip: true, 
      temp: temp,
      weather: weather
    });
    
  }
  render() {
    return (
      <div className="App" style={{height: '100%'}}>
        <Header />
        <Search data={this.showWeather}/>
        {this.state.hasZip && <CurWeather temp={this.state.temp} weather={this.state.weather}/>}
      </div>
    );
  }
}

export default App;
