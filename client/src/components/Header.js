
import React, { Component } from 'react'

import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            boxHovered: false
        }
    }

    render() {
        return(
            <div className='navBar'>
                <span>
                    <p><img className="icon" href="https://www.projectedimage.com/content/products/2015-01/l/54b3ec70c6049.png"/>  <span className="title">The Wave: What's the wave?</span></p>
                    <div><Link to='/register'>Register</Link><register /></div>
                    <div><Link to='/login'>Login</Link><login /></div>

                </span>

            </div>

        )
    }
}

export default Header
