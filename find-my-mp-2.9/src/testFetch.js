import { useEffect } from "react";

export default function fetchData(url) {

    useEffect(() => {
        return fetch(url).then(response => (response.json()));
    })
}