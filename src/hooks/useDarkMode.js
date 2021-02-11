import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue);
    
    useEffect(() => {
        if(values === true) {
            document.body.classList.add('dark-mode')
        }else {
            document.body.classList.remove('dark-mode')
        }
    } );

    return[values, setValues];
    
}