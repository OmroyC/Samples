// perform an API call
import { useState, useEffect } from "react";

export default function useFetchData(url) {

    const [data, setData] = useState();

    useEffect(() => {

        if (url !== undefined) {

       
            fetch(url).then(response => response.json()).then(data => {
                setData(data)
            }).catch((error) => (setData(error)));

        }
    }, [url]);

    return data;
    
}