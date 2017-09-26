import React, { Component } from 'react';

import axios from 'axios';
import { Redirect } from 'react-router-dom';

class FlightEditForm extends Component{

  constructor() {
    super();
    this.state = {
      flightno: '',
      arrtime: '',
      origin: '',
      depa_time: '',
      duration: '',
      destination: '',
      airline: '',
      userRedirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`/flight/${this.props.match.params.id}`)
      .then((res) => {
        const flight = res.data.data;
        this.setState({
          flightno: flight.flightno,
          arrtime: flight.arrtime,
          origin: flight.origin,
          depa_time: flight.depa_time,
          duration: flight.duration,
          destination: flight.destination,
          airline: flight.airline,
          totalfare: flight.totalfare,
        })
      }).catch(err => console.log(err));
  }

  handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e){
    e.preventDefault();
    axios.put(`/flight/${this.props.match.params.id}`, {
          flightno: this.state.flightno,
          arrtime: this.state.arrtime,
          origin: this.state.origin,
          depa_time: this.state.depa_time,
          duration: this.state.duration,
          destination: this.state.destination,
          airline: this.state.airline,
          totalfare: this.state.totalfare,
    }).then(res => {
      this.setState({
        newId: res.data.data.id,
        userRedirect: true,
      });
    })
    .catch(err => console.log(err));
    e.target.reset();
  }

  render() {
    return(
      <div className="edit">
        <form onSubmit={this.handleFormSubmit}>
            <label>
              Flight No
              <input type="text"
              placeholder="Flight No"
              name="flightno"
              value={this.state.flightno}
              onChange={this.handleInputChange}/>
            </label>

            <label>
            Arr
            </label>
        </form>
      </div>



      )
  }



}


export default FlightEditForm;
