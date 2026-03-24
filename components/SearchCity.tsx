import Form from "react-bootstrap/Form"
import { Button  } from "react-bootstrap"
import { InputGroup } from "react-bootstrap"
import { useState } from "react"
import * as apidata from '../services/OWMAPI'
import CurrentWeather from "./CurrentWeather"



interface searchCityProps
{
    onSearch:(location:string)=>void;
}


const SearchCity:React.FC<searchCityProps>=({onSearch})=>{

const [city,setCity]=useState("");

const trimcity=city.trim();

const handleSubmit=(e:React.SubmitEvent)=>
{

    e.preventDefault();
    //PASS INPUT TO PARENT COMPONENT (APP)

    //CLEAR INPUT 
  onSearch(trimcity);
 
  setCity("")
}

return(
        <div id="search-wrapper">
            <Form id="search-form" onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <Form.Control  
                
                type="text"
                placeholder="Enter the city to search for "
                aria-label="City"
                aria-details="Search for city to show current weather for."
                value={city}
                onChange={e=>setCity(e.target.value)}
                minLength={3}
                required
                               
                />
                <Button
                
                disabled={trimcity.length<3}
                
                variant="danger" type="submit"
                 > 🔎</Button>
                   </InputGroup>
                 {trimcity.length >0 && trimcity.length<3 && (
                    <Form.Text className="text-danger text-small" > Too short to find city </Form.Text>
                 )}









              
            
            
            
            
            
            
          







            </Form>



        </div>    



)

}


export default SearchCity;