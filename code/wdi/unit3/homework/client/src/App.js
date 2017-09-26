import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './App.css';
import FlightSearch from './components/FlightSearch';
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Login from './components/auth/Login';
import Register from './components/auth/Register'

class App extends Component {
  constructor(){
    super();
    this.state={
      user:null
    }
    this.getUser=this.getUser.bind(this)
  }
  getUser(a){
    this.setState({
      user:a
    })
  }
  renderLogin(){
    if(!this.state.user)
    return <Login user={this.state.user} getUser={this.getUser}/>
  }
  renderUserPage(){
    if(this.state.user){
      return <UserProfile user={this.state.user}/>
    }else{
      
    }
  }
  render() {
    return (
      <div className="background">  
        <div className="App">
          {this.renderLogin()}       
          <Header />
          <FlightSearch user={this.state.user}/>
          {this.renderUserPage()}

        </div>
      </div>
    );
  }
}

export default withRouter(App);
