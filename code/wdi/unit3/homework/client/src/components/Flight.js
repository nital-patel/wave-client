import React, { Component } from 'react';

class Flight extends Component {

    constructor() {
        super();
        this.state = {
            placeholder: null,
        };
    }

    render() {
        const flight = this.props.flightData.onwardflights[0];

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
                {/* Amisha, we need an action here for the route */}
                <form method='POST' action='https://localhost:3000/flight'>
                    <input type='hidden' name='airline' value={this.props.flightData.onwardflights[0].airline} />
                    <input type='hidden' name='flightno' value={this.props.flightData.onwardflights[0].flightcode} />
                    <input type='hidden' name='origin' value={this.props.flightData.onwardflights[0].origin}/>
                    <input type='hidden' name='destination' value={this.props.flightData.onwardflights[0].destination} />
                    <input type='hidden' name='depa_time' value={this.props.flightData.onwardflights[0].deptime} />
                    <input type='hidden' name='arrtime' value={this.props.flightData.onwardflights[0].arrtime} />
                    <input type='hidden' name='duration' value={this.props.flightData.onwardflights[0].duration} />
                    <input type='hidden' name='totalfare' value='1' />
                    <input type='hidden' name='seats' value={flight.seatsavailable} />
                    <button type='submit'>Add Flight</button>
                </form>
            </div>
        )
    }
}

export default Flight;
