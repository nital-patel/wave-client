import React, { Component } from 'react';
import axios from 'axios';
class Flight extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flightno: this.props.flightData.onwardflights[0].flightcode,
            arrtime: this.props.flightData.onwardflights[0].arrtime,
            origin: this.props.flightData.onwardflights[0].origin,
            depa_time: this.props.flightData.onwardflights[0].deptime,
            duration: this.props.flightData.onwardflights[0].duration,
            destination: this.props.flightData.onwardflights[0].destination,
            airline: this.props.flightData.onwardflights[0].airline
        };
        this.handleSumbit= this.handleSumbit.bind(this);
    }
    handleSumbit(e){
        e.preventDefault();
        console.log('submit started')
        //console.log(this.props)

        this.setState({
            flightno: this.props.flightData.onwardflights[0].flightcode,
            arrtime: this.props.flightData.onwardflights[0].arrtime,
            origin: this.props.flightData.onwardflights[0].origin,
            depa_time: this.props.flightData.onwardflights[0].deptime,
            duration: this.props.flightData.onwardflights[0].duration,
            destination: this.props.flightData.onwardflights[0].destination,
            airline: this.props.flightData.onwardflights[0].airline,
        })
        this.handleAdd()
    //    axios
    //         .post(`http://localhost:3000/flight`,{
    //             flightno: this.state.flightno,
    //             arrtime: this.state.arrtime,
    //             origin: this.state.origin,
    //             depa_time: this.state.depa_time,
    //             duration: this.state.duration,
    //             destination: this.state.destination,
    //             airline: this.state.airline
    //         }).catch(err => {
    //             console.log('error!', err)
    //         })
    }
    handleAdd(){
        this.props.handleAdd(
            this.state.flightno,
            this.state.arrtime,
            this.state.origin,
            this.state.depa_time,
            this.state.duration,
            this.state.destination,
            this.state.airline)
    }
    render() {
        const flight = this.props.flightData.onwardflights[0];
        //console.log(this.state)
        return (
            <div className="flight">
                <div className="">
                    <h3>{flight.airline}</h3>
                    <p> Flight {flight.flightcode}</p>
                </div>
                <div className="depArr">
                    <p> Departing From {flight.origin}
                    </p>
                    <p> Arriving At {flight.destination}</p>
                </div>
                <div className="time">
                    <p>Leaving At {flight.deptime}</p>
                    <p> Arriving At {flight.arrtime}</p>
                    <p> Duration {flight.duration}</p>
                </div>
                <div className="fareSeat">
                    <p> Total Fare {flight.fare.totalfare}</p>
                    <p>Seats Available</p>
                </div>
                

                

                
                <form onSubmit={(e) => this.handleSumbit(e) }>
               
                    <input type='hidden' name='airline' value={this.props.flightData.onwardflights[0].airline} />
                    <input type='hidden' name='flightno' value={this.props.flightData.onwardflights[0].flightcode} />
                    <input type='hidden' name='origin' value={this.props.flightData.onwardflights[0].origin}/>
                    <input type='hidden' name='destination' value={this.props.flightData.onwardflights[0].destination} />
                    <input type='hidden' name='depa_time' value={this.props.flightData.onwardflights[0].deptime} />
                    <input type='hidden' name='arrtime' value={this.props.flightData.onwardflights[0].arrtime} />
                    <input type='hidden' name='duration' value={this.props.flightData.onwardflights[0].duration} />
                    <input type='submit' placeholder='Add Flight to Trip' />
                </form>
            </div>
        )
    }
}

export default Flight;
