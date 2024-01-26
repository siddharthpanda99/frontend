import { useState, useEffect } from 'react';
import { useUserContext } from 'contexts/useUserContext';
import { baseUrl } from '../../constants';
const useGet = (url) => {
    const {user} = useUserContext();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    

    const getData = async () => {
        setLoading(true);
        try {
            const response = await fetch(baseUrl + url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`, },
            });
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    useEffect(() => {
      getData()
    }, [])
    

    return { getData, data, error, loading };
};

export default useGet;