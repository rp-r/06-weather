
import Card from "react-bootstrap/Card"
import  imgBanner  from "../src/assets/banner.jpg"






const CurrentWeather=()=>
{

    return(<>
    <div id="current-weather">
        <Card>
        <img src= {imgBanner}  className="card-img-top" alt =" Daytime, nighttime, daytime ,nighttime"/>

        <div className="card-body">
        <h5 className="card-title" id="location">
        <span id="city">City</span>,<span id="country">Country</span>

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