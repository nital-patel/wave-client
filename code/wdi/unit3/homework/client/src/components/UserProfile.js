import React, {Component} from 'react';
import UserProfileData from './UserProfileData';
import axios from 'axios'
import { withRouter } from 'react-router';

class UserProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
        tripData: null,
        tripDataLoaded:false
    }
  }
//working just need to display
  componentDidMount(){
    axios.get(`http://localhost:3000/trip/${this.props.user}`)
      .then(res => {
        console.log('got something back: ', res)
        this.setState({
          tripData: res.data,
          tripDataLoaded:true
        })
        console.log('=>>>trip data',this.state.tripData)
      })
  }

  renderUserflight() {
    if(this.state.tripDataLoaded){
      console.log(this.state.tripData)
      return this.state.tripData.map(trip => {
        return (
          <UserProfileData key={trip.id} trip={trip} />
          )
      });
  }}

  render(){
    return(
        <div className="userflight-list">
          <h1>Hi there</h1>
          
          {this.renderUserflight()}
          <button type='add'>add</button>
        <button type='submit'>delete</button>
        </div>

    )
  }
}

export default UserProfile;
