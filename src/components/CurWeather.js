import React, { Component } from 'react'
import { Skycons } from '../skycons'

export class CurWeather extends Component {
    constructor(props){
      super(props);
      this.state = {
        forecast: 'clear'
      }
    }

    componentDidMount() {
      this.checkForecast()
    }

    checkForecast() {
      const weather = this.props.weather;
      // console.log(weather)
        if(weather === 'Clear') {
            this.getIcon('yellow','CLEAR_DAY')
        } else if(weather === 'Clouds') {
            this.getIcon('grey','CLOUDY')
        } else if(weather === 'Rain') {
            this.getIcon('grey','RAIN') 
        } else if(weather === 'Drizzle') {
            this.getIcon('white','RAIN')
        } else if(weather === 'Snow') {
          this.getIcon('white','SNOW')
        } else if(weather === 'Thunderstorm') {
          this.getIcon('grey','SLEET')
        } else {
          this.getIcon('grey','SLEET')
        }
    }

    getIcon(color, forecast) {
      const skycons = new Skycons({"color": color});
      // on Android, a nasty hack is needed: {"resizeClear": true}
  
      // you can add a canvas by it's ID...
      skycons.add("icon1", Skycons[forecast]);
  
      // start animation!
      skycons.play();
      console.log(skycons)
      
      // you can also halt animation with skycons.pause()
    }

  render() {
    const {temp} = this.props;
    return (
      <div>
        <canvas id="icon1" width="128" height="128"></canvas>
        <div style={{paddingBottom: '80px'}}>
          <div className="current-temp" style={{fontSize: '3em'}}>
            {temp.cur_temp}&deg;
          </div>
          <div className="date">
              <h3>{days[d.getDay()].substr(0,3)}</h3>
              {d.getDate()}
          </div>
        </div>
        
        <div className="weather-details">
            <div className="temp">
                <span className="temp-high">High: {temp.max_temp}</span> {' '}|{' '}
                <span className="temp-low">Low: {temp.min_temp}</span>
            </div>
        </div>
      </div>
    )
  }
}

let d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default CurWeather
