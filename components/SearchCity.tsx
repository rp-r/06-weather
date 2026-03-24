import Form from "react-bootstrap/Form"
import { Button, ListGroup, ListGroupItem } from "react-bootstrap"
import { InputGroup } from "react-bootstrap"
import { useState } from "react"
import * as apidata from '../services/OWMAPI'
import CurrentWeather from "./CurrentWeather"


const SearchCity =()=>{

const [inputdata,setInputdata]=useState("");

const trimminputdata=inputdata.trim();

const handleSearch=(e:React.SubmitEvent)=>
{

    e.preventDefault();
    <CurrentWeather apidata={apidata.getCurrentWeather}/>
    
}

return(
        <div id="search-wrapper">
            <Form id="search-form" onSubmit={handleSearch}>
            <InputGroup className="mb-3">
                <Form.Control  
                
                type="text"
                placeholder="Enter the city to search for "
                aria-label="City"
                aria-details="Search for city to show current weather for."
                value={inputdata}
                onChange={e=>setInputdata(e.target.value)}
                required
                               
                />
                <Button
                
                disabled={trimminputdata.length<3}
                
                variant="danger" type="submit"
                 > 🔎</Button>
                   </InputGroup>
                 {trimminputdata.length >0 && trimminputdata.length<3 && (
                    <Form.Text className="text-danger text-small" > Too short to find city </Form.Text>
                 )}









              
            
            
            
            
            
            
          







            </Form>



        </div>    



)

}


export default SearchCity;