import { useState, useEffect } from 'react';

const useLoader = () => {
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(false);
    }, []);

    return { loading };
}

export default useLoader;