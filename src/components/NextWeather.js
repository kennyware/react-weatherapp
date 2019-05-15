import React, { Component } from 'react'


export class NextWeather extends Component {

    // componentDidMount() {
    //     this.genDays();
    // }

    genDays = () => {
        // const today = days[d.getDay()];
        const fiveDaysFromNow = days[d.getDay() + 5];
        const newDays = [];
        console.log(d.setDate('tuesday'));
        for(let i = d.getDay() + 1; i <= d.getDay() + 5; i++){
            // if(i > 6){
            //     i = i 7
            // }
            newDays.push(days[i])
        }
        console.log(newDays)
    }
    
  render() {
    const showDays = days.map(day => (
      <li>{day}</li>
    ));
    return (
      <div>
        <ul className='weather-list'>
            {showDays}
        </ul>
      </div>
    )
  }
}

let d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default NextWeather
