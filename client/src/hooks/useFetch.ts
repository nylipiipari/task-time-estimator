import { useEffect, useState } from "react";

function useFetch(request: RequestInfo, init?: RequestInit) {
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(request, init);
                setResponse(await response.json());
            } catch (error) {
                setError(error);
            }
        };
        
        fetchData();
    }, []);

    return { response, error };
}

export default useFetch;