import { useState, useEffect } from "react";
const useFetch = (url) => {
    const abortController = new AbortController();

    const [data, setData] = useState(null);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url,{signal: abortController.signal})
        
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(e=>setError(e));
    }, [url]);
    return { data, isloading, error };    
}
export default useFetch;