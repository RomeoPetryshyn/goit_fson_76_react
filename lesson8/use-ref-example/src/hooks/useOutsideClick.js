import { useEffect } from 'react';

export const useOutsideClick = (cb, ref) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log({ target: event.target, ref });
            if (ref.current && !ref.current.contains(event.target)) {
                cb();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};