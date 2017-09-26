import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class UserProfileData extends Component{

  render(){
    return(
      <div className="flight-list">
          <h1> {this.props.trips.username} </h1>
          <h3> {this.props.trips.airline} </h3>
          <p>{this.props.trips.arrtime} </p>
          <p>{this.props.trips.depa_time} </p>
          <p>{this.props.trips.origin}</p>
          <p>{this.props.trips.destination}</p>
          <Link to={`/trip/${this.props.trip.id}`}>See More Information </Link>
      </div>

    )
  }

}


export default UserProfileData;
