import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import App from './App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserProfile from './components/UserProfile';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

export default () => (
    <Router history={customHistory}>
        <div className='router'>

            <Route exact path='/search' component={() => (<div><Link to='/register'>Register</Link><Login /></div>)}/>
            <Route exact path='/UserProfile' component={UserProfile} />
           {/* <Route exact path='/Userprofile' component={() => (<div><Link to='/'>Search</Link><span><Link to='/'>Logout</Link> </span><h1>Profile Component will come here</h1></div>)} />*/}
            <Route exact path='/' component={App} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login}/>
        </div>
    </Router>
);
