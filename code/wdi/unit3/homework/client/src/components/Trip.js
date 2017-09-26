import React, {Component} from 'react';
import HotelDisplay from './HotelDisplay';
import FlightDisplay from './FlightDisplay';
import axios from 'axios';
class Trip extends Component{
    constructor(props){
        super(props);
        this.state={
            flightno:null,
            arrtime:null,
            origin: null,
            depa_time: null,
            duration: null,
            destination: null,
            airline: null,
            hotelId:null,
            hotelCity:null,
            hotelName:null,
            tripName:null,
        }
        this.tripHasFlight=this.tripHasFlight.bind(this);
        this.tripHasHotel=this.tripHasHotel.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleHotel=this.handleHotel.bind(this);
        this.handleSumbit=this.handleSumbit.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
    }
    handleAdd(a,b,c,d,e,f,g){
        this.setState({
            flightno:a,
            arrtime:b,
            origin:c,
            depa_time:d,
            duration:e,
            destination:f,
            airline:g
        })
    }
    handleHotel(a,b,c){
        this.setState({
            hotelId:a,
            hotelName:b,
            hotelCity:c,
        })
    }
    tripHasFlight(){
        const st = this.state
        if(st.flightno && st.arrtime && st.origin && st.depa_time && st.duration && st.destination && st.airline){
            return(<div>
                    <h2>Flight</h2>
                    <h3>{st.airline} {st.flightno} leaving at {st.depa_time} from {st.origin}</h3>
                </div>
            )
        }
    }
    tripHasHotel(){
        if(this.state.hotelId){
            return(
            <div>
                <h3>Hotel</h3>
                <h2>The {this.state.hotelName} in {this.state.hotelCity}</h2>
            </div>
            )
        }
    }
    changeHandler(event){
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;  
        this.setState({
            [name]:value
        })    
    }
    handleSumbit(e){
        e.preventDefault();
        //this works
        console.log(this.props.user)
        axios
            .post(`http://localhost:3000/flight`,{
                flightno: parseInt(this.state.flightno),
                arrtime: this.state.arrtime,
                origin: this.state.origin,
                depa_time: this.state.depa_time,
                duration: this.state.duration,
                destination: this.state.destination,
                airline: this.state.airline
            }).catch(err => {
                console.log('error!', err)
            })
        
        axios.post(`http://localhost:3000/trip`,{
            flightno:parseInt(this.state.flightno),
            userId:this.props.user,
            tripName:this.state.tripName,
            hotelId:this.state.hotelId
        }).catch(err=>{
            console.log(err)
        }) 
    }
    render(){
        return(
            <div className='trip'>
                
                <FlightDisplay name='depart' depAirport={this.props.depAirport} arrAirport={this.props.arrAirport} date={this.props.date} 
                    tripFlight={[
                    {flightno:this.state.flightno},
                    {arrtime:this.state.arrtime},
                    {origin:this.state.origin},
                    {depa_time:this.state.depa_time},
                    {duration:this.state.duration},
                    {destination:this.state.destination},
                    {airline:this.state.airline}]}
                handleAdd={this.handleAdd}
                />
                {/* <FlightDisplay name='return'  depAirport={this.props.depAirport} arrAirport={this.props.arrAirport} date={this.props.retDate}/> */}
                <HotelDisplay hotelData={this.state.hotelData} handleHotel={this.handleHotel} hotelSelection={this.props.hotelSelection} tripHotel={[{hotelCity:this.state.hotelCity},{hotelId:this.state.hotelId},{hotelName:this.state.hotelName}]}/>
            <div className='tripSubmit'>
            <p>{this.state.tripName}</p>
            <form onSubmit={(e) => this.handleSumbit(e)}>
                <input name='tripName' placeholder='Name Your Trip' onChange={this.changeHandler} />
                {this.tripHasFlight()}
                {this.tripHasHotel()}
                <input type='hidden' name='flightno' value={this.state.flightno}/>
                <input type='hidden' name='hotelId' value={this.state.hotelId}/>
                <input type='hidden' name='userId' value='1'/>
                    <button type='submit'></button>
                </form>
            </div>
            </div>
        )
    }
}

export default Trip;