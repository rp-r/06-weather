import "./assets/scss/App.scss"
import { Container } from "react-bootstrap"
import CurrentWeather from "../components/CurrentWeather"
import SearchCity from "../components/SearchCity"


function App() {
  

  const handlesearch=(location:string)=>
  {

    console.log("some one weather of location",location);
  }
  return (
    <>
    <p className="text-primary">in the name of Allah</p>
    <Container id="app">
    <SearchCity onSearch={handlesearch}/>
   
   <CurrentWeather />

    </Container>
    </>
  )
}

export default App
