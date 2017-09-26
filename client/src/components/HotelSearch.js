import React, { Component } from 'react';

class HotelSearch extends Component {
  
  render() {
    return (
      <div>
        <span>
                    Where would you like to book a Hotel?
          
            <select name='hotelSelection' onChange={this.props.changeHandler}>
                <option value=''></option>
                <option value='1'>New York</option>
                <option value='2'>Los Angeles</option>
                <option value='3'>Chicago</option>
            </select>
  
        </span>
      </div>
    );
  }
}

export default HotelSearch;
