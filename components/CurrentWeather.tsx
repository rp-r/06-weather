
import Card from "react-bootstrap/Card"
import  imgBanner  from "../src/assets/images/banner.png"
import type { OWM_CurrentWeather } from "../services/OWMAPI.types"
import type React from "react";
import WeatherCondi from "../components/WeatherCond";


interface CurrentWeatherProps
{
    data:OWM_CurrentWeather;
}




const CurrentWeather: React.FC<CurrentWeatherProps>=({data})=>
{

    const freshness=new Date(data.dt*1000);





    return(<>
    <div id="current-weather">
        <Card>
        <img src= {imgBanner}  className="card-img-top" alt =" Daytime, nighttime, daytime ,nighttime"/>

        <div className="card-body">
        <h5 className="card-title" id="location">
        <span id="city">{data.name}</span>,<span id="country">{data.sys.country}</span>

        </h5>
        <p className="temp">
        <span id="temperature"> {data.main.temp}</span>
        &deg;C
        </p>
        <p className="humidity">
        <span id="humidity">{data.main.humidity}</span> % humidity
        </p>
           <p className="wind">
        <span id="windspeed">{data.wind.speed} </span> % m/s
        </p>

         <ul className="conditions">
        { data.weather.map(condition=>(
            <WeatherCondi  key ={data.id} data={condition}/>
        
        
        
        ))}

        
            
         


        </ul>
        <p className="text-mutes small">
            <span>
                {freshness.toLocaleDateString()}
                {freshness.toLocaleTimeString()}
            </span>
        </p>
        
        
        </div>




        </Card>




    </div>
    
    
    </>)
}

export default CurrentWeather