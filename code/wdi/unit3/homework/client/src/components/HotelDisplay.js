import React, {Component} from 'react';
import Hotel from './Hotel';
import axios from 'axios';
// import flatten from 'flat';

class HotelDisplay extends Component{
    constructor(){
        super();
        this.state={
            hoteltData:null,
            hoteltDataLoaded:false
        }
        //bindings
        this.hotelNameFinder = this.hotelNameFinder.bind(this)
        this.hotelParser = this.hotelParser.bind(this)
    }

    componentDidMount(req, res){
        let selection = this.props.hotelSelection
        console.log(selection)
        axios.get(
            `http://localhost:3000/hotel/${this.props.hotelSelection}`
        )
        // .then((newRes) => {
        //     console.log(newRes)
        //    newRes.json({data:newRes})
        // })
        .then((jsonRes) => {
            console.log(jsonRes)
            this.setState({
                hotelData:jsonRes.data,
                hotelDataLoaded:true
            })
        }).catch(err => { console.log(err) })
        console.log(this.props.hotelSelection,'<-----hotel selection')

    }
    hotelParser(obj){
        const results = [];
        for (let key in obj){
          results.push(obj[key])
        }
        return results
      }
      
    hotelNameFinder(arr){
        for(let i = 0; i <arr.length; i++){
          return arr[i].hotel_geo_node.name;
        }
    }
    
    renderHotels(){
        if(this.state.hotelDataLoaded){
            const hotelData = this.state.hotelData
           return (
            <div>
                
           <Hotel hotelData={hotelData.data.hotel["0"]}/>
           <Hotel hotelData={hotelData.data.hotel[1]}/>
           <Hotel hotelData={hotelData.data.hotel[2]}/>
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

  //`http://developer.goibibo.com/api/voyager/get_hotels_by_cityid/?app_id=d09ac5c5&app_key=727ff3f0af2bda5a3443c6977cdea544&city_id=6771549831164675055`

//   UPDATE hotel SET
//   name = $1,
//   rating = $2,
//   city = $3,
//   WHERE id = $4
//return <Hotel hotelName={this.hotelNameFinder(this.hotelParser(this.state.hotelData.data))}/>
