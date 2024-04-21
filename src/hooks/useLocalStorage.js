import { useEffect, useState } from 'react';

const useLocalStorage = (key) => {
    const localStorageValue = localStorage.getItem(key);

    const [localVariable, setLocalVariable] = useState(
        localStorageValue ? JSON.parse(localStorageValue) : null,
    );

    useEffect(() => {
        if (localStorageValue) {
            setLocalVariable(JSON.parse(localStorageValue));
        } else {
            setLocalVariable(null);
        }
    }, [localStorageValue]);

    const setLocalStorage = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const clearLocalStorage = () => {
        localStorage.clear();
    };

    return [localVariable, setLocalStorage, clearLocalStorage];
};

export default useLocalStorage;
