import { useState, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import MPQuery from "./mpQuery";
import ReactAutocomplete from "react-autocomplete";

export default function SearchForMP(props) {
    
    const url = 'https://represent.opennorth.ca/boundaries/federal-electoral-districts/?limit=338';
    const toggleLoader =  false;
    const [value, setValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        let mpinfo = document.querySelector('#mpinfo');

        if (mpinfo) {
            ReactDOM.unmountComponentAtNode(mpinfo);
        }

        render(<MPQuery city={value} url={url} toggleLoader={toggleLoader}/>, document.getElementById('mpquery'));
    }

    // updating the DOM to make the form field user friendly
    useEffect(() => {

        let span = document.querySelector('span');
        let input = document.querySelector('input');
        let button = document.querySelector('button');
        let divWithinForm = document.querySelector('form div');
        
        divWithinForm.setAttribute('class', 'input-group mb-3');
        divWithinForm.removeAttribute('style');
        input.setAttribute('class', 'form-control');

        divWithinForm.appendChild(button);
        divWithinForm.insertBefore(span, divWithinForm.childNodes[0]);
        
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <span className="input-group-text" id="basic-addon1">@MP</span>
                    <ReactAutocomplete
                        items={props.city.map((city) => ({id: city, label: city}))}
                        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        getItemValue={item => item.label}
                        renderItem={(item, highlighted) =>
                        <div
                            key={item.id}
                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                        >
                            {item.label}
                        </div>
                        }
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        onSelect={value => setValue(value)}
                    />
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
            </form>
        </>
    );
}