import React, {Component} from 'react';
import Flight from './Flight';

class FlightDisplay extends Component{
    constructor(props){
        super(props);
        
        this.state={
            flightData:null,
            flightDataLoaded:false
        }
        //bindings
    }
    componentDidMount(){

        console.log(`${this.props.depAirport},${this.props.arrAirport},${this.props.date}`)
        fetch(
            `http://developer.goibibo.com/api/search/?app_id=d09ac5c5&app_key=727ff3f0af2bda5a3443c6977cdea544&format=json&source=${this.props.depAirport}&destination=${this.props.arrAirport}&dateofdeparture=${this.props.date}&seatingclass=E&adults=1&children=0&infants=0&counter=100`
        ).then(
            res=>res.json()
        ).then(jsonRes =>{
            console.log(jsonRes)
            this.setState({
                flightData:jsonRes.data,
                flightDataLoaded:true
            })
            console.log(this.state.flightData);
        })
    }
    renderFlights(){
        if(this.state.flightDataLoaded){
           return <Flight tripFlight={this.props.tripFlight} handleAdd={this.props.handleAdd} flightData={this.state.flightData}/>
        }else{
            return <p>loading flights</p>
        }
    }
    render(){
        return(
            <div>
                <div className='tools'>
                    {this.props.depAirport}/
                    {this.props.arrAirport}/
                    {this.props.date}/
                </div>

                {this.renderFlights()}
            </div>
        )
    }
}


export default FlightDisplay;

// `http://developer.goibibo.com/api/search/?app_id=d09ac5c5&app_key=727ff3f0af2bda5a3443c6977cdea544&format=json&source=EWR&destination=LAX&dateofdeparture=${this.props.date}&seatingclass=E&adults=1&children=0&infants=0&counter=100`

// `http://developer.goibibo.com/api/search/?app_id=d09ac5c5&app_key=727ff3f0af2bda5a3443c6977cdea544&format=json&source=${this.props.depAirport}&destination=${this.props.arrAirport}&dateofdeparture=${this.props.date}&seatingclass=E&adults=1&children=0&infants=0&counter=100`
// // <FlightDisplay name='depart' depAirport={this.state.depAirport} arrAirport={this.state.arrAirport} date={this.state.depDate}/>

