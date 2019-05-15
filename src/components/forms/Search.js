import React, { Component } from 'react'
import Axios from 'axios'

export class Search extends Component {

  state = {
    zip: "",
    data: {}
  }
  
  OnSumbit = (e) => {
    
    e.preventDefault();
    console.log('Submitted');
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&APPID=5dad2cea5bb8f5da13e612d8678083db&units=imperial`)
    .then(res => {
      console.log(res);
      this.props.data(res.data);
    })
    this.setState({zip: ""})
  }

  OnChange = (e) => {
    this.setState({zip: e.target.value})
  }

  render() {
    return (
      <form action="" id="search" onSubmit={this.OnSumbit}>
        <input type="text" placeholder="Enter your zip code here..." onChange={this.OnChange} value={this.state.zip}/>
        <button type="submit" className="btn"><i className="fas fa-search"></i></button>
      </form>
    )
  }
}

export default Search
