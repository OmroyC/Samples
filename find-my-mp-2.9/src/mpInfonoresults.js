export default function MPInfoNoResult(props) {
    
    let no_result;

    if (props.noResults){
        no_result = (<p>Your search for city, {props.city}, does not exist</p>);
    }

    return (
        <>
            <div>{props.noResults && no_result}</div>
        </>
    );

}