import { useState, useEffect } from 'react';
import { baseUrl } from '../../constants';

const usePost = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const postData = async (body) => {
        setLoading(true);
        try {
            const response = await fetch(baseUrl + url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return { postData, data, error, loading };
};

export default usePost;