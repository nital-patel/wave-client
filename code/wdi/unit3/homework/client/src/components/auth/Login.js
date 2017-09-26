
import React, {Component} from 'react';
import { withRouter } from 'react-router';

import axios from 'axios';

class Login extends Component{
    constructor(){
        super();

        this.state={
            username: '',
            password: '',
            conformpassword: '',
            fireRedirect: false,
            auth: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
 }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }
    getUser(){
        this.props.getUser(this.state.username)
    }
      handleFormSubmit(e) {
          e.preventDefault();
          this.getUser()
          axios
              .post('http://localhost:3000/auth/login', {
                  username: this.state.username,
                  password: this.state.password,
              })
              .then(res => {
                  console.log(res);
                  if(res.data.auth){
                  this.setState({
                      auth: true,

              });
                  //this.handleRedirect();
              }
      })
             .catch(err => console.log(err));
        e.target.reset();
      }

      handleRedirect(){
        if (this.state.auth){
          return this.props.history.push('/UserProfile')
        }
      }

        render(){
          //console.log(this.state)
        return(
            <div className='login item section'>
                <h2>Login</h2>
                {/* nital, put in an action that is the route you want to call the auth methods on */}
                <form onSubmit={(e) => this.handleFormSubmit(e)}>

                    <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInputChange}></input>
                    <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange}></input>
                    <button type='submit'>Login</button>
                </form>

            </div>
        )
    }
}

export default withRouter(Login);
