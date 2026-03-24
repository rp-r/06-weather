
import Card from "react-bootstrap/Card"
import  imgBanner  from "../src/assets/banner.jpg"

import * as apidata from '../services/OWMAPI'





const CurrentWeather=({apid})=>
{

    return(<>
    <div id="current-weather">
        <Card apid={apid}>
        <img src= {imgBanner}  className="card-img-top" alt =" Daytime, nighttime, daytime ,nighttime"/>

        <div className="card-body">
        <h5 className="card-title" id="location">
        <span id="city">{apid}</span>,<span id="country">Country</span>

        </h5>
        <p className="temp">
        <span id="temperature"> TEMP</span>
        &deg;C
        </p>
        <p className="humidity">
        <span id="humidity"> HUMIDITY</span> % humidity
        </p>
           <p className="wind">
        <span id="windspeed"> WIND_SPEED</span> % m/s
        </p>
        
        
        
        </div>




        </Card>




    </div>
    
    
    </>)
}

export default CurrentWeather