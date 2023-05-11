export default function MPInfoMulResult(props) {
    let mul_results;

    if (props.multipleResults.length > 1) {
        mul_results = (
            <>
                <p> 
                    Your search {props.city} yeild multiple results, 
                    choose a city from below:
                </p>
                <ul className='list-group list-group-flush'>
                    {props.multipleResults.map((city, i) => (<li className='list-group-item' key={i}>{city}</li>))}
                </ul>
            </>
       )
    }


    return (
        <div>{props.multipleResults.length > 1 && mul_results}</div>
    );
}