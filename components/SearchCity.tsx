import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"
import { InputGroup } from "react-bootstrap"


const SearchCity =()=>{
return(
        <div id="search-wrapper">
            <Form id="search-form">
            <InputGroup className="mb-3">
                <Form.Control  
                
                type="text"
                placeholder="Enter the city to search for "
                aria-label="City"
                aria-details="Search for city to show current weather for."
                               
                />
                <Button variant="success" type="submit"> 🔎</Button>









              
            
            
            
            
            
            
            </InputGroup>







            </Form>



        </div>    



)

}


export default SearchCity;