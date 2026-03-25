import "./assets/scss/App.scss"
import { Container } from "react-bootstrap"
import CurrentWeather from "../components/CurrentWeather"
import SearchCity from "../components/SearchCity"
import { getCurrentWeather } from "../services/OWMAPI"
import { useState } from "react"
import type { OWM_CurrentWeather } from "../services/OWMAPI.types"

function App() {

  const [currentWeather,setCurrentWeather]=useState<OWM_CurrentWeather|null>(null);

  

  const handlesearch= async (location:string)=>
  {

    console.log("some one weather of location",location);

    //Call API and  ask for weather in location
    const data=await getCurrentWeather(location);
    setCurrentWeather(data)
    // Update current weather -state with the weather at 'Location' 
  }
  return (
    <>
    <p className="text-primary">in the name of Allah</p>
    <Container id="app">
    <SearchCity onSearch={handlesearch}/>
   
   {currentWeather && <CurrentWeather data={currentWeather}/>}
   

    </Container>
    </>
  )
}

export default App

