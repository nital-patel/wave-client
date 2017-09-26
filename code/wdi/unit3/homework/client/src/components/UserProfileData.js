import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class UserProfileData extends Component{
  render(){
    console.log(this.props.trips)
    debugger;
    return(
      <div className="flight-list">
          <h1> {this.props.trips[0].user_id} </h1>
          <h3> {this.props.trips[0].airline} </h3>
          {/* <p>{this.props.trips.trip.arrtime} </p>
          <p>{this.props.trips.depa_time} </p>
          <p>{this.props.trips.origin}</p>
          <p>{this.props.trips.destination}</p> */}
          <Link to={`/trip/${this.props.trip.id}`}>See More Information </Link>
      </div>

    )
  }

}


export default UserProfileData;
