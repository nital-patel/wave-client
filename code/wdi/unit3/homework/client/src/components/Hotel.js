import React, {Component} from 'react';

class Hotel extends Component{
    constructor(props){
        super(props);
        this.state={
            hotelId:null,
            hotelCity:null,
            hotelName:null
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    componentDidMount(){
        this.setState({
            hotelId:this.props.hotelData.id,
            hotelCity:this.props.hotelData.city,
            hotelName:this.props.hotelData.name

    })
    }
    handleSubmit(e){
        e.preventDefault();
        
        console.log(this.props.handleHotel)
        console.log(this.state.hotelCity)
        this.handleHotel()
    }
    handleHotel(){
        this.props.handleHotel(this.state.hotelId,this.state.hotelCity,this.state.hotelName)
    }
    render(){
       return(
        <div>
            <h1>{this.props.hotelData.name}</h1>
            <h3>{this.props.hotelData.city}</h3>
            <h3>{this.props.hotelData.rating}</h3>
            <p>{this.state.hotelId}{this.state.hotelName}{this.state.hotelCity}</p>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <input type='hidden' value={this.props.hotelData.name}/>
                <input type='hidden' value={this.props.hotelData.city}/>
                <input type='hidden' value={this.props.hotelData.id}/>
                <button type='submit' />
            </form>
        </div>
       )
    }
}

export default Hotel;