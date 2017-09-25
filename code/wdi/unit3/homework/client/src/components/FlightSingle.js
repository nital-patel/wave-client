import React, { Component } from 'react';
//import Flight from './Flight';
import axios from 'axios';
//import { Link } from 'react-router-dom';

class FlightSingle extends Component {

  constructor()
  {
    super();
    this.state = {
      flightData: null,
      flightDataLoaded:false,
      userRedirect: false,
    }
    this.deleteFlight = this.deleteFlight.bind(this);
  }

  componentDidMount(){
    axios.get(`/flight/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          flightDataLoaded: true,
          flightData: res.data.data,
        })
      }).catch(err => console.log(err));
  }

  deleteFlight(){
    axios.delete(`/flight/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        this.setState({
          userRedirect: true,
        });
      }).catch(err => {
        console.log(err);
      });
  }

  renderFlightOrLoading(){
    if(this.state.flightDataLoaded){
      return (
        <div className="fsingle">
          <div className="airline">
            <h3>{this.state.flightData.onwardflights[0].airline}</h3>
            <p> Flight {this.state.flightData.onwardflights[0].flightcode}</p>
          </div>
          <div className='depArr'>
            <p> Departing From {this.state.flightData.onwardflights[0].origin}</p>
            <p> Arriving At {this.state.flightData.onwardflights[0].destination}</p>
          </div>
          <div className='time'>
              <p>Leaving At {this.state.flightData.onwardflights[0].deptime}</p>
              <p> Arriving At {this.state.flightData.onwardflights[0].arrtime}</p>
              <p> Duration {this.state.flightData.onwardflights[0].duration}</p>
          </div>
          <div className='fareSeat'>
                <p> Total Fare {this.state.fareConvert()}</p>
                <p>Seats Available</p>
          </div>

          <div className="links">
              <span className="delete" onClick={this.deleteFlight}>Delete</span>
          </div>

        </div>
        )
    } else return <p className="loading">Loading...</p>
  }

  render(){
    return(
      <div className="flight-single">
        {this.renderFlightOrLoading()}
      </div>
    )
  }


}

export default FlightSingle;
