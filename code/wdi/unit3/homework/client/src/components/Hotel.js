import React, {Component} from 'react';

class Hotel extends Component{
    
    existsCheck(){
        if(this.props.hotelName){
            return (
                    <div>
                        <div>
                            <h1>{this.props.hotelData.name}</h1>
                            <h3>{this.props.hotelData.city}</h3>
                            <h3>{this.props.hotelData.rating}</h3>
                        </div>
                        <form method='POST' action='/trip'>
                            <input type='hidden' value={this.props.hotelData.id}/>
                            <button type='submit'>Add Hotel!</button>
                        </form>
                    </div>
            )
        }else{
            return <h1>no data</h1>
        }
    }
    render(){
       return(
        <div>
            {this.existsCheck()}
        </div>
       )
    }
}

export default Hotel;