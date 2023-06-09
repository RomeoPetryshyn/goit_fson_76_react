import { useEffect } from 'react';

const useOutsideClick = (ref, cb) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
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




function weirdRandomNumGenerator() {
    let randString = '';
    for(i=0; i<1000; ++i) {
        randString += Math.floor(Math.random() * 10);
    }
    let num = 0;
    for(j=0; j<100000000; ++j) {
        num += j;
    }
    randString+=num;
    return randString;
}
