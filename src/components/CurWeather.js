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


    // checkForecast() {
    //   const weather = this.props.weather;
    //   console.log(weather)
    //     if(weather === 'Clear') {
    //         return <i className="fas fa-sun sun"></i>
    //     } else if(weather === 'Clouds') {
    //         return <i className="fas fa-cloud cloud"></i>
    //     } else if(weather === 'Rain') {
    //         return <i className="fas fa-cloud-showers-heavy rain"></i>    
    //     } else if(weather === 'Drizzle') {
    //       return <i class="fas fa-cloud-sun"></i>
    //     } else {
    //       return <p>ERROR</p>
    //     }
    // }

    checkForecast() {
      const weather = this.props.weather;
      // console.log(weather)
        if(weather === 'Clear') {
            this.getIcon('yellow','CLEAR_DAY')
        } else if(weather === 'Clouds') {
          this.getIcon('grey','CLOUDS')
        } else if(weather === 'Rain') {
          this.getIcon('white','RAIN') 
        } else if(weather === 'Drizzle') {
          this.getIcon('white','SLEET')
        } else {
          return <p>ERROR</p>
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
        {/* <div className="forecast-icons">
        </div> */}
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
