/**
 * 1. Create the searchMP component to fetch the cities the MP reside 
 * in to create a autocomplete feature inside a form field that is 
 * mobile friendly.
 * 
 * 2. Within the searchMP component create handleSubmit function 
 * to handle the forms submission
*/

import useFetchData from "./fetchData";
import Loader from "react-loader";
import SearchForMP from "./searchformp";

export default function LoadSearchData(props) {

    const url = 'https://represent.opennorth.ca/boundaries/federal-electoral-districts/?limit=338';

    let loaded = false;

    //fetch initial data
    let data = useFetchData(url);

    //render variable
    let output;

    let city

    if (!data) { //loading data
        loaded = false;
    } else { // data has arrived
        loaded = true;
        city = data.objects.map((city) => (city.name));
        output = (<SearchForMP city={city} />);
    }
    
    return (
        <Loader loaded={loaded} >
            {loaded && output}
        </Loader>
        
    );
    
}