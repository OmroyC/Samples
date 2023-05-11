/**
 * Create the MPInfo component to fetch MP’s profile and render 
 * the profile information using react animation, 
 * the <ReactCSSTransitionGroup>. It accepts city and url props
 */

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useFetchData from './fetchData';
import MPInfoNoResult from './mpInfonoresults';
import MPInfoMainResult from './mpinfomain';
import MPInfoMulResult from './mpinfomul';

export default function MPQuery(props) {
    
    let data = useFetchData(props.url);
    
    // initializing results
    let city, multipleResults = [], singleResults =[], boolNoResult = false;

    if (data) {

        console.log("Initial data", data);
        city = data.objects.map((city) => (city.name));
        
        multipleResults = city.filter((city) => 
            (city.toLowerCase().includes(props.city.toLowerCase())));

        console.log('Multiple results', multipleResults);

        singleResults = data.objects.filter((city) => 
            (city.name.toLowerCase() === props.city.toLowerCase())); 
        
        console.log('Single results', singleResults);

        // only runs when there is no results
        if (!singleResults.length && !multipleResults.length) {
            boolNoResult = true;
        }
    }

    //if search results yeild the MP Profile
    let secondFetch = useFetchData(singleResults.length > 0 ? `https://represent.opennorth.ca/${singleResults[0].url}` : undefined);
    
    if (secondFetch) {
        console.log('2nd Fetch', secondFetch);
    }
    
    let mpProfile = {};

    let mpProfileDistrictName = undefined;

    Object.assign(mpProfile, useFetchData(secondFetch ? `https://represent.opennorth.ca/${secondFetch.related.representatives_url}` : undefined));

    // Receive data
    if (Object.keys(mpProfile).length ) {
        console.log('Mp Profile inside if', mpProfile);
        mpProfileDistrictName = mpProfile.objects[0].district_name
    }

    useEffect(() => {

        // Update for single results

        if (mpProfileDistrictName !== undefined) {

            console.log("Inside Single Results");
            console.log('Mp Profile inside useEffect', mpProfile);
            console.log('Object.keys(mpProfile).length insie useEffect', Object.keys(mpProfile).length)

            ReactDOM.render(
                ( 
                    <div id="mainResults">
                    {mpProfileDistrictName !== undefined && 
                        <MPInfoMainResult 
                            city={props.city}
                            mpProfile={mpProfile}
                        />
                    }
                    </div>
                ), document.getElementById('mpinfo'));
        }

    },[mpProfileDistrictName]);


     useEffect(() => {

        // Update for multiple results
        
        if (multipleResults.length > 1 && !singleResults.length) {
            
            console.log("Inside Multiple Results");

            ReactDOM.render(
                ( 
                    <div id="mulResults">
                    {multipleResults.length > 1 && !singleResults.length && 
                        <MPInfoMulResult 
                            city={props.city}
                            multipleResults={multipleResults}
                        />
                    }
                </div>
                ), document.getElementById('mpinfo'));
        }

    },[multipleResults.length, singleResults.length, props.city]);

     useEffect(() => {

        // Update for no results

        if (boolNoResult && multipleResults.length === 0) {
            
            console.log("Inside No Results");

            ReactDOM.render(
                ( 
                    <div id="noResults">
                        {boolNoResult && 
                            <MPInfoNoResult 
                                city={props.city}
                                noResults={boolNoResult} 
                            />
                        }
                    </div>
                ), document.getElementById('mpinfo'));
        }

    }, [multipleResults.length, boolNoResult, props.city]);

            return(null);
    }
