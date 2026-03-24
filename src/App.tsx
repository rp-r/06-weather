import "./assets/scss/App.scss"
import { Container } from "react-bootstrap"
import CurrentWeather from "../components/CurrentWeather"
import SearchCity from "../components/SearchCity"


function App() {
  

  return (
    <>
    <p className="text-primary">in the name of Allah</p>
    <Container id="app">
    <SearchCity />
    <CurrentWeather />

    </Container>
    </>
  )
}

export default App
