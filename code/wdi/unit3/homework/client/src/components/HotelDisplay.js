import React, {Component} from 'react';
import Hotel from './Hotel';
import axios from 'axios';
// import flatten from 'flat';

class HotelDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            hotelData:null,
            hotelDataLoaded:false
        }
        //bindings
        // this.hotelNameFinder = this.hotelNameFinder.bind(this)
        // this.hotelParser = this.hotelParser.bind(this)
    }

    componentDidMount(req, res){
        let selection = this.props.hotelSelection
        console.log(selection)
        axios.get(
            `http://localhost:3000/hotel/${this.props.hotelSelection}`
        ).then(jsonRes => {

            // console.log(jsonRes.data, 'this is jsonRes.data')
            // console.log(jsonRes.data.hotel, `this is the hotel array`)
            // console.log(jsonRes.data.hotel[0].name, 'this is the hotel name')

            this.setState({
                hotelData:jsonRes,
                hotelDataLoaded:true
            })

            // console.log(this.state + 'this is the state')
        }).catch(err => { 
            console.log(err) 
        })
        //console.log(this.props.hotelSelection,'<-----hotel selection')

    }
    // hotelParser(obj){
    //     const results = [];
    //     for (let key in obj){
    //       results.push(obj[key])
    //     }
    //     return results
    //   }
      
    // hotelNameFinder(arr){
    //     for(let i = 0; i <arr.length; i++){
    //       return arr[i].hotel_geo_node.name;
    //     }
    // }
    
    renderHotels(){
        if(this.state.hotelDataLoaded){
            const hotelData = this.state.hotelData
            //console.log(hotelData)
           return (
            <div>    
                <Hotel tripHotel={this.props.tripHotel} handleHotel={this.props.handleHotel} hotelData={hotelData.data.hotel[0]}/>
                <Hotel tripHotel={this.props.tripHotel} handleHotel={this.props.handleHotel} hotelData={hotelData.data.hotel[1]}/>
                <Hotel tripHotel={this.props.tripHotel} handleHotel={this.props.handleHotel} hotelData={hotelData.data.hotel[2]}/>
           </div>
            )
        }else{
            return <p>loading hotels</p>
        }
    }
    render() {
        return (
        <div>
            {this.renderHotels()}
        </div>
    );
  }
}

export default HotelDisplay;