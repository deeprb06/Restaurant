import { useState, useEffect } from 'react';

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const onlineFunc = () => setIsOnline(true);
        const offLineFunc = () => setIsOnline(false);

        window.addEventListener('online', onlineFunc);
        window.addEventListener('offline', offLineFunc);

        return () => {
            window.removeEventListener('online', onlineFunc);
            window.removeEventListener('online', offLineFunc);
        };
    }, []);

    return isOnline;
};

export default useOnline;
