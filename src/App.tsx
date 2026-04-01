
import { Container } from "react-bootstrap"
import CurrentWeather from "../components/CurrentWeather"
import SearchCity from "../components/SearchCity"
import { getCurrentWeather } from "../services/OWMAPI"
import { useState } from "react"
import type { OWM_CurrentWeather } from "../services/OWMAPI.types"
import { Alert } from "react-bootstrap"
import {Image} from "react-bootstrap"
import imgAirplane from "./assets/images/747.svg"
import "./assets/scss/App.scss"
function App() {

  const [currentWeather,setCurrentWeather]=useState<OWM_CurrentWeather|null>(null);

  //STRING AND FALSE 
  //ERROR ===FALSE

  const [error,setError]=useState<string|false>(false);
  //LOADING 

  const [isLoading,setIsLoading]=useState(false);



  const handlesearch= async (location:string)=>
  {

    console.log("some one weather of location",location);
//RESET STATE
setError(false)
setIsLoading(true);
setCurrentWeather(null);

//setIsLoading become false after we have fått vädret 


   try {

  //Call API and  ask for weather in location
    const data=await getCurrentWeather(location);
     setIsLoading(false);
    setCurrentWeather(data)
    // Update current weather -state with the weather at 'Location' 
   
    
    } catch (err) {
      //SOMETHING GET FAIL // OR SOMETHING WRNG
      if(err instanceof Error)
      {
        setError(err.message)
      }
   
     else{
      
      setError("Something went wrong")
     }
    }
  setIsLoading(false);
  }
  return (
    <>
    <p className="text-primary">in the name of Allah</p>
    <Container id="app">
    <SearchCity onSearch={handlesearch}/>
   

   {error && <Alert variant="danger">{error}</Alert>}
   {isLoading && <Image src={imgAirplane}  className="py-5 w-75" fluid/>}
   {currentWeather && <CurrentWeather data={currentWeather}/>}
   

    </Container>
    </>
  )
}

export default App

